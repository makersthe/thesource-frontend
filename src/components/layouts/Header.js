import React from 'react'
import { Layout, Menu, Input, Select } from 'antd'
import { css } from 'emotion'

import Logger from '../../utils/logger'
import { contentNames } from '../../data/contentTypes'

const { Header } = Layout
const { Search } = Input
const { Option } = Select

const searchOption = Object.entries(contentNames).map((item) => (
  <Option key={item[0]} value={item[0]}>
    {item[1]}
  </Option>
))

const selectBefore = <Select defaultValue="video">{searchOption}</Select>

class HeaderWrapper extends React.Component {
  constructor() {
    super()

    this.state = {
      searching: false,
    }
  }

  render() {
    Logger.info('Header.js:render()', this)

    const searching = this.state.searching
    return (
      <Header
        className={css`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <h1
          className={`logo ${css`
            width: 160px;
            height: inherit;
            margin: 0;
            float: left;
            font-family: 'Ubuntu', sans-serif;
            font-style: italic;
            color: white;
            font-weight: bolder;
            font-size: 2rem;
          `}`}
        >
          TheSource
        </h1>
        <div
          className={css`
            display: flex;
            margin: 0 1rem;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          {/* <Input addonBefore={selectBefore} defaultValue="" /> */}

          <Search
            addonBefore={selectBefore}
            placeholder="검색하실 소스를 입력하세요."
            enterButton="검색"
            size="large"
            onSearch={(value) => {
              console.log(value)
              this.setState({ searching: true })
            }}
            loading={searching}
            className={css`
              width: 400px;
            `}
          />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['video']}>
          <Menu.Item key="video">영상</Menu.Item>
          <Menu.Item key="image">이미지</Menu.Item>
          <Menu.Item key="audio">음원</Menu.Item>
          <Menu.Item key="font">폰트</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default HeaderWrapper
