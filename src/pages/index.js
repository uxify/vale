import { gql, useQuery } from '@apollo/client';
import DefaultLayout from '../components/Layouts';

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


const HomePage = () => {

  const { loading, error, data } = useQuery(getMainContent);
  console.log('render', loading, error, data)
  return (
    <DefaultLayout>
      <div className='section'>
        <div className='content'>Ola Home!</div>
      </div>
      <div className='section'>
        <div className='content'>Ola Home!</div>
      </div>
      <div className='section'>
        <div className='content'>Ola Home!</div>
      </div>
      <div className='section'>
        <div className='content'>Ola Home!</div>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
