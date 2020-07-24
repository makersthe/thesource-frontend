import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import bannerImg from '../../assets/images/sky.jpg'
import GnbSearch from '../header/GnbSearch'

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 50px;
  background: url(${bannerImg}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainHero = () => {
  // TODO: Carousel 같이 배경 전환
  return (
    <Container>
      <div
        className={css`
          display: flex;
        `}
      >
        <GnbSearch />
      </div>
    </Container>
  )
}

export default MainHero
