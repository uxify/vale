import Header from '../Header';
import Footer from '../Footer';

import layout from '../../cms/layout';

const Layout = ({ children }) => {
  const { headerObject, footerObject } = layout;
  return (
    <div>
      <Header cms={headerObject}/>
      <div className='page'>{children}</div>
      <Footer cms={footerObject}/>
    </div>
  )
}

export default Layout
