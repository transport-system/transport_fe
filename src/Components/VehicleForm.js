import React from 'react'
import {Input,  Radio, Form,Row, Modal} from 'antd'
function VehicleForm({isModalOpen,handleOk,handleCancel
}) {
  return (
    <Modal width={600} title="Add Trip" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form>
      <Form.Item label="Vehicle type">
          <Radio.Group>
            <Radio value="bus"> Bus - 40 seats </Radio>
            <Radio value="limo"> limo - 9 seats</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="License" name="license_plates">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
    )
}

export default VehicleForm