import React, { useState, useEffect } from 'react'
import { Carousel, Descriptions, Badge, Typography } from 'antd'

import styled from '@emotion/styled'
import { css } from 'emotion'

import axios from 'axios'
import moment from 'moment'

const { Title } = Typography

const Wrapper = styled.div`
  width: 1200px;
  background-color: white;
  padding: 2rem;
  margin: 2rem;
`

const VideoDetail = (props) => {
  const videoId = props.match?.params?.id

  const [data, setData] = useState('')

  async function fetchData() {
    const response = await axios(
      `https://dev-admin.thesource.co.kr/markets/video/${videoId}`,
    )
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  let tagsString = ''
  if (data.tags?.length > 0) {
    tagsString = '#' + data.tags?.join(', #')
  }

  const onChange = (a, b, c) => {
    console.log(a, b, c)
  }

  return (
    <Wrapper>
      <Title level={2}>{data.title}</Title>
      <Carousel
        className={css`
          margin: 2rem 0;
          text-align: center;
          height: 400px;
          line-height: 400px;
          background: #ccc;
          overflow: hidden;
        `}
        afterChange={onChange}
      >
        <div>
          <img
            className={css`
              width: 100%;
              height: 100%;
            `}
            alt={data.username}
            src={`https://dev-admin.thesource.co.kr${data.video_thumbnail}`}
          />
        </div>
        <div>
          <video width="400" controls>
            <source
              src={`https://dev-admin.thesource.co.kr${data.video_preview_link}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Carousel>
      <div>
        <Descriptions title="상세 정보" layout="vertical" bordered>
          <Descriptions.Item label="저작권자">
            {data.username}
          </Descriptions.Item>
          <Descriptions.Item label="가격">{data.price}</Descriptions.Item>
          <Descriptions.Item label="저작권 제공방식">
            라이센스 코드
          </Descriptions.Item>
          <Descriptions.Item label="판매상태" span={1}>
            <Badge status="processing" text="판매중" />
          </Descriptions.Item>
          <Descriptions.Item label="등록일자">
            {moment(data.created_at).format('YYYY-MM-DD')}
          </Descriptions.Item>
          <Descriptions.Item label="수정일자">
            {moment(data.updated_at).format('YYYY-MM-DD')}
          </Descriptions.Item>
          <Descriptions.Item label="태그" span={3}>
            {tagsString}
          </Descriptions.Item>
          <Descriptions.Item label="상세 설명" span={3}>
            {data.description}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Wrapper>
  )
}

export default VideoDetail
