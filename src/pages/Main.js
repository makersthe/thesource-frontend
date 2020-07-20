import React from 'react'
import {
  Row,
  // Col,
  Divider,
  Typography,
} from 'antd'
import { css } from 'emotion'
import styled from '@emotion/styled'
// import '../components/carousel/node_modules/@brainhubeu/react-carousel/lib/style.css'

import AudioCarousel from '../components/carousel/AudioCarousel'
import ImageCarousel from '../components/carousel/ImageCarousel'
import VideoCarousel from '../components/carousel/VideoCarousel'
import Banner from '../components/carousel/Banner'
import Manual from '../components/Manual'

const { Title } = Typography

const Wrapper = styled.div`
  max-width: 1260px;
  margin: 2rem 3rem;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
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
// const FlexCol = styled(Col)`
//   margin-top: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media (max-width: 700px) {
//     max-width: 100%;
//     padding: 0 !important;
//   }
// `
const Main = () => {
  return (
    <div
      className={css`
        background: #fff;
      `}
    >
      <Banner />
      <Divider>
        <Title level={2}>영상 저작권 콘텐츠</Title>
      </Divider>
      <VideoCarousel />
      <Divider>
        <Title level={2}>음원 저작권 콘텐츠</Title>
      </Divider>
      <AudioCarousel />
      <Divider>
        <Title level={2}>이미지 저작권 콘텐츠</Title>
      </Divider>
      <ImageCarousel />
      <Divider>
        <Title level={2}>디소스 사용 매뉴얼</Title>
      </Divider>
      <Manual />
      <Wrapper>
        <FlexRow gutter={16} type="flex" justify="center" align="top">
          {/* <FlexRow gutter={16} type="flex" justify="center" align="top">
          <FlexCol span={24}>준비중입니다.</FlexCol>
          </FlexRow> */}
        </FlexRow>
        <Divider />
        {/* <FlexRow gutter={16} type="flex" justify="center" align="top">
          <FlexCol span={24}>준비중입니다.</FlexCol>
        </FlexRow> */}
      </Wrapper>
    </div>
  )
}

export default Main
