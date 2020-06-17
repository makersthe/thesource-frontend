import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const Signup = () => {
  return (
    <Form>
      <Form.Item>
        <Input />
      </Form.Item>
      <Form.Item>
        <Input />
      </Form.Item>
      <Form.Item>
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Input />
      </Form.Item>
      <Form.Item>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Signup
