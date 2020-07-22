import React from 'react'
// import { inject, observer } from 'mobx-react'
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Icon,
  Input,
  Spin,
  Tooltip,
  message,
} from 'antd'
import {
  LoginOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from '@ant-design/icons'
import { css } from 'emotion'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const LoginCard = styled(Card)`
  border-radius: 4px !important;
  box-shadow: 0px 2px 10px 0px rgba(120, 120, 120, 0.2);
  width: 24rem;
`
const TitleIcon = styled(Icon)`
  margin-right: 1rem;
`
const LinkWrapper = styled.div`
  width: 100%;
  text-align: center;
`
const LinkLabel = styled.span`
  margin-right: 0.4rem;
`
const UpperButton = styled(Button)`
  margin-bottom: 1rem;
`

// @inject('authStore')
// @observer
class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
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
      <LoginCard
        title={
          <span>
            <TitleIcon type="user" theme="outlined" />
            로그인
          </span>
        }
        type="inner"
      >
        <Spin size="large" spinning={this.state.loading}>
          <Form onSubmit={() => this.handleSubmit()}>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="username"
                placeholder="Username"
                size="large"
                defaultValue={this.state.username}
                onChange={(e) => this.handleChange(e)}
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="password"
                type="password"
                placeholder="Password"
                size="large"
                defaultValue={this.state.password}
                onChange={(e) => this.handleChange(e)}
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>자동 로그인</Checkbox>
              <Tooltip title="아직 개발중입니다.">
                <a
                  href="#forgot"
                  style={{
                    float: 'right',
                  }}
                >
                  Forgot Password?
                </a>
              </Tooltip>
              <Button
                className={css`
                  margin: 1rem 0;
                `}
                type="primary"
                onClick={() => this.handleSubmit()}
                size="large"
                icon={<LoginOutlined />}
                block
              >
                로그인
              </Button>
              <LinkWrapper>
                <LinkLabel>디소스에 처음이신가요?</LinkLabel>
                <Link to="/signup">회원가입</Link>
              </LinkWrapper>
            </Form.Item>
          </Form>
          <Divider dashed>또는</Divider>
          <div>
            <Tooltip title="아직 개발중입니다.">
              <UpperButton
                onClick={() => message.info('OAuth')}
                size="large"
                icon={<GoogleOutlined />}
                block
                disabled
              >
                Google 로 로그인하기
              </UpperButton>
            </Tooltip>
            <Tooltip title="아직 개발중입니다.">
              <Button
                onClick={() => message.info('OAuth')}
                size="large"
                icon={<FacebookOutlined />}
                block
                disabled
              >
                Facebook 으로 로그인하기
              </Button>
            </Tooltip>
          </div>
        </Spin>
      </LoginCard>
    )
  }
}

export default LoginForm
