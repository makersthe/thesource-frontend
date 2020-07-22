import React from 'react'
import {
  Card,
  Button,
  Icon,
  Input,
  Divider,
  Form,
  message,
  Spin,
  Tooltip,
  Checkbox,
} from 'antd'
import { css } from 'emotion'
import styled from '@emotion/styled'

import Policy from '../../pages/Footer/Policy'
import Privacy from '../../pages/Footer/Privacy'
import Copyright from '../../pages/Footer/Copyright'

const SignupCard = styled(Card)`
  border-radius: 4px !important;
  box-shadow: 0px 2px 10px 0px rgba(120, 120, 120, 0.2);
  width: 24rem;
`
const TitleIcon = styled(Icon)`
  margin-right: 1rem;
`

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      // passwordCheck: '',
      loading: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit = () => {
    message.info('아직 개발중입니다.')
    // this.props.authStore.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <SignupCard
        title={
          <span>
            <TitleIcon type="user" theme="outlined" />
            회원가입
          </span>
        }
        type="inner"
      >
        <Spin size="large" spinning={this.state.loading}>
          <Form>
            <Form.Item>
              <label htmlFor="loginID">아이디</label>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="email"
                placeholder="이메일"
                id="loginID"
                size="large"
                defaultValue={this.state.email}
                onChange={(e) => this.handleChange(e)}
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="loginPW">비밀번호</label>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="password"
                type="password"
                id="loginPW"
                placeholder="비밀번호"
                size="large"
                defaultValue={this.state.password}
                onChange={(e) => this.handleChange(e)}
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="contactNum">연락처</label>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgb(0,0,0,.25)' }} />
                }
                name="passwordCheck"
                type="passwordCheck"
                id="loginPWC"
                placeholder="82)+"
                size="large"
                defaultChecked={this.state.passwordCheck}
                onChange={(e) => this.handleChange(e)}
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
            </Form.Item>
            <div
              className={css`
                display: flex;
              `}
            >
              <Checkbox>전체 동의</Checkbox>
            </div>
            <Checkbox>이용약관에 동의 (필수)</Checkbox>
            <div
              className={css`
                width: 333px;
                height: 88px;
                border: 1px solid #dadada;
                overflow: auto;
                margin-bottom: 20px;
              `}
            >
              <Policy />
            </div>
            <Checkbox>개인정보방침에 동의 (필수)</Checkbox>
            <div
              className={css`
                width: 333px;
                height: 88px;
                border: 1px solid #dadada;
                overflow: auto;
                margin-bottom: 20px;
              `}
            >
              <Privacy />
            </div>
            <Checkbox>저작권법에 동의 (필수)</Checkbox>
            <div
              className={css`
                width: 333px;
                height: 88px;
                border: 1px solid #dadada;
                overflow: auto;
                margin-bottom: 20px;
              `}
            >
              <Copyright />
            </div>
            <Checkbox>이벤트 등 프로모션 알림 메일 수신 (선택)</Checkbox>
          </Form>
          <Divider />
          <div>
            <Tooltip>
              <Button
                className={css`
                  margin: 1rem 0;
                `}
                type="primary"
                onClick={() => this.handleSubmit()}
                size="large"
                block
              >
                가입하기
              </Button>
            </Tooltip>
          </div>
        </Spin>
      </SignupCard>
    )
  }
}

export default SignupForm
