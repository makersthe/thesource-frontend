import React from 'react'
import { Avatar, Tooltip, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
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
  @media only screen and (max-width: 850px) {
    display: none;
  }
`

const GnbAvatar = () => {
  return (
    <Tooltip placement="bottom" title="개발중입니다.">
      <Wrapper
        to="/login"
        onClick={() => {
          message.warning('개발중입니다.')
        }}
      >
        <Avatar icon={<UserOutlined />} />
      </Wrapper>
    </Tooltip>
  )
}

export default GnbAvatar
