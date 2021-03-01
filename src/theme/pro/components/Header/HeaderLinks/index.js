import Link from 'next/link';
import { Flex, Box } from 'rebass';
import styles from '../Header.module.css';

const HeaderLinks = ({ cms }) => {
  const { navigation } = cms;
  return (
    <Flex height={'100%'}>
      <div className={styles.quickLinks}>
        {
          navigation.map(({ pageId, name, link }) => (
            <Link key={pageId} href={link}>
              <a className={styles.linkBox}>{name}</a>
            </Link>
          ))
        }
      </div>
    </Flex>

  )
}

export default HeaderLinks;