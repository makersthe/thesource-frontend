import React from 'react'
import { Input, Select } from 'antd'
import { css } from 'emotion'

import { routes } from '../../data/routes'

const { Search } = Input
const { Option } = Select

const searchOption = routes.map((item) => (
  <Option key={item.url} value={item.url}>
    {item.name}
  </Option>
))

const selectBefore = <Select defaultValue="movies">{searchOption}</Select>

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