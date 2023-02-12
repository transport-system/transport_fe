import React, { useEffect, useState } from "react";
import "../resourses/global.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   username: "",
  //   password: "",
  // });
  // console.log(values);      .post("https://dummyjson.com/auth/login", {

  const handleSubmit = async (values) => {
    try{
      const response = await axios.post("https://dummyjson.com/auth/login",values);
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


  };
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-500 card p-5">
          <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
}

export default Login;
