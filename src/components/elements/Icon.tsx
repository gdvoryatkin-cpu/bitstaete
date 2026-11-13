import homeIcon from '../../assets/figma/home.svg'
import holdingsIcon from '../../assets/figma/holdings.svg'
import transactionsIcon from '../../assets/figma/transactions.svg'
import accountIcon from '../../assets/figma/account.svg'
import contactIcon from '../../assets/figma/contact.svg'
import signOutIcon from '../../assets/figma/sign-out.svg'
import bellIcon from '../../assets/figma/bell.svg'
import chevronDownIcon from '../../assets/figma/chevron-down.svg'
import menuIcon from '../../assets/figma/menu.svg'
import closeIcon from '../../assets/figma/close.svg'

const iconSources = {
  home: homeIcon,
  holdings: holdingsIcon,
  transactions: transactionsIcon,
  account: accountIcon,
  contact: contactIcon,
  'sign-out': signOutIcon,
  bell: bellIcon,
  'chevron-down': chevronDownIcon,
  menu: menuIcon,
  close: closeIcon,
} as const

export type IconName = keyof typeof iconSources

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className }: IconProps) {
  const source = `url("${iconSources[name]}")`
  const style = {
    width: size,
    height: size,
    maskImage: source,
    WebkitMaskImage: source,
  }

  return <span aria-hidden="true" className={['bs-icon', className].filter(Boolean).join(' ')} style={style} />
}
