// pages/_app.js
import React from 'react';
import App from 'next/app';
import './style.css';
import './theme.css';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default CustomApp;
