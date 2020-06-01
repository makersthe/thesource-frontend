import React from 'react'
import { Tooltip, message } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

const Wrapper = styled.a`
  height: 64px;
  width: 64px;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  transition: all 0.3s, padding 0s;

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`

const GnbHelp = () => {
  return (
    <Tooltip placement="bottom" title="개발중입니다.">
      <Wrapper
        href="#"
        onClick={() => {
          message.warning('개발중입니다.')
        }}
      >
        <QuestionCircleOutlined />
      </Wrapper>
    </Tooltip>
  )
}

export default GnbHelp
