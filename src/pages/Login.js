import React, { useEffect, useState } from "react";
import "../resourses/global.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {Modal, Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import axios from "axios";
import userApi from "../api/userApi";
import {HideLoading, ShowLoading} from "../redux/alertsSlice";

function Login({isModalOpen,handleOk,handleCancel}) {
  const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   username: "",
  //   password: "",
  // });

    const {user}= useSelector(state => state.user);
  const dispatch = useDispatch();


  const handleSubmit = async (values) => {
    try{
      dispatch(ShowLoading())
      // const response = await userApi.checkLogin(values)
      const response = await axios.post("https://transport-springboot.herokuapp.com/api/auth/login",values)
      console.log(values)
      dispatch(HideLoading())
      if(response.data){
        
        message.success("Login thành công")
        // localStorage.setItem("token",response.data.token);
        localStorage.setItem("userID",JSON.stringify(response.data.data.id))
                localStorage.setItem("token",response.data.data.token)

        window.location.reload(false);

        console.log(response.data.data.id)



      }else{
        message.error("Login Fail!")
        console.log(response)
      }
    }catch(err){
      message.error(err.message + "Login Fail!")
      console.log(values)
    }


  };
  return (
      <Modal   footer={null} className="d-flex justify-content-center align-items-center" width={600} title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

      <div className="w-500  p-5">
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
        <Form.Item  valuePropName="checked" noStyle>
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
        </Modal>
  );
}

export default Login;
