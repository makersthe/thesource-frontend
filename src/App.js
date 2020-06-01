import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import RootRouter from './routes/RootRouter'
import Header from './components/layouts/Header'
import Content from './components/layouts/Content'
import Footer from './components/layouts/Footer'
<<<<<<< HEAD

import Logger from './utils/logger'
=======
>>>>>>> eb8d9a525ed9b82b7b74eceed0609a302f54f960

import { history } from './utils/history'

const App = () => {
  return (
    <Layout>
      <Layout>
        <Header />
<<<<<<< HEAD
        <Content />
        <Footer />
=======
>>>>>>> eb8d9a525ed9b82b7b74eceed0609a302f54f960
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
