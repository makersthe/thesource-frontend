import React from 'react'
import { Alert, Col, Row } from 'antd'
import styled from '@emotion/styled'
import LoginForm from '../../components/forms/LoginForm'
// assets
import bgImg from '../../assets/images/bg-login.svg'
// import logoImg from '../../assets/images/logos/icon.png'

const WrapperDiv = styled.div`
  background: url(${bgImg});
  background-color: #fafafa;
  background-repeat: repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
`
const FlexRow = styled(Row)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-bottom: 1rem;
  width: 100%;

  @media all and (max-width: 480px) {
    width: 100%;
    margin: 0 auto !important;
    padding: 0 !important;
  }
`
const FlexCol = styled(Col)`
  width: 100%;
  max-width: 24rem;

  @media all and (max-width: 480px) {
    width: 100%;
    margin: 0 auto !important;
    padding: 0 !important;
  }
`
// const LogoImg = styled.img`
//   margin-bottom: 2rem;
//   width: 2.2rem;
//   height: 2.2rem;
// `

class Login extends React.Component {
  render() {
    return (
      <WrapperDiv>
        {/*
        <FlexRow>
          <FlexCol>
            <LogoImg src={logoImg} alt="회사 로고" />
          </FlexCol>
        </FlexRow>
        */}
        <FlexRow>
          <FlexCol>
            <Alert
              message="오픈 베타중입니다."
              description="서비스 개발 및 고도화중입니다. 조금만 기다려주세요!"
              type="info"
              showIcon
              style={{
                margin: '1rem',
              }}
            />
            <LoginForm />
          </FlexCol>
        </FlexRow>
      </WrapperDiv>
    )
  }
}

export default Login
