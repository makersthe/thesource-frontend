import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import FooterMenu from '../footer/footerMenu'

import Logger from '../../utils/logger'

const { Footer } = Layout

class FooterWrapper extends React.Component {
  render() {
    Logger.info('Footer.js:render()', this)
    return (
      <Footer
        className={css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <div>
          <h1
            className={`logo ${css`
              width: 160px;
              height: inherit;
              margin: 0;
              float: left;
              font-family: 'Ubuntu', sans-serif;
              font-style: italic;
              color: Black;
              font-weight: bolder;
              font-size: 2rem;
            `}`}
          >
            TheSource
          </h1>
          <br />
          <br />
          <br />
          <p> &copy;2018 TheSource. All Right Reserved</p>
        </div>
        <FooterMenu
          className={css`
            display: flex;
            align-items: center;
            justify-content: flex-start;
          `}
        />
      </Footer>
    )
  }
}

export default FooterWrapper
