import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {Modal,
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react';


function ProfileForm({isModalOpen,handleOk,handleCancel
}) 

{
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <Modal width={600} title="Update Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form className='mt-5'
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        // disabled={componentDisabled}
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
    )
}

export default ProfileForm