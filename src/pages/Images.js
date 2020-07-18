import React from 'react'
import { Card } from 'antd'
import { css } from 'emotion'

const { Meta } = Card

const Images = () => {
  const cardList = []
  for (let i = 0; i < 100; i++) {
    cardList.push(
      <Card
        className={css`
          width: 240px;
          margin: 8px !important;
        `}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        hoverable
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>,
    )
  }
  return (
    <div
      className={css`
        display: flex;
        padding: 8px 0;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        width: 100vw;
      `}
    >
      {cardList}
    </div>
  )
}

export default Images
