import React from "react";
import "../resourses/global.css";
import { Form } from "antd";
import { Link } from "react-router-dom";
function Register() {
    const onFinish=(value)=>{
        console.log(value)
    }
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-500 card p-5">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name='Name'>
            <input type="text" />
          </Form.Item>
          <Form.Item label="Email" name='Email'>
            <input type="text" />
          </Form.Item>
          <Form.Item label="Password" name='Password'>
            <input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/login">Click here to login!</Link>
          <button className="secondary-btn" type="submit">Register</button>
        </div>  
        </Form>


      </div>
    </div>
  );
}

export default Register;
