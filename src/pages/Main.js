import React from 'react'
import { Row, Col, Divider } from 'antd'
import styled from '@emotion/styled'

const FlexRow = styled(Row)`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0 auto !important;
  }
`
const FlexCol = styled(Col)`
  margin-top: 1rem;
  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0 !important;
  }
`

const Main = () => {
  return (
    <div>
      <FlexRow gutter={16} type="flex" justify="center">
        <FlexCol span={12}>TEMP</FlexCol>
        <FlexCol span={12}>TEMP</FlexCol>
      </FlexRow>
      <Divider />
      <FlexRow gutter={16} type="flex" justify="center">
        <FlexCol span={12}>TEMP</FlexCol>
        <FlexCol span={12}>TEMP</FlexCol>
      </FlexRow>
      <Divider />
      <FlexRow gutter={16} type="flex" justify="center">
        <FlexCol span={24}>TEMP</FlexCol>
      </FlexRow>
    </div>
  )
}

export default Main
