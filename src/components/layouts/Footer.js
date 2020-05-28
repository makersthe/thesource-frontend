import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'

import Logger from '../../utils/logger'

const { Footer } = Layout

class FooterWrapper extends React.Component {
  render() {
    Logger.info('Footer.js:render()', this)
    return (
      <Footer
        className={css`
          text-align: center;
          justify-content: center;
        `}
      >
        <ul
          className={css`
            display: inline-block;
            list-style: none;
          `}
        >
          <li
            className={css`
              font-weight: bold;
              float: left;
            `}
          >
            <a href="policy"> 이용약관 </a>
            <span> | </span>
          </li>
          <li
            className={css`
              list-style-type: none;
              font-weight: bold;
              float: left;
            `}
          >
            <a href="privacy"> 개인정보 보호정책 </a>
            <span> | </span>
          </li>
          <li
            className={css`
              list-style-type: none;
              font-weight: bold;
              float: left;
            `}
          >
            <a href="copyright">저작권 정책</a>
            <span> | </span>
          </li>
        </ul>
        <p> 회사명: 메이커스디 | 주소: 서울 중구 충무로5가 19-10 215호 </p>
        <p> 대표자명: 주현석 </p>
        <p> 사업자등록번호: 452-61-00314 </p>
        <p> 통신판매업신고: 제2019-서울중구-2199호 </p>
        <p> 저작권대리중개업신고: 신고 제 1398호 </p>
        <p> 대표전화: 02)2254-1738 | 이메일: contact@makersthe.com</p>
        <div
          className={css`
            display: block;
          `}
        >
          Copyright © Makersthe. All Right Reserved.
        </div>
      </Footer>
    )
  }
}

export default FooterWrapper
