import React from 'react'
import { Tooltip } from 'antd'
// import { css } from 'emotion'
import styled from '@emotion/styled'

const SectionContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-size: E0E0E0;
  @media (max-width: 485px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`

const Manual = () => {
  return (
    <SectionContainer>
      <Tooltip />
    </SectionContainer>
  )
}

export default Manual
