import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import { Row } from 'antd'

import logoKibo from '../../assets/images/company/kibo.jpg'
import logoVenture from '../../assets/images/company/venture.jpg'
import logoEG from '../../assets/images/company/epicgardner.jpg'
import logoElectronic from '../../assets/images/company/electronic.jpg'

const SliderRow = styled(Row)`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 600px;
  margin: 2rem 0;
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`

const PartnerCarousel = () => {
  return (
    <div>
      <SliderRow gutter={12} type="flex" justify="center" align="flex-start">
        <img
          className={css`
            border-radius: 2rem;
            margin-right: 2rem;
          `}
          alt="venture"
          src={`${logoVenture}`}
        />
        <img
          className={css`
            border-radius: 2rem;
            margin-right: 2rem;
          `}
          alt="kibo"
          src={`${logoKibo}`}
        />
        <img
          className={css`
            border-radius: 2rem;
            margin-right: 2rem;
          `}
          alt="epicgardner"
          src={`${logoEG}`}
        />
        <img
          className={css`
            border-radius: 2rem;
          `}
          alt="electronic"
          src={`${logoElectronic}`}
        />
      </SliderRow>
    </div>
  )
}

export default PartnerCarousel
