import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'

import PopularImage from '../assets/images/bridge.jpg'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  padding-bottom: 2rem;
  @media only screen and (max-width: 850px) {
  }
`
const Suggest = () => {
  return (
    <Wrapper>
      <div
        className={css`
          grid-column: 1;
          grid-row: 1;
        `}
      >
        <img alt="first" src={`${PopularImage}`} width="100%" height="auto" />
      </div>
      <div
        className={css`
          grid-column: 1;
          grid-row: 2;
        `}
      >
        <img alt="second" src={`${PopularImage}`} width="100%" height="auto" />
      </div>
      <div
        className={css`
          grid-column: 2 / 4;
          grid-row: 1 / 3;
        `}
      >
        <img alt="third" src={`${PopularImage}`} width="100%" height="auto" />
      </div>
      <div
        className={css`
          grid-column: 4;
          grid-row: 1;
        `}
      >
        <img alt="fourth" src={`${PopularImage}`} width="100%" height="auto" />
      </div>
      <div
        className={css`
          grid-column: 4;
          grid-row: 2;
        `}
      >
        <img alt="fifth" src={`${PopularImage}`} width="100%" height="auto" />
      </div>
    </Wrapper>
  )
}

export default Suggest
