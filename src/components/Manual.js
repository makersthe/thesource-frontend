import React from 'react'
// import { css } from 'emotion'
import styled from '@emotion/styled'

const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 93vw;
  height: 60vh;
  margin-left: 50px;
  background: gray;
  @media (max-width: 485px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`

const SectionArticle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 45vw;
  height: 20 vh;
  background: white;
`

const Manual = () => {
  return (
    <SectionContainer>
      <SectionArticle> 1. 영상소스 이용방법 </SectionArticle>
      <SectionArticle> 2. 폰트소스 적용방법 </SectionArticle>
      <SectionArticle> 3. 배경음악 적용방법 </SectionArticle>
      <SectionArticle> 4. 프리미어프로 효과적용 </SectionArticle>
    </SectionContainer>
  )
}

export default Manual
