import React, { useState, useEffect } from 'react'
import { Row, Col, Divider, Card } from 'antd'
import Carousel from '@brainhubeu/react-carousel'
import styled from '@emotion/styled'
import { css } from 'emotion'
import '@brainhubeu/react-carousel/lib/style.css'

import axios from 'axios'

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
const FlexRow = styled(Row)`
  max-width: 1260px;
  margin: 2rem 3rem;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`
const FlexCol = styled(Col)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0 !important;
  }
`

const Main = () => {
  const [data, setData] = useState('')

  async function fetchData() {
    const response = await axios(
      'https://dev-admin.thesource.co.kr/markets/images/',
    )
    const dataElement = response.data?.map((item) => (
      <Card
        key={item.photo}
        className={css`
          margin: 1rem !important;
        `}
        hoverable
        cover={
          <img
            alt={item.username}
            src={item.photo}
            style={{ objectFit: 'cover' }}
            width="400px"
            height="400px"
          />
        }
      >
        <Meta title={item.username} description={item.description} />
      </Card>
    ))
    setData(dataElement)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
          {data}
        </Carousel>
      </SliderRow>
      <Divider />
      {/* 이미지 말고 영상 데이터 호출해 올것 */}
      <SliderRow gutter={16} type="flex" justify="center" align="top">
        <Carousel
          autoPlay={2000}
          animationSpeed={2000}
          infinite
          centeredstopAutoPlayOnHover
          draggable
          slidesPerPage={4}
        >
          {data}
        </Carousel>
      </SliderRow>
      <FlexRow gutter={16} type="flex" justify="center" align="top">
        <FlexCol span={12}>TEMP</FlexCol>
        <FlexCol span={12}>TEMP</FlexCol>
      </FlexRow>
      <Divider />
      <FlexRow gutter={16} type="flex" justify="center" align="top">
        <FlexCol span={24}>TEMP</FlexCol>
      </FlexRow>
    </div>
  )
}

export default Main
