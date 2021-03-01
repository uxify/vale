import { gql, useQuery } from '@apollo/client';

const getPageContent = gql`
	query {
		page(id:3) {
			id
			title
			description
			url
      	}
    }
      
`;
const Content = ({ children }) => {
	const { loading, error, data = {} } = useQuery(getPageContent);
	console.log('page', data)
	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<div className='page' page={data.page}>{children}</div>
	)
}

export default Content