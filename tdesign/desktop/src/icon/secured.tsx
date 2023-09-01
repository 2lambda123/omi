import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-secured')
export default class Secured extends WeElement<IconProps> {
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
          d="M12 0.440552L22 3.94055V12C22 16.1271 19.4665 19.0117 17.1042 20.8031C15.9133 21.7063 14.7282 22.3623 13.8434 22.7924C13.3998 23.008 13.0283 23.1685 12.7648 23.2761C12.6329 23.33 12.5278 23.3707 12.454 23.3985C12.4171 23.4124 12.388 23.4232 12.3672 23.4307L12.3423 23.4397L12.3347 23.4424L12.3321 23.4433L12.3311 23.4436C12.3307 23.4438 12.3304 23.4439 12 22.5C11.6696 23.4439 11.6693 23.4438 11.6689 23.4436L11.6679 23.4433L11.6653 23.4424L11.6577 23.4397L11.6328 23.4307C11.612 23.4232 11.5829 23.4124 11.546 23.3985C11.4722 23.3707 11.3671 23.33 11.2352 23.2761C10.9717 23.1685 10.6002 23.008 10.1566 22.7924C9.27184 22.3623 8.08675 21.7063 6.89576 20.8031C4.53351 19.0117 2 16.1271 2 12V3.94055L12 0.440552ZM12 22.5L11.6689 23.4436L12 23.5595L12.3311 23.4436L12 22.5ZM12 21.4281C12.0029 21.4269 12.0058 21.4257 12.0087 21.4245C12.2374 21.3312 12.569 21.1881 12.9691 20.9936C13.7718 20.6034 14.8367 20.0126 15.8958 19.2095C18.0335 17.5884 20 15.223 20 12V5.35951L12 2.55951L4 5.35951V12C4 15.223 5.96649 17.5884 8.10424 19.2095C9.16325 20.0126 10.2282 20.6034 11.0309 20.9936C11.431 21.1881 11.7626 21.3312 11.9913 21.4245C11.9942 21.4257 11.9971 21.4269 12 21.4281ZM18.0721 8.34317L11.001 15.4142L6.75839 11.1716L8.17261 9.75739L11.001 12.5858L16.6579 6.92896L18.0721 8.34317Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}
