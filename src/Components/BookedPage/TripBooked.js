import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Rate, Modal,message,Input } from 'antd';
import Form from 'antd/es/form/Form';
import userApi from '../../api/userApi';
function TripBooked({booked}) {
  const [form] = Form.useForm();

    const TotalPrice = ((booked.totalPrice)).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      const tranfer=(time)=>{
        const newTime = new Date(time).toLocaleString("en-US", {
             month: "short",
             day: "2-digit",
             year: "numeric",
             hour: "2-digit",
             minute: "2-digit",
           });
           return newTime;
       }
       const navigate = useNavigate();
       const [isModalOpen, setIsModalOpen] = useState(false);
       const showModal = () => {
         setIsModalOpen(true);
       };
       const handleSubmit = (values) => {
        console.log(values)
        values.bookingId= booked.id
        values.companyId = 4
        values.accountId = localStorage.getItem('userID')
        postFeedback(values)
      }  
      const postFeedback = async (values) => {
        try {
            const response = await userApi.rateCompany(values);
            console.log(response.data);

            if (response.data) {
message.success("Send Success!")
            } else {
                message.error("Send Fail!");

            }
        } catch (err) {
            message.error(err.message);

        }
    };
      
      const handleCancel = () => {
        setIsModalOpen(false)
        form.resetFields()
      };


      const cancelRequestRefund = async (values) => {
        try {
            const response = await userApi.cancelRequestRefund(values);
            console.log(response.data);

            if (response.data) {
message.success("Cancel Success!")
            } else {
                message.error("Cancel Fail!");

            }
        } catch (err) {
            message.error("Cancel Fail!");

        }
    };
      
   
  return (
    <tr>
    <th scope="row">#{booked.id}</th>
    <td>
      <div className="table-content">
        <h3 className="title">{booked.tripResponse ? booked.tripResponse.departure + "-" + booked.tripResponse.arrival  :''}</h3>
      </div>
    </td>
    <td>{booked.tripResponse ? booked.tripResponse.vehicle.vehicleType :''}</td>
    <td>{booked.createBookingTime ?  tranfer(booked.createBookingTime) : ''}</td>
    <td>{booked.tripResponse ?  tranfer(booked.tripResponse.timeDeparture) : ''}</td>
    <td>{TotalPrice}</td>
    {        booked.status      ==="DONE" ?                     <td><span className="badge badge-success py-1 px-2">{booked.status}</span></td>
:             <td><span class="badge badge-warning py-1 px-2">{booked.status}</span></td>
}
    <td >
      <div className="table-content m-1 ">
        <button className="theme-btn theme-btn-small" onClick={()=>navigate(`/paymentcomplete/${booked.id}`)}>View</button>
       
      </div>
      
      <div className="table-content m-1 ">

      <button className="theme-btn theme-btn-small" type="primary" onClick={showModal}>
        Review
      </button>
      </div>

      {booked.status === "REQUESTREFUND" ? <div className="table-content m-1 ">
        <button className="theme-btn theme-btn-small" onClick={cancelRequestRefund}>Cancel Refund</button>
       
      </div> : ''}

    </td>
    <Modal title="Feedback" open={isModalOpen} onOk={form.submit} onCancel={handleCancel}>
       <Form form={form} onFinish={handleSubmit}>
       <Form.Item label="Rate" name="ratingScore">
                    <Rate/>
                </Form.Item>
       <Form.Item label="detail" name="detail">
                    <Input />
                </Form.Item>
       </Form>
      </Modal>
  </tr>
  //   <div><div class="card p-2 m-2">
  //   <div class="card-body">
  //     <h5 class="card-title">Booked ID: {booked.id}</h5>
  //     <p class="card-text">trạng thái : {booked.status}</p>
  //     {/* <p class="card-text">Ghế đặt : {booked.seatResponse}</p> */}
  //     <p class="card-text">Phương thức thanh toán : {booked.paymentMethod}</p>
  //     <p class="card-text">totalPrice : {TotalPrice}</p>
  //     {/* <p class="card-text">TripID : {booked.tripResponse.tripId}</p>
  //     <p class="card-text">Loại xe : {booked.vehicle.vehicleType}</p> */}

  //     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  //   </div>
  // </div></div>
  )
}

export default TripBooked