import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import Error from '../Errors/Errors';

function Register() {
  const history = useHistory();
  const [error, setError] = useState('');
  const formItemLayout = {
    labelCol: {
      span: 24
    }
    // wrapperCol: {
    //   span: 10
    // }
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
      setError(error.response.data.message);
      //alert('Something went wrong,Please try again.');
    }
  };

  const clearError = () => setError(undefined);

  return (
    <div className="reg-container">
      <h1>Register</h1>

      <Form
        name="registeration-form"
        onFinish={onFinish}
        {...formItemLayout}
        className="reg-form"
      >
        {error && <Error message={error} clearError={clearError} />}
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
          <Button type="primary" htmlType="submit" className="reg-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
