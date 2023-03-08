import React, { useState } from 'react'
import bookApi from '../../../api/bookApi'
import {message,Input, Button, Radio, Form,Row, Modal} from 'antd'
import { BsNutFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../../redux/alertsSlice'

function Order({selectedSeats,trip}) {
    const [dataBook,setDataBook] =useState({})
    const dispatch = useDispatch()
    const handleSubmit =  async (values) => {
        dispatch(ShowLoading())
        values.seatNumber = selectedSeats;
        values.tripId=trip.tripId;  
        dispatch(HideLoading())

        try {
            
            const response = await bookApi.createBook(values)
            console.log(values)
            console.log(response)

            if (response.data) {
                message.success(response.data.message)

            } else {
                message.error("Thanh toán thất bại!")
                console.log(response)
            }
        } catch (err) {
            message.error(err.message)
            console.log(values)
        }
    }
  return (
    <Form onFinish={handleSubmit}>
    <Form.Item label="Email" name="email">
            <Input />
        </Form.Item>
        <Form.Item label="First Name" name="firstname">
            <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname">
            <Input />
        </Form.Item>
        <Form.Item label="phone" name="phone">
            <Input />
        </Form.Item>
        <Form.Item label="note" name="note">
            <Input />
        </Form.Item>
        {/* <Form.Item label="trip" name="tripId">
            <Input />
        </Form.Item> */}
        <Form.Item label="Booked seat">
            {selectedSeats.join(", ")}
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
                Thanh toán
            </Button>
        </Form.Item>
    </Form>
  )
}

export default Order