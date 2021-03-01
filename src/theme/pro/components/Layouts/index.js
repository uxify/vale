import { gql, useQuery } from '@apollo/client';

import Header from '../Header';
import Footer from '../Footer';

const getMainContent = gql`
    query {
      mainContent {
        baseUrl
        theme {
          id
          name
          colorPrimary
        }
        header {
          logo {
            imgUrl
            height
            width
          }
          navigation {
            pageId
            name
            link
          }
        }
        footer {
          topFooter
          mainFooter
          bottomFooter
        }
      }
      page(id:3) {
        id
        title
        description
        url
      }
    }
      
  `;

const Layout = ({ children }) => {
  const { loading, error, data = {} } = useQuery(getMainContent);

  if (loading) {
    return <div>Loading...</div>
  }
  const { header, footer } = data.mainContent;
  return (
    <>
      <Header cms={header} />
      {children}
      <Footer cms={footer} />
    </>
  )
}

export default Layout
