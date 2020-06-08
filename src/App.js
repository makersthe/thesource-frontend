import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import RootRouter from './routes/RootRouter'
import Header from './components/layouts/Header'
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
          display: flex;
          /* justify-content: center; */
          align-items: center;
          flex-flow: row wrap;
          min-height: 100vh !important;
        `}
      >
        <RootRouter history={history} />
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
