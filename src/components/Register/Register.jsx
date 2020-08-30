import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './register.css';

function Register() {
  const history = useHistory();
  const formItemLayout = {
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 10
    }
  };

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const res = await axios.post(
        'http://localhost:5000/users/register',
        values
      );
      console.log(res);
      history.push('/login');
    } catch (error) {
      alert('Something went wrong,Please try again.');
    }
  };

  return (
    <div className="reg-form">
      <h1>Register</h1>

      <Form name="registeration-form" onFinish={onFinish} {...formItemLayout}>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="passwordCheck"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
