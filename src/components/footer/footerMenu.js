import React from 'react'
import { Breadcrumb } from 'antd'

class FooterMenu extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <a>사업자정보</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>채용</Breadcrumb.Item>
        <Breadcrumb.Item>언론/미디어</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">이용약관</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">개인정보 보호정책</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">저작권 정책</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default FooterMenu
