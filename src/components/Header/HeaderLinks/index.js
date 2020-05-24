import Link from 'next/link';
import { Flex, Box } from 'rebass';
import styles from '../Header.module.css';

const HeaderLinks = ({ cms }) => {
  const { headerLinks } = cms;
  return (
    <Flex height={'100%'}>
      <div className={styles.quickLinks}>
        {
          headerLinks.map(({ id, href, title }) => (
            <Link key={id} href={href}>
              <a className={styles.linkBox}>{title}</a>
            </Link>
          ))
        }
      </div>
    </Flex>

  )
}

export default HeaderLinks;