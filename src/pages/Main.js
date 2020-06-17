import React from 'react'
import { Row, Col, Divider } from 'antd'
import styled from '@emotion/styled'
import '@brainhubeu/react-carousel/lib/style.css'

import AudioAPI from '../components/api/AudioAPI'
import ImageAPI from '../components/api/ImageAPI'
import VideoAPI from '../components/api/VideoAPI'

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
  return (
    <div>
      <VideoAPI />
      <AudioAPI />
      <ImageAPI />
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
