import Link from 'next/link';

const HeaderNavigation = ({ navigation=[] }) => {
  return (
    navigation.map(({ pageId, link, name }) => (
      <Link key={pageId} href={link}>{name}</Link>
    ))
  )
}

export default HeaderNavigation;