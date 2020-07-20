import React from 'react'
import { Col, Row } from 'antd'
import styled from '@emotion/styled'
import SignupForm from '../../components/forms/SignupForm'
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

class SignUp extends React.Component {
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
            <SignupForm />
          </FlexCol>
        </FlexRow>
      </WrapperDiv>
    )
  }
}

export default SignUp
