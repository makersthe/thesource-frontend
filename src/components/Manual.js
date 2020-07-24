import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import video from '../assets/videos/video.mp4'

const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 93vw;
  height: 480px;
  margin-left: 50px;
  margin-bottom: 2rem;
  @media (max-width: 485px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`

const Manual = () => {
  return (
    <SectionContainer>
      <div>
        <video
          className={css`
            float: left;
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
      </div>
      <div>
        <h2> 5분만에 끝내는 회원가입 </h2>
      </div>
    </SectionContainer>
  )
}

export default Manual
