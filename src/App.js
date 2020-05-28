import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <Layout>
      <Layout>
        <Header />
      </Layout>
      <Layout
        className={css`
          min-height: 100vh;
        `}
      >
        <Footer />
      </Layout>
    </Layout>
  )
}

export default App
