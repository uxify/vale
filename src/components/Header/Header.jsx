import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.css';


const Header = ({cms}) => {
  return (
    <div id="header">
      <div className={styles.logo}></div>
      <HeaderNavigation cms={cms}/>
    </div>
  )
}

export default Header