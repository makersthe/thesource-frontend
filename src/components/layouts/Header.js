import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Layout } from 'antd'
import { css, cx } from 'emotion'
import styled from '@emotion/styled'

import GnbMenu from '../header/GnbMenu'
import GnbHelp from '../header/GnbHelp'
import GnbCart from '../header/GnbCart'
import GnbAvatar from '../header/GnbAvatar'

import Slider from '../header/slider'

const { Header } = Layout

const headerWrapperStyle = css`
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: space-between;
  background-color: white !important;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.2);
`

const LeftWrapper = styled.div`
  flex: 1;
  @media only screen and (max-width: 850px) {
    display: flex;
    float: left;
  }
`
const RightWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 850px) {
    display: flex;
    float: right;
  }
`

const HeaderWrapper = inject('routingStore')(
  observer(() => {
    return (
      <Header className={cx('header', headerWrapperStyle)}>
        <LeftWrapper>
          <Link
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
              outline: none;

              :hover {
                color: black;
              }
            `}
            to="/"
            onKeyPress={null}
            role="link"
            tabIndex={0}
          >
            TheSource
          </Link>
          <GnbMenu />
        </LeftWrapper>
        <RightWrapper>
          <GnbHelp />
          <GnbCart />
          <GnbAvatar />
          <Slider />
        </RightWrapper>
      </Header>
    )
  }),
)

export default HeaderWrapper
