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
}
`;


export const getPageContent = gql`
	query PageContent($pageId: ID!) {
		page(id: $pageId) {
			id
			title
			description
			url
		}
	}
`;
