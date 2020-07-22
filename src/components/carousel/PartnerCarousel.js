import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import { Card, Row } from 'antd'
import Carousel from '@brainhubeu/react-carousel'

import logoKibo from '../../assets/images/company/kibo.jpg'
import logoVenture from '../../assets/images/company/venture.jpg'
import logoEG from '../../assets/images/company/epicgardner.jpg'
import logoElectronic from '../../assets/images/company/electronic.jpg'

const { Meta } = Card

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
      <SliderRow gutter={16} type="flex" justify="center" align="top">
        <Carousel
          autoPlay={3000}
          animationSpeed={2000}
          infinite
          centered
          stopAutoPlayOnHover
          draggable
          // arrows
          slidesPerPage={3}
        >
          <Card
            className={css`
              width: 240;
            `}
            hoverable
            cover={<img alt="venture" src={`${logoVenture}`} />}
          >
            <Meta title="중소기업벤처부" description="" />
          </Card>
          <Card
            className={css`
              width: 240;
            `}
            hoverable
            cover={<img alt="kibo" src={`${logoKibo}`} />}
          >
            <Meta title="기술보증기금" description="" />
          </Card>
          <Card
            className={css`
              width: 240;
            `}
            hoverable
            cover={<img alt="epicgardner" src={`${logoEG}`} />}
          >
            <Meta title="에픽가드너" description="" />
          </Card>
          <Card
            className={css`
              width: 240;
            `}
            hoverable
            cover={<img alt="electronic" src={`${logoElectronic}`} />}
          >
            <Meta title="엘렉트로닉게이샤" description="" />
          </Card>
        </Carousel>
      </SliderRow>
    </div>
  )
}

export default PartnerCarousel
