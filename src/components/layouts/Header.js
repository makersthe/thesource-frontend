import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import GnbSearch from '../header/GnbSearch'
import GnbMenu from '../header/GnbMenu'

const { Header } = Layout

const HeaderWrapper = () => {
  return (
    <Header
      className={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
      `}
    >
      <a
        className={css`
          width: 160px;
          height: inherit;
          margin: 0;
          margin-right: 1rem;
          float: left;
          font-family: 'Ubuntu', sans-serif;
          font-style: italic;
          color: black;
          text-decoration: none;
          font-weight: bolder;
          font-size: 2rem;

          :hover {
            color: black;
          }
        `}
        href="/"
      >
        TheSource
      </a>
      <GnbMenu />
      <GnbSearch />
    </Header>
  )
}

export default HeaderWrapper
