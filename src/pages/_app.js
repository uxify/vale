// pages/_app.js
import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client';

import App from 'next/app';
import './style.css';
import './theme.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  mode: 'no-cors',
});

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    )
  }
}

export default CustomApp;
