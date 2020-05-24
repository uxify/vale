import Link from 'next/link';

const HeaderNavigation = ({ cms }) => {
  const { headerMenu } = cms;
  return (
    headerMenu.map(({ id, href, title }) => (
      <Link key={id} href={href}>{title}</Link>
    ))
  )
}

export default HeaderNavigation;