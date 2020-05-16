import React from 'react'
import { Layout } from 'antd'
import Logger from '../../utils/logger'

const { Header } = Layout

class HeaderWrapper extends React.Component {
  componentDidMount() {
    Logger.info('Header.js:componentDidMount()', this)
  }

  render() {
    return (
      <Layout className="layout">
        <Header />
      </Layout>
    )
  }
}

export default HeaderWrapper
