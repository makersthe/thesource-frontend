import React from 'react'
import { Input, Select } from 'antd'
import { css } from 'emotion'

import Logger from '../../utils/logger'
import { contentNames } from '../../data/contentTypes'

const { Search } = Input
const { Option } = Select

const searchOption = Object.entries(contentNames).map((item) => (
  <Option key={item[0]} value={item[0]}>
    {item[1]}
  </Option>
))

const selectBefore = <Select defaultValue="video">{searchOption}</Select>

class GnbSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      searching: false,
    }
  }

  render() {
    const searching = this.state.searching
    Logger.info('GnbSearch.js:render()', this)
    return (
      <div
        className={css`
          display: flex;
          margin: 0 1rem;
          align-items: center;
          justify-content: flex-start;
        `}
      >
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
    )
  }
}

export default GnbSearch
