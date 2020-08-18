import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import video from '../assets/videos/video.mp4'

const VideoWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    width: 480px;
    margin: 0 auto !important;
  }
`

const Manual = () => {
  return (
    <div>
      <VideoWrapper>
        <video
          className={css`
            width: 100%;
            height: auto;
            @media only screen and (max-width: 850px) {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
          muted
          autoPlay
          playsInline
          loop="loop"
        >
          <source src={`${video}`} type="video/mp4" />
          <source src={`${video}`} type="video/wemb" />
          <source src={`${video}`} type="video/ogg" />
        </video>
      </VideoWrapper>
      <div
        className={css`
          display: flex;
          float: right;
          @media only screen and (max-width: 850px) {
            width: 100%;
          }
        `}
      >
        <h2> 5분만에 끝내는 회원가입 </h2>
      </div>
    </div>
  )
}

export default Manual
