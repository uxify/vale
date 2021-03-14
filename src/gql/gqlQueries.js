import { gql } from '@apollo/client';



export const getMainContent = gql`
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