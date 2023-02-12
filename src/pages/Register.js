import "../resourses/global.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,message,
} from 'antd';
import { useState } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const [form] = Form.useForm();

  const onFinish  = async (values) => {
    try{      console.log(values)

      const response = await axios.post("https://dummyjson.com/auth/register",values);
      if(response.data.id){
        message.success("Login Success")
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID",JSON.stringify(response.data.id))
        navigate("/home")
      }else{
        message.error("Login Fail!")
      }
    }catch(err){
      message.error(err.message)
    }
  }

  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
    <div className="align-items-center card p-5" style={{Width:"40%"}}>
    <Form className="w-100"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        
      <Form.Item
        name="username"
        label="UserName"
        tooltip="Use to Login!"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm "
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="firstName"
        label="FirstName"
        rules={[
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input

        />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input

        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Num"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input

        />
      </Form.Item>

 

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item> */}

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>        Or <a href="/login">Login now!</a>

      </Form.Item>
    </Form>
    </div>
  </div>
  );
}

export default Register;