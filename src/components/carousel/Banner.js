import React from 'react'
import styled from '@emotion/styled'
import bannerImg from '../../assets/images/bridge.jpg'
import GnbSearch from '../header/GnbSearch'

const Container = styled.div`
  display: block;
  width: 100%;
  height: 60vh;
  background: url('../../assets/images/bridge.jpg');
`
const SearchContainer = styled.div`
  display: flex;
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
