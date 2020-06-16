import React, { useState, useEffect } from 'react'
import { Row, Card, Button } from 'antd'
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


const VideoAPI = () => {
  const [data, setData] = useState('')

  async function fetchData() {
    const responseImage = await axios(
      'https://dev-admin.thesource.co.kr/markets/videos/',
    )
    const dataElement = responseImage.data?.map((item) => (
      <Card
        key={item.video}
        className={css`
          margin: 1rem !important;
        `}
        hoverable
        cover={
          <img
            alt={item.username}
            src={item.video_thumbnail}
            style={{ objectFit: 'cover' }}
            width="400px"
            height="400px"
          />
        }
      >
        <Meta title={item.title} description={item.description} />
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
      <Button
        className={css`
          display: flex;
          justify: center;
          text-align: center;
        `}
      >
        더보기+
      </Button>
    </div>
  )
}

export default VideoAPI
