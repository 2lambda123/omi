import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-folder-unlocked')
export default class FolderUnlocked extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2.5H9.48063L11.4806 5H23V10H21V7H10.5194L8.51937 4.5H3V19H13V21H1V2.5ZM19.5 13.5C18.8096 13.5 18.25 14.0596 18.25 14.75V15.5H23.999V22H14.999V15.5H16.25V14.75C16.25 12.9551 17.7051 11.5 19.5 11.5C20.3936 11.5 21.2045 11.8619 21.791 12.4448L22.5003 13.1498L21.0904 14.5683L20.3811 13.8634C20.1541 13.6377 19.8441 13.5 19.5 13.5ZM16.999 17.5V20H21.999V17.5H16.999Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
