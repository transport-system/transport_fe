import React from 'react'
import {DatePicker,InputNumber,Select,Upload,Input,  Radio, Form,Row, Modal} from 'antd'
import { PlusOutlined } from '@ant-design/icons';

function TripForm({isModalOpen,handleOk,handleCancel
}) {
  return (
    <Modal width={600} title="Add Trip" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form>
      <Form.Item label="Vehicles">
          <Select>
            <Select.Option value="saigon">Xe1</Select.Option>
            <Select.Option value="vungtau">Xe2</Select.Option>
            <Select.Option value="dalat">Xe3</Select.Option>
            <Select.Option value="dongthap">xe4</Select.Option>

          </Select>
          </Form.Item>

          <Form.Item label="Time Arrival" name="time_arrival">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Time Departure" name="time_departure">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Driver" name="employee_name">
          <Input />
        </Form.Item>
        <Form.Item label="License" name="license_plates">
          <Input />
        </Form.Item>
        <Form.Item label="City Arrival">
          <Select>
            <Select.Option value="saigon">Sài Gòn</Select.Option>
            <Select.Option value="vungtau">Vũng Tàu</Select.Option>
            <Select.Option value="dalat">Đà Lạt</Select.Option>
            <Select.Option value="dongthap">Đồng Tháp</Select.Option>

          </Select>
        </Form.Item>
        <Form.Item label="City Departure">
          <Select>
          <Select.Option value="saigon">Sài Gòn</Select.Option>
            <Select.Option value="vungtau">Vũng Tàu</Select.Option>
            <Select.Option value="dalat">Đà Lạt</Select.Option>
            <Select.Option value="dongthap">Đồng Tháp</Select.Option>          </Select>
        </Form.Item>
        <Form.Item label="Trip Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
    )
}

export default TripForm