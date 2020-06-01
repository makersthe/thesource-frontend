import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import RootRouter from '../../routes/RootRouter'

const ContentWrapper = () => {
  return (
    <Layout
      className={css`
        padding: 1rem;
      `}
    >
      <RootRouter />
    </Layout>
  )
}

export default ContentWrapper
