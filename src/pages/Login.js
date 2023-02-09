import React, { useEffect, useState } from "react";
import "../resourses/global.css";
import { Form, message } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch();
  };
  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-500 card p-5">
          <form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item label="Email" name="email">
              <input
                type="text"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <input
                type="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Click here to Register!</Link>
              <button className="secondary-btn" type="submit">
                Login
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Login;
