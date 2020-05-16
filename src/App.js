import React from 'react'
import { Layout } from 'antd'

import Header from './components/layouts/Header'

import Logger from './utils/logger'

class App extends React.Component {
  componentDidMount() {
    Logger.info('App.js:componentDidMount()', this)
  }

  render() {
    return (
      <Layout>
        <Header />
      </Layout>
    )
  }
}

export default App
