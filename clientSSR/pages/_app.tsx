import * as React from 'react'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}