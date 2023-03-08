import { Button, Form, Input, message } from "antd";
import React from "react";
import { useParams } from "react-router";
import bookApi from "../../api/bookApi";
import "./bookingPage.css";
import emailjs from '@emailjs/browser';

const Item = (props) => (
  <div className="item-container">
    <div className="item-image">
      <img src={props.img} />
      <div className="item-details">
        <h3 className="item-name"> {props.name} </h3>
        <h2 className="item-price"> {props.price} </h2>
      </div>
    </div>
  </div>
);

//   const Input = (props) => (
//     <div className="input">
//       <label>{props.label}</label>
//       <div className="input-field">
//         <input type={props.type} name={props.name} />
//         <img src={props.imgSrc}/>
//       </div>
//     </div>
//   );

function CartPage() {
  const params = useParams();

 

  const handleSubmit = async () => {
    const bookingId = params.id
    const method = "card"
    try {
      const response = await bookApi.payBook({bookingId,method});
      console.log(response);
      console.log();

      if (response.data) {
        message.success(response.data.message);
        // navigate(`/cart/${response.data.id}`)
        var templateParams = {
            name: 'James',
            message: `Vé của bạn đạ được đặt thành Công!
             BookId: ${bookingId}
            `
        };

        emailjs.send('service_q99gr6a', 'template_o1n5t7m', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
      } else {
        message.error("Add Fail!");
        console.log(response);
      }
    } catch (err) {
    //   message.error(err.message);
    //   console.log(values);
    }
  };  return (
    <div className="app-container">
      <div className="row">
        <div className="col">
          <Item
            name="Instax Mini 90 Neo Classic"
            price="$144.99"
            img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg"
          />
        </div>
        <div className="col no-gutters">
          <div className="checkout">
            <div className="checkout-container">
              <h3 className="heading-3">Credit card checkout</h3>
              <Form  onFinish={handleSubmit}>
                <Form.Item label="Cardholder's Name" rules={[{ required: true, message: 'Please input your name' }]}>
                  <Input type="text" name="name" />
                </Form.Item>
                <Form.Item  label="Card Number" rules={[{ required: true, message: 'Please input your Card Number' }]}
>
                  <Input
                    type="number"
                    name="card_number"
                    imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
                  />
                </Form.Item>

                <Form.Item  label="Expiration Date" rules={[{ required: true, message: 'Please input your Expiration Date' }]}>
                  <Input type="month" name="exp_date" />
                </Form.Item>

                <Form.Item  label="CVV" rules={[{ required: true, message: 'Please input your CVV' }]}>
                  <Input type="number" name="cvv" />
                </Form.Item>

                <Form.Item>
            <Button
              htmlType="submit"
              className="checkout-btn"
            >
              Thanh toán
            </Button>
          </Form.Item>              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
