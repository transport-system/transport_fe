import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Modal,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Upload,
} from "antd";
import { useState } from "react";
import userApi from "../api/userApi";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function ProfileForm({ isModalOpen, handleCancel }) {
  // const { RangePicker } = DatePicker;
  const { user } = useSelector((state) => state.user);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await userApi.updateUser(user.id,values);
      console.log(values)
      if (response.data.id) {
        window.location.reload(false);


      } else {        navigate("/profile")

      }
    } catch (err) {        navigate("/profile")
  }
  };

  return (
    <Modal
      width={600}
      title="Update Profile"
      open={isModalOpen}
      onOk={form.submit}
      onCancel={handleCancel}
    >
      <>
        <Form form={form}
          onFinish={handleSubmit}
          className="mt-5"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item> */}

          <Form.Item label="First Name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group>
              <Radio value="apple"> Male </Radio>
              <Radio value="pear"> FeMale </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Phone " name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="BIRTH" name="date_of_birth">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Upload Ava" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        </Form>
      </>
    </Modal>
  );
}

export default ProfileForm;
