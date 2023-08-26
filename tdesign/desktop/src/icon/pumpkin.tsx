import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-pumpkin')
export default class Pumpkin extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '24px',
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
        <g id="&amp;#229;&amp;#141;&amp;#151;&amp;#231;&amp;#147;&amp;#156;_pumpkin">
          <path
            id="Union"
            d="M11.2774 1.11328L11.8321 1.94533C12.2997 2.64682 12.5802 3.3501 12.7484 4.03536C14.4015 4.19293 15.6327 4.8426 16.3127 5.26837C17.0207 5.02066 17.9078 4.97082 18.7469 5.14427C19.9255 5.3879 21.1708 6.1024 21.8948 7.55363C22.3594 8.48483 22.4952 9.7942 22.4575 11.1042C22.4187 12.4514 22.1909 13.9489 21.8102 15.3504C21.4319 16.7432 20.8861 18.1019 20.1772 19.1368C19.4915 20.1378 18.4917 21.0589 17.1688 21.0589H15.2807C15.0515 21.2775 14.7591 21.4752 14.3788 21.6312C13.784 21.875 13.0152 22 12.0039 22C10.9925 22 10.2237 21.875 9.62896 21.6312C9.24862 21.4752 8.95621 21.2775 8.72702 21.0589H6.36938C5.10071 21.0589 4.19043 20.0512 3.6037 19.0946C2.97341 18.0669 2.47669 16.718 2.12942 15.3312C1.78002 13.9359 1.5672 12.4431 1.53543 11.099C1.50456 9.79321 1.63989 8.48419 2.10413 7.55363C2.82862 6.10142 4.07705 5.38751 5.25693 5.14418C6.0971 4.97091 6.98598 5.02061 7.69486 5.26846C8.29446 4.89307 9.3225 4.34355 10.6905 4.11077C10.5696 3.75457 10.4016 3.40512 10.168 3.05473L9.61327 2.22268L11.2774 1.11328ZM10.9905 6.08802C9.86766 6.28539 9.04852 6.77007 8.58232 7.07658C7.87672 8.8697 7.892 11.5101 8.29597 14.0425C8.5033 15.3422 8.80429 16.5591 9.1244 17.5356C9.45759 18.5519 9.77501 19.193 9.96816 19.435L9.99521 19.4689L10.0192 19.505C10.0725 19.5851 10.1539 19.6848 10.3877 19.7807C10.6538 19.8898 11.1371 20 12.0039 20C12.8707 20 13.354 19.8898 13.6201 19.7807C13.8538 19.6848 13.9352 19.5851 13.9885 19.505L14.0125 19.4689L14.0396 19.435C14.2327 19.193 14.5501 18.5519 14.8833 17.5356C15.2034 16.5591 15.5044 15.3422 15.7118 14.0425C16.1157 11.5101 16.131 8.86969 15.4254 7.07657C14.9558 6.76784 14.1282 6.27834 12.9927 6.08377C13.0002 6.37436 13.0001 6.65667 13 6.92873C13 6.95258 13 6.97634 13 7.00003V8.00003H11V7.00003C11 6.68344 10.9992 6.38041 10.9905 6.08802ZM17.5266 7.04887C18.1757 9.26372 18.0623 12.0038 17.6868 14.3576C17.4637 15.7559 17.1386 17.0762 16.7838 18.1586C16.6815 18.4706 16.5735 18.7733 16.4606 19.0589H17.1688C17.4893 19.0589 17.9662 18.8255 18.5271 18.0066C19.0648 17.2217 19.5355 16.0951 19.8802 14.8261C20.2225 13.5659 20.4243 12.2251 20.4583 11.0466C20.4933 9.83089 20.3449 8.92703 20.1052 8.44646C19.7023 7.63887 19.0321 7.24551 18.342 7.10286C18.0429 7.04103 17.7648 7.03082 17.5266 7.04887ZM6.48108 7.04901C6.24169 7.03077 5.96194 7.04087 5.6609 7.10296C4.96775 7.24591 4.29619 7.63985 3.89378 8.44646C3.65372 8.92767 3.50603 9.83188 3.53487 11.0518C3.5628 12.2335 3.75238 13.5789 4.06951 14.8454C4.38876 16.1203 4.82269 17.2567 5.30857 18.0489C5.83801 18.9121 6.22943 19.0589 6.36938 19.0589H7.54708C7.43426 18.7733 7.3262 18.4706 7.22393 18.1586C6.86909 17.0762 6.54402 15.7559 6.32094 14.3576C5.94547 12.0039 5.83203 9.26384 6.48108 7.04901Z"
          />
        </g>
      </svg>
    )
  }
}
