import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'antd'
import Carousel from '@brainhubeu/react-carousel'
import styled from '@emotion/styled'
import { css } from 'emotion'
import '@brainhubeu/react-carousel/lib/style.css'

import axios from 'axios'

const SliderRow = styled(Row)`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 500px;
  margin: 2rem 0;
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`

const VideoCarousel = () => {
  const [data, setData] = useState('')

  async function fetchData() {
    const responseImage = await axios(
      'https://dev-admin.thesource.co.kr/markets/videos/',
    )
    const dataElement = responseImage.data?.map((item) => (
      <Link to={`/videos/${item.id}`}>
        <img
          key={item.id}
          className={css`
            margin: 1rem !important;
          `}
          hoverable
          alt={item.username}
          src={`https://dev-admin.thesource.co.kr${item.video_thumbnail}`}
          style={{ objectFit: 'cover' }}
          width="500px"
          height="400px"
        />
      </Link>
    ))
    setData(dataElement)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <SliderRow
        gutter={16}
        type="flex"
        justify="center"
        align="top"
        className={css`
          display: flex;
          padding: 8px 0;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          width: 100vw;
        `}
      >
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
    </div>
  )
}

export default VideoCarousel
