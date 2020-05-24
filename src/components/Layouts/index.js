import Header from '../Header';

import layout from '../../cms/layout';

const Layout = ({ children }) => {
  const { headerObject } = layout;
  return (
    <div>
      <Header cms={headerObject}/>
      {children}
    </div>
  )
}

export default Layout
