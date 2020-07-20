import React from 'react'
import { Input, Select } from 'antd'
import { css } from 'emotion'

import { routes } from '../../data/routes'

import Log from '../../utils/logger'

const { Search } = Input
const { Option } = Select

const searchOption = routes.map((item) => (
  <Option key={item.contentType} value={item.contentType}>
    {item.name}
  </Option>
))

const selectBefore = <Select defaultValue="videos">{searchOption}</Select>

class GnbSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      searching: false,
    }
  }

  render() {
    const searching = this.state.searching
    return (
      <div
        className={css`
          width: 500px;
          display: flex;
          margin: 0 3rem;
          align-items: center;
          justify-content: flex-start;
          @media (max-width: 485px) {
            max-width: 100%;
            margin: 0 auto !important;
          }
        `}
      >
        <Search
          className={css`
            width: 500px;
          `}
          addonBefore={selectBefore}
          placeholder="검색하실 소스를 입력하세요."
          enterButton="검색"
          size="large"
          onSearch={(value) => {
            Log.info(`GNB Search: ${value}`)
            this.setState({ searching: true })
          }}
          loading={searching}
        />
      </div>
    )
  }
}

export default GnbSearch
