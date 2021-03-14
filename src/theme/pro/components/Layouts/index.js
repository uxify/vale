import { useQuery } from '@apollo/client';
import { getMainContent } from 'gql/gqlQueries';
import Header from '../Header';
import Footer from '../Footer';

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
