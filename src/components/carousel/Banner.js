import React from 'react'
import styled from '@emotion/styled'
import bannerImg from '../../assets/images/sky.jpg'
import GnbSearch from '../header/GnbSearch'

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${bannerImg}) no-repeat;
  background-size: cover;
`
const SearchContainer = styled.div`
  display: flex;
  padding-top: 40vh;
  justify-content: center;
  aligne-items: center;

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
