import React from 'react'
import { inject, observer } from 'mobx-react'
import { Form, Input, Button, Checkbox } from 'antd'
import { css } from 'emotion'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = { wrapperCol: { offset: 8, span: 16 } }

const Login = inject('routingStore')(
  observer((props) => {
    const { push } = props.routingStore
    const onFinish = (values) => console.log('Success:', values)
    const onFinishFailed = (errorInfo) => console.log('Failed:', errorInfo)
    return (
      <div
        className={css`
          display: flex;
          margin-top: 100px;
        `}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: '아이디를 입력하세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력하세요' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>항상 로그인</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={() => push('/signup')}>
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }),
)

export default Login
