import React from 'react'
import styled from '@emotion/styled'
import bannerImg from '../../assets/images/sky.jpg'
import GnbSearch from '../header/GnbSearch'

const Container = styled.div`
  width: 100%;
  height: 60vh;
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
      <GnbSearch />
    </Container>
  )
}

export default MainHero
