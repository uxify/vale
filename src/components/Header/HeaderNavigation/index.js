import Link from 'next/link';

const HeaderNavigation = ({ cms }) => {
  const { headerMenu } = cms;
  return (
    headerMenu.map(({ id, href, title }) => (
      <Link key={id} href={href}><a>{title}</a></Link>
    ))
  )
}

export default HeaderNavigation;