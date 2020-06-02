import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import RootRouter from './routes/RootRouter'
import Header from './components/layouts/Header'
// import Content from './components/layouts/Content'
import Footer from './components/layouts/Footer'

import { history } from './utils/history'

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
        <RootRouter history={history} />
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
