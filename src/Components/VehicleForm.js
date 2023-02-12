import React from 'react'
import {Col, Form,Row, Modal} from 'antd'
function VehicleForm({isModalOpen,handleOk,handleCancel
}) {
  return (
    <Modal width={800} title="Add Trip" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form>
        <Row>
          <Col lg={12} xs={24}>
            <Form.Item label="Vahicle type" name="vehicleType">
              <input className='w-100' type="text"/>
            </Form.Item>
            </Col>
            <Col lg={12} xs={24}>

            <Form.Item label="Linces" name="linces">
              <input type="text"/>
            </Form.Item>
            </Col>
        </Row>
      </Form>
    </Modal>
    )
}

export default VehicleForm