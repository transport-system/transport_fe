import React from 'react'
import {Col, Form,Row, Modal} from 'antd'
function TripForm({isModalOpen,handleOk,handleCancel
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

            <Form.Item label="Price" name="price">
              <input type="text"/>
            </Form.Item>
            </Col>
            <Col lg={12} xs={24}>

            <Form.Item label="Time arrival" name="time_arrive">
              <input type="text"/>
            </Form.Item>
            </Col>

            <Col lg={12} xs={24}>

            <Form.Item label="Time departure" name="time_departure">
              <input type="text"/>
            </Form.Item>
            </Col>

            <Col lg={12} xs={24}>

            <Form.Item label="Vahicle type" name="vehicleType">
              <input type="text"/>
            </Form.Item>
            </Col>

        </Row>
      </Form>
    </Modal>
    )
}

export default TripForm