import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import GnbSearch from '../header/GnbSearch'
import GnbMenu from '../header/GnbMenu'

import Logger from '../../utils/logger'

const { Header } = Layout

class HeaderWrapper extends React.Component {
  render() {
    Logger.info('Header.js:render()', this)
    return (
      <Header
        className={css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <span
          className={`logo ${css`
            width: 160px;
            height: inherit;
            margin: 0;
            float: left;
            font-family: 'Ubuntu', sans-serif;
            font-style: italic;
            color: white;
            font-weight: bolder;
            font-size: 2rem;
          `}`}
        >
          TheSource
        </span>
        <GnbSearch />
        <GnbMenu />
      </Header>
    )
  }
}

export default HeaderWrapper
