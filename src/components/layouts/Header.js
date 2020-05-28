import React from 'react'
import { Layout } from 'antd'
import { css, cx } from 'emotion'
import styled from '@emotion/styled'

import GnbSearch from '../header/GnbSearch'
import GnbMenu from '../header/GnbMenu'
import GnbHelp from '../header/GnbHelp'
import GnbCart from '../header/GnbCart'
import GnbAvatar from '../header/GnbAvatar'

const { Header } = Layout

const headerWrapperStyle = css`
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: space-between;
  background-color: white;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.2);
`

const LeftWrapper = styled.div`
  flex: 1;
`
const RightWrapper = styled.div`
  display: flex;
`

const HeaderWrapper = () => {
  return (
    <Header className={cx('header', headerWrapperStyle)}>
      <LeftWrapper>
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
      </LeftWrapper>
      <RightWrapper>
        <GnbSearch />
        <GnbHelp />
        <GnbCart />
        <GnbAvatar />
      </RightWrapper>
    </Header>
  )
}

export default HeaderWrapper
