import { useQuery } from '@apollo/client';
import { getPageContent } from 'gql/gqlQueries';

const Content = ({ children, pageId }) => {
	const { loading, error, data = {} } = useQuery(getPageContent, { variables: { pageId } });
	console.log('page', data)
	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<div className='page' page={data.page}>{children}</div>
	)
}

export default Content