import React from 'react'
<<<<<<< HEAD
import { Pagination, Layout } from 'antd'
import { css } from 'emotion'
import Logger from '../../utils/logger'

const { Content } = Layout

class HeaderWrapper extends React.Component {
  componentDidMount() {
    Logger.info('.js:componentDidMount()', this)
  }

  render() {
    return (
      <Content
        className={css`
          padding: 0 50px;
          margin: 16px 0;
        `}
      >
        <div
          className={css`
            background: #fff;
            padding: 24px;
            min-height: auto;
          `}
        >
          <section
            className={css`
              display: flex;
              width: 100%;
              height: auto;
            `}
          >
            <div>
              <iframe
                title="myFrame"
                width="530"
                height="315"
                src="https://www.youtube.com/embed/eWvMj3f7WoI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              />
            </div>
            <div>
              <iframe
                title="bright_sky"
                width="530"
                height="315"
                src="https://www.youtube.com/embed/qDt_VfRTAqc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, fullscreen"
              />
            </div>
            <div>
              <iframe
                title="b"
                width="530"
                height="315"
                src="https://www.youtube.com/embed/qDt_VfRTAqc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, fullscreen"
              />
            </div>
          </section>
          <section> a </section>
          <Pagination
            className={css`
              text-align: center;
              justify-content: center;
            `}
            defaultCurrent={1}
            total={50}
          />
        </div>
      </Content>
    )
  }
=======
import { Layout } from 'antd'
import { css } from 'emotion'

import RootRouter from '../../routes/RootRouter'

const ContentWrapper = () => {
  return (
    <Layout
      className={css`
        padding: 1rem;
      `}
    >
      <RootRouter />
    </Layout>
  )
>>>>>>> eb8d9a525ed9b82b7b74eceed0609a302f54f960
}

export default ContentWrapper
