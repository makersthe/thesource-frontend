import React from 'react'
import { Layout } from 'antd'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Logger from './utils/logger'

const App = () => {
  return (
    <Layout>
      <Header />
      <Footer />
    </Layout>
  )
}

export default App
