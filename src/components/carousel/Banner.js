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
  @media (max-width: 485px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`
const SearchContainer = styled.div`
  display: flex;
  padding-top: 30vh;
  justify-content: center;
  aligne-items: center;
  @media (max-width: 485px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`

const Banner = () => {
  return (
    <div>
      <Container>
        <SearchContainer>
          <GnbSearch />
        </SearchContainer>
      </Container>
    </div>
  )
}

export default Banner
