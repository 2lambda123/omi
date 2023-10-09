import { isArray, hyphenate, capitalize, createStyleSheet } from './utils'
import { diff } from './diff'
import { ExtendedElement } from './dom'
import 'weakmap-polyfill'
import { VNode } from './vdom'
import { setActiveComponent } from './reactivity'

let id = 0

const adoptedStyleSheetsMap = new WeakMap()
type Module = { default: string }
type CSSItem = Module | string

type PropType = Object | Number | String | Boolean

type PropTypes = {
  [key: string]: PropType | Array<PropType>
}

export class Component extends HTMLElement {
  static is = 'Component'
  static defaultProps: Record<string, unknown>
  static propTypes: PropTypes
  static css: CSSItem | CSSItem[]
  static isLightDOM: boolean
  static noSlot: boolean

  props: Record<string, unknown>
  prevProps: Record<string, unknown> | null
  elementId: number
  isInstalled: boolean
  store?: unknown
  inject?: string[]
  injection?: { [key: string]: unknown }
  renderRoot?: ExtendedElement | ShadowRoot | Component
  rootElement: ExtendedElement | ExtendedElement[] | null

  constructor() {
    super()
    // @ts-ignore fix lazy load props missing
    this.props = Object.assign({}, (this.constructor as typeof Component).defaultProps, this.props)
    this.elementId = id++
    this.isInstalled = false
    this.rootElement = null
    this.prevProps = null
  }

  injectObject() {
    let p: ExtendedElement = this.parentNode as ExtendedElement
    while (p && !this.store) {
      this.store = p.store
      p = (p.parentNode || p.host) as ExtendedElement
    }

    if (this.inject) {
      this.injection = {}
      p = this.parentNode as ExtendedElement
      let provide: unknown
      while (p && !provide) {
        provide = p.provide
        p = (p.parentNode || p.host) as ExtendedElement
      }
      if (provide) {
        this.inject.forEach(injectKey => {
          // @ts-ignore
          this.injection[injectKey] = provide[injectKey]
        })
      }
    }
  }

  createRenderRoot(): ShadowRoot | Component {
    if ((this.constructor as typeof Component).isLightDOM) {
      return this
    } else {
      if (this.shadowRoot) {
        let fc: ChildNode | null
        while ((fc = this.shadowRoot.firstChild)) {
          this.shadowRoot.removeChild(fc)
        }
        return this.shadowRoot
      } else {
        return this.attachShadow({
          mode: 'open'
        })
      }
    }
  }

  applyAdoptedStyleSheets() {
    if (!(this.constructor as typeof Component).isLightDOM && !adoptedStyleSheetsMap.has(this.constructor)) {
      const css = (this.constructor as typeof Component).css
      if (css) {
        let styleSheets: CSSStyleSheet[] = []
        if (typeof css === 'string') {
          styleSheets = [createStyleSheet(css)]
        } else if (isArray(css)) {
          styleSheets = (css as Module[]).map(styleSheet => {
            if (typeof styleSheet === 'string') {
              return createStyleSheet(styleSheet)
            } else if (
              (styleSheet as Module).default &&
              typeof (styleSheet as Module).default === 'string'
            ) {
              return createStyleSheet((styleSheet as Module).default)
            } else {
              return styleSheet
            }
          }) as CSSStyleSheet[]
        } else if ((css as Module).default && typeof (css as Module).default === 'string') {
          styleSheets = [createStyleSheet((css as Module).default)]
        } else {
          styleSheets = [css as unknown as CSSStyleSheet]
        }
        (this.renderRoot as ShadowRoot).adoptedStyleSheets = styleSheets
        adoptedStyleSheetsMap.set(this.constructor, styleSheets)
      }
    } else {
      (this.renderRoot as ShadowRoot).adoptedStyleSheets = adoptedStyleSheetsMap.get(
        this.constructor
      )
    }
  }
  connectedCallback(): void {
    this.injectObject()
    this.attrsToProps()
    this.beforeInstall()
    this.install()
    this.afterInstall()
    this.renderRoot = this.createRenderRoot()
    this.applyAdoptedStyleSheets()
    this.beforeRender()
    setActiveComponent(this)
    // @ts-ignore
    const rendered = this.render(this.props, this.store)
    setActiveComponent(null)
    this.rootElement = diff(null, rendered as VNode, null, this, false)
    this.rendered()
    if (isArray(this.rootElement)) {
      (this.rootElement as Element[]).forEach((item) => {
        this.renderRoot?.appendChild(item)
      })
    } else {
      this.renderRoot?.appendChild(this.rootElement as Element)
    }
    this.installed()
    this.isInstalled = true
  }

  disconnectedCallback(): void {
    this.uninstall()
    this.isInstalled = false
  }

  update(updateSelf?: boolean): void {

    this.beforeUpdate()
    this.beforeRender()
    this.attrsToProps()
    setActiveComponent(this)
    // @ts-ignore
    const rendered = this.render(this.props, this.store)
    setActiveComponent(null)
    this.rendered()

    this.rootElement = diff(
      this.rootElement,
      rendered as VNode,
      this.renderRoot as ExtendedElement,
      this,
      !!updateSelf
    )
    this.updated()
  }

  updateProps(obj: Record<string, unknown>): void {
    Object.keys(obj).forEach((key) => {
      this.props[key] = obj[key]
      if (this.prevProps) {
        this.prevProps[key] = obj[key]
      }
    })
    this.update()
  }

  updateSelf(): void {
    this.update(true)
  }

  removeAttribute(key: string): void {
    super.removeAttribute(key)
    // Avoid executing removeAttribute methods before connectedCallback
    this.isInstalled && this.update()
  }

  setAttribute(key: string, val: string | object): void {
    if (val && typeof val === 'object') {
      super.setAttribute(key, JSON.stringify(val))
    } else {
      super.setAttribute(key, val)
    }
    // Avoid executing setAttribute methods before connectedCallback
    this.isInstalled && this.update()
  }

  nativeRemoveAttribute(key: string): void {
    super.removeAttribute(key)
  }

  nativeSetAttribute(key: string, val: string): void {
    super.setAttribute(key, val)
  }

  attrsToProps(): void {
    if (this.props.ignoreAttrs) return
    const ele = this
    const attrs = (this.constructor as typeof Component).propTypes
    if (!attrs) return
    Object.keys(attrs).forEach((key) => {
      const types = isArray(attrs[key]) ? attrs[key] : [attrs[key]]
      const val = ele.getAttribute(hyphenate(key))
      if (val !== null) {
        for (let i = 0; i < (types as Array<PropType>).length; i++) {
          const type = (types as Array<PropType>)[i]
          let matched = false
          switch (type) {
            case String:
              ele.props[key] = val
              matched = true
              break
            case Number:
              ele.props[key] = Number(val)
              matched = true
              break
            case Boolean:
              if (val === 'false' || val === '0') {
                ele.props[key] = false
              } else {
                ele.props[key] = true
              }
              matched = true
              break
            case Array:
            case Object:
              try {
                ele.props[key] = JSON.parse(val)
              } catch (e) {
                console.warn(
                  `The ${key} object prop does not comply with the JSON specification, the incorrect string is [${val}].`
                )
              }
              matched = true
              break
          }
          if (matched) break
        }
      } else {
        if (
          (ele.constructor as typeof Component).defaultProps &&
          (ele.constructor as typeof Component).defaultProps.hasOwnProperty(key)
        ) {
          ele.props[key] = (ele.constructor as typeof Component).defaultProps[key]
        } else {
          ele.props[key] = null
        }
      }
    })
  }

  fire(name: string, data: unknown): void {
    const handler = this.props[`on${capitalize(name)}`] as Function
    if (handler) {
      handler(
        new CustomEvent(name, {
          detail: data
        })
      )
    } else {
      this.dispatchEvent(
        new CustomEvent(name, {
          detail: data
        })
      )
    }
  }

  beforeInstall() { }

  install() { }

  afterInstall() { }

  installed() { }

  uninstall() { }

  beforeUpdate() { }

  updated() { }

  beforeRender() { }

  rendered() { }

  receiveProps() { }
}
