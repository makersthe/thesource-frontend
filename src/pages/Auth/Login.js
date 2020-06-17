import React from 'react'
import AuthContent from '../../components/Auth/AuthContent'
import InputWithLabel from '../../components/Auth/InputWithLabel'
import AuthWrapper from '../../components/Auth/AuthWrapper'
import AuthButton from '../../components/Auth/AuthButton'

class Login extends React.Component {
  render() {
    return (
      <AuthWrapper>
        <AuthContent title="로그인">
          <InputWithLabel label="이메일" name="email" placeholder="이메일" />
          <InputWithLabel
            label="비밀번호"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          <AuthButton>로그인</AuthButton>
          <AuthButton>회원가입</AuthButton>
        </AuthContent>
      </AuthWrapper>
    )
  }
}

export default Login
