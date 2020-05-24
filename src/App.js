import React from 'react'
import { Layout } from 'antd'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Logger from './utils/logger'

class App extends React.Component {
  componentDidMount() {
    Logger.info('App.js:componentDidMount()', this)
  }

  render() {
    return (
      <Layout>
        <Header />
        <Footer />
      </Layout>
    )
  }
}

export default App
