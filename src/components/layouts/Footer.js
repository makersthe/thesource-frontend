import React from 'react'
import { Layout } from 'antd'
import { css } from 'emotion'
import styled from '@emotion/styled'

const { Footer } = Layout

const FooterList = styled.li`
  list-style-type: none;
  font-weight: bold;
  float: left;
  padding: 0 1rem;
  border-left: 1px solid #ccc;

  :first-of-type {
    padding-left: 0;
    border-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
`

const FooterLink = styled.a`
  color: #8c8c8c;

  :hover {
    color: #434343;
    text-decoration: underline;
  }
`
const FooterSpan = styled.span`
  margin-bottom: 0.2rem;
  display: flex;
  align-content: center;
  justify-content: center;
`
const FooterLabel = styled.label`
  font-weight: bold;
  margin-right: 0.3rem;
  /*
  ::after {
    content: ':';
  }
   */
`

const FooterWrapper = () => {
  return (
    <Footer
      className={css`
        display: flex;
        flex-flow: column wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        word-break: keep-all;
      `}
    >
      <ul
        className={css`
          padding: 0;
          display: flex;
          justify-content: center;
        `}
      >
        <FooterList>
          <FooterLink href="#policy">이용약관</FooterLink>
        </FooterList>
        <FooterList>
          <FooterLink href="#privacy">개인정보 보호정책</FooterLink>
        </FooterList>
        <FooterList>
          <FooterLink href="#copyright">저작권 정책</FooterLink>
        </FooterList>
      </ul>
      <FooterSpan>
        <FooterLabel>회사명</FooterLabel>메이커스디
        <FooterLabel
          className={css`
            margin-left: 1rem;
          `}
        >
<<<<<<< HEAD
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
=======
          대표자명
        </FooterLabel>
        주현석
        <FooterLabel
>>>>>>> eb8d9a525ed9b82b7b74eceed0609a302f54f960
          className={css`
            margin-left: 1rem;
          `}
        >
          주소
        </FooterLabel>
        서울 중구 충무로5가 19-10 215호
      </FooterSpan>
      <FooterSpan>
        <FooterLabel>사업자등록번호</FooterLabel>452-61-00314
        <FooterLabel
          className={css`
            margin-left: 1rem;
          `}
        >
          통신판매업신고
        </FooterLabel>
        제2019-서울중구-2199호
        <FooterLabel
          className={css`
            margin-left: 1rem;
          `}
        >
          저작권대리중개업신고
        </FooterLabel>
        신고 제 1398호
      </FooterSpan>
      <FooterSpan>
        <FooterLabel>대표전화</FooterLabel>
        <FooterLink href="tel:02-2254-1738">02)2254-1738</FooterLink>
        <FooterLabel
          className={css`
            margin-left: 1rem;
          `}
        >
          이메일
        </FooterLabel>
        <FooterLink href="mailto:contact@makersthe.com">
          contact@makersthe.com
        </FooterLink>
      </FooterSpan>
      <div
        className={css`
          display: block;
          text-align: center;
        `}
      >
        Copyright © Makersthe. All Rights Reserved.
      </div>
    </Footer>
  )
}

export default FooterWrapper
