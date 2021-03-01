import { Flex, Box } from 'rebass';

import HeaderNavigation from './HeaderNavigation';
import HeaderLinks from './HeaderLinks';
import styles from './Header.module.css';


const Header = ({ cms }) => {
  const {logo, navigation} = cms;
  return (
    <div className={styles.header}>
      <div className={styles.headerTopbar}></div>
      <Flex>
        <Box
          p={0}
          color='white'
          bg='primary'>
          <div className={styles.logo}></div>
        </Box>
        <Box
          p={3}
          flex={1}
          color='#111'
          bg='secondary'>
          <HeaderNavigation cms={navigation} />
        </Box>
        <Box
          color='white'
          bg='secondary'>
          <HeaderLinks cms={cms} />
        </Box>
      </Flex>
    </div>
  )
}

export default Header