import React from "react";
import "../resourses/global.css";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
function Login() {
    const onFinish= async (values)=>{
      try{
        const response = await axios.post("https://reqres.in/api/login",values);
        if(1){
          console.log(response)
          message.success("Login Success");
        }else{
          console.log(response)

          message.error("Login Fail")
        }

      }catch(err){
        
        message.error(err.message)

      }
        
    }
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-500 card p-5">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name='email'>
            <input type="text" />
          </Form.Item>
          <Form.Item label="Password" name='password'>
            <input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/register">Click here to Register!</Link>
          <button className="secondary-btn" type="submit">Register</button>
        </div>  
        </Form>


      </div>
    </div>
  );
}

export default Login;
