import React, { useState } from "react";
import bookApi from "../../../api/bookApi";
import { message, Input, Button, Radio, Form, Row, Modal } from "antd";
import { BsNutFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/alertsSlice";
import { useNavigate } from "react-router";

function Order({
  isModalOpen,
  handleOk,
  handleCancel,
  selectedSeats,
  trip,
  totalPrice,
}) {
  const [dataBook, setDataBook] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    dispatch(ShowLoading());
    values.seatNumber = selectedSeats;
    values.tripId = trip.tripId;
    dispatch(HideLoading());

    try {
      const response = await bookApi.createBook(values);
      console.log(values);
      console.log(response);

      if (response.data) {
        message.success(response.data.message);
        navigate(`/checkout/${response.data.id}`);
      } else {
        message.error("Add Fail!");
        console.log(response);
      }
    } catch (err) {
      message.error(err.message);
      console.log(values);
    }
  };
  const handleCart = async () => {
    dispatch(ShowLoading());
    const seatNumber = selectedSeats;
    const tripId = trip.tripId;
    const accountId = localStorage.getItem("userID");
    dispatch(HideLoading());

    try {
      const response = await bookApi.createBook({
        accountId,
        seatNumber,
        tripId,
      });
      console.log(response);

      if (response.data) {
        message.success(response.data.message);
        navigate(`/cart/${response.data.id}`);
      } else {
        message.error("Add Fail!");
        console.log(response);
      }
    } catch (err) {
      message.error(err.message);
    }
  };
  return (
    <Modal
      width={600}
      title="Thanh toán"
      footer={null}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {localStorage.getItem("userID") == null ? (
        <Form onFinish={handleSubmit}>
          <div class="form-content ">
            <div class="contact-form-action">
              <form method="post">
                <div class="row">
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box"></div>
                    <Form.Item
                      label="First Name"
                      name="firstname"
                      class="form-group"
                    >
                      <Input
                        prefix={<span class="la la-user form-icon"></span>}
                        placeholder="Enter your firstname"
                      />
                    </Form.Item>
                  </div>
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box"></div>
                    <Form.Item label="Last Name" name="lastname">
                      <Input
                               prefix={<span class="la la-user form-icon"></span>}
                               placeholder="Enter your lastname"
                      />
                    </Form.Item>
                  </div>
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box"></div>
                    <Form.Item label="Email" name="email">
                      <Input          prefix={<span class="la la-envelope-o form-icon"></span>}
                        placeholder="Enter your email"/>
                    </Form.Item>
                  </div>
                  <div class="col-lg-6 responsive-column">
                    <div class="input-box"></div>

                    <Form.Item label="phone" name="phone">
                      
                      <Input   prefix={ <span class="la la-phone form-icon"></span>}
                        placeholder="Enter your phone"/>
                    </Form.Item>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* 
          <Form.Item label="note" name="note">
            <Input />
          </Form.Item> */}
          {/* <Form.Item label="trip" name="tripId">
            <Input />
        </Form.Item> */}
          <Form.Item label="Booked seat">{selectedSeats.join(", ")}</Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Thanh toán
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="m-3 p-2">
          <h5>Bạn đồng ý thanh toán </h5>
          <p>ghế đã đặt: {selectedSeats.join(", ")}</p>
          <p>Tổng tiền: {totalPrice}</p>
          <Button
            type="primary"
            htmlType="submit"
            className="btn"
            onClick={() => handleCart()}
          >
            Xác nhận
          </Button>
        </div>
      )}
    </Modal>
  );
}

export default Order;
