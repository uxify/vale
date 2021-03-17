import { useQuery } from '@apollo/client';
import Head from 'next/head'
import { getPageContent } from 'gql/gqlQueries';

const Content = ({ children, pageId }) => {
	const { loading, error, data = {} } = useQuery(getPageContent, { variables: { pageId } });
	console.log('page', data)
	if (loading) {
		return <div>Loading...</div>
	}
	const {page:{title, description, url}} = data;
	return (
		<>
		<Head>
			<title>{title}</title>
			<meta name="Description" CONTENT={description}></meta>
		</Head>
		<div className='page'>{description}</div>
		</>
	)
}

export default Content