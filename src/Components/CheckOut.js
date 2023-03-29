import PaypalPay from "./PaypalPay";
import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
import bookApi from '../api/bookApi';
import paymentApi from "../api/paymentApi";
import userApi from "../api/userApi";
// import PaypalPay from "./PaypalPay";

function CheckOut() {
    const params = useParams();
    const [booked,setBooked] =useState({});
    const navigate = useNavigate()
    const getBooked = async () => {
        try {
            const response = await bookApi.getBookedById(params.id);
            console.log(response.data);
    
            if (response.data) {
              setBooked(response.data);
                
            } else {
                message.error(response.data.message);
    
            }
        } catch (err) {
            message.error(err.message);
    
        }
    };
    useEffect(() => {
    console.log(booked.totalPrice)
      getBooked();
    
    },[]);
    const price = (price) =>{ const  newPrice = price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    return newPrice
    }

  
    const handlePayLater = async (e) => {
        e.preventDefault();

        const bookingId = params.id
        const method = "CASH"
        const data ={bookingId,method}
        
        try {
          const response = await paymentApi.payLater(data);
          console.log(response);
          console.log();
    
          if (response.data) {
            message.success(response.data.message);
            const sEmail = booked.c_Email ? booked.c_Email:  booked.email
            window.Email.send({
              Host: "smtp.elasticemail.com",
              Username : "kgzeref@gmail.com",
              Password : "44E27D2678B035AAC846BC9057D6A2FF67F6",
              To : `${sEmail}`,
              From : "kgzeref@gmail.com",
              Subject : "confirm payment",
              Body : `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                  <title>Invoice</title>
                  <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                    rel="stylesheet"
                  />
                  <style>
                    @media print {
                      @page {
                        size: A3;
                      }
                    }
                    ul {
                      padding: 0;
                      margin: 0 0 1rem 0;
                      list-style: none;
                    }
                    body {
                      font-family: "Inter", sans-serif;
                      margin: 0;
                    }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                    }
                    table,
                    table th,
                    table td {
                      border: 1px solid silver;
                    }
                    table th,
                    table td {
                      text-align: right;
                      padding: 8px;
                    }
                    h1,
                    h4,
                    p {
                      margin: 0;
                    }
              
                    .container {
                      padding: 20px 0;
                      width: 1000px;
                      max-width: 90%;
                      margin: 0 auto;
                    }
              
                    .inv-title {
                      padding: 10px;
                      border: 1px solid silver;
                      text-align: center;
                      margin-bottom: 30px;
                    }
              
                    .inv-logo {
                      width: 150px;
                      display: block;
                      margin: 0 auto;
                      margin-bottom: 40px;
                    }
              
                    /* header */
                    .inv-header {
                      display: flex;
                      margin-bottom: 20px;
                    }
                    .inv-header > :nth-child(1) {
                      flex: 2;
                    }
                    .inv-header > :nth-child(2) {
                      flex: 1;
                    }
                    .inv-header h2 {
                      font-size: 20px;
                      margin: 0 0 0.3rem 0;
                    }
                    .inv-header ul li {
                      font-size: 15px;
                      padding: 3px 0;
                    }
              
                    /* body */
                    .inv-body table th,
                    .inv-body table td {
                      text-align: left;
                    }
                    .inv-body {
                      margin-bottom: 30px;
                    }
              
                    /* footer */
                    .inv-footer {
                      display: flex;
                      flex-direction: row;
                    }
                    .inv-footer > :nth-child(1) {
                      flex: 2;
                    }
                    .inv-footer > :nth-child(2) {
                      flex: 1;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="inv-title">
                      <h1>Invoice # ${booked.id}</h1>
                    </div>
                    <div class="inv-header">
                      <div>
                        <h2>SWP Team</h2>
                        <ul>
                          <li>Bus Booking</li>
                          <li>Ho Chi Minh</li>
                          <li>0338148702 |dtgkhang99@gmail.com</li>
                        </ul>
                      </div>
                      <div>
                        <table>
                          <tr>
                            <th>Due Date</th>
                            <td>${tranfer(booked.createBookingTime)}</td>
                          </tr>
                    
                          <tr>
                            <th>Total</th>
                            <td>${ price(booked.totalPrice)}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="inv-body">
                    Thank you. We hope your experience was awesome and we can’t wait to see you again soon.
                    </div>
                    <div class="inv-footer">
                      <div><!-- required --></div>
                      <div>
                        <table>
            
                          <tr>
                            <th>Sales tax</th>
                            <td>{booked.voucher ? booked.voucher.discountValue : '0'}%</td>
                          </tr>
                          <tr>
                            <th>Grand total</th>
                            <td>${ price(booked.totalPrice)}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </body>
              </html>              `
          }).then(
            message => alert(message)
          );
            navigate(`/paymentcomplete/${response.data.id}`)
    
          } else {
            message.error("Payment Fail!");
            console.log(response);
          }
        } catch (err) {
          message.error(err.response.data.message)
        //   console.log(values);
        }
      }; 
      const useVouncher = async (values) => {
        values.bookingId = booked.id
        console.log(values)

        try {
          console.log(values)
            const response = await bookApi.useVoucher(values);
            console.log(response.data);
    
            if (response.data) {
              getBooked();

                
            } else {
                message.error(response.data.message);
    
            }
        } catch (err) {
          message.error(err.response.data.message)
    
        }
    };
    
      
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

  return (
    <div>
    {/* ================================
START BOOKING AREA
================================= */}
    <section className="booking-area padding-top-100px padding-bottom-70px">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="form-box">
              <div className="form-title-wrap">
                <h3 className="title">Booking Submission</h3>
              </div>{/* form-title-wrap */}
              <div className="form-content ">
                <div className="contact-form-action">
                  <form method="post">
                    <div className="row">
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">First Name</label>
                          <div className="form-group">
                            <span className="la la-user form-icon" />
                            <div className="form-control">{booked.c_Firstname ? booked.c_Firstname : booked.firstname}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Last Name</label>
                          <div className="form-group">
                            <span className="la la-user form-icon" />
                            <div className="form-control">{booked.c_Lastname ? booked.c_Lastname : booked.lastname}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Your Email</label>
                          <div className="form-group">
                            <span className="la la-envelope-o form-icon" />
                            <div className="form-control">{booked.c_Email? booked.c_Email: booked.email}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Phone Number</label>
                          <div className="form-group">
                            <span className="la la-phone form-icon" />
                            <div className="form-control">{booked.c_Phone ? booked.c_Phone : booked.phone}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}

                      <div className="col-lg-12">
                        <div className="input-box">
                          <div className="form-group mb-0">
                            <div className="custom-checkbox mb-0">
                              <input type="checkbox" id="receiveChb" />
                              <label htmlFor="receiveChb">I want to receive SWP promotional offers in the future</label>
                            </div>
                          </div>
                        </div>
                      </div>{/* end col-lg-12 */}
                    </div>
                  </form>
                </div>{/* end contact-form-action */}
              </div>{/* end form-content */}

         
            </div>{/* end form-box */}
            <div className="form-box">
            <div className="btn-box">
{    booked.totalPrice ?        <PaypalPay totalPriceUSD={(booked.totalPrice/24000).toFixed(2)} bookId={params.id} c_Email={booked.c_Email} booked={booked}/> : ''
}                            </div>
            <div className="btn-box">


            
           { booked.tripResponse ? ( booked.tripResponse.allowPaylater ? <button className="theme-btn w-100"  onClick={handlePayLater} type="submit">Book seats and Pay later</button>  : '' ) : ''}
                              
                            </div>
              </div>
           
          </div>{/* end col-lg-8 */}
          <div className="col-lg-4">
            <div className="form-box booking-detail-form">
              <div className="form-title-wrap">
                <h3 className="title">Your Booking</h3>
              </div>{/* end form-title-wrap */}
              <div className="form-content">
                <div className="card-item shadow-none radius-none mb-0">
                  <div className="card-img pb-4">
                    <a href="#" className="d-block">
                      <img src={booked.tripResponse ? booked.tripResponse.image :''} alt="Trip-img" />
                    </a>
                  </div>
                  <div className="card-body p-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="card-title">{booked.tripResponse ? booked.tripResponse.departure + "-" + booked.tripResponse.arrival  :''} </h3>
                        <p className="card-meta">{booked.companyName} Company</p>
                      </div>
            
                    </div>
                    <div className="section-block" />
                    <ul className="list-items list-items-2 list-items-flush py-2">
                      <li className="font-size-15"><span className="w-auto d-block mb-n1"><i className="la la-calendar mr-1 font-size-17" />From</span>{booked.tripResponse ?  tranfer(booked.tripResponse.timeDeparture) : ''}</li>
                      <li className="font-size-15"><span className="w-auto d-block mb-n1"><i className="la la-calendar mr-1 font-size-17" />To</span>{booked.tripResponse ?  tranfer(booked.tripResponse.timeArrival) : ''}</li>
                    </ul>
                    <div className="section-block" />

                    <h3 className="card-title pb-3">Voucher</h3>
                    <div method="post list-items list-items-2 list-items-flush py-2">
                    <div className="">
                      <div className=" responsive-column">
                        <div className="input-box">
                          <Form onFinish={useVouncher}>
                          <div className="form-group">
                            <Form.Item name="code">
                            <Input className="form-control" />

                            </Form.Item>
                          </div>
                          <Button className="btn btn-primary mb-1"   type="primary" htmlType="submit">Apply Vouncher</Button>
                          </Form>
                          

                        </div>
                        </div>
                        </div>
                        </div>
                    
                    <div className="section-block" />
                    <h3 className="card-title pb-3">Order Details</h3>
                 
                    <div className="section-block" />
                    <ul className="list-items list-items-2 py-3">
                      <li><span>Type:</span>{booked.tripResponse ? booked.tripResponse.vehicle.vehicleType :''}</li>
                      <li><span>Number of seats</span>{booked.numberOfSeats} seats</li>
                      <li><span>Driver</span>{booked.tripResponse ? booked.tripResponse.employeeName :''} </li>

                      {/* <li><span>Room:</span>1</li>
                      <li><span>Guests:</span>2 adults</li>
                      <li><span>Extra Services:</span>Cleaning, Laundry, Breakfast</li> */}
                    </ul>
                    <div className="section-block" />
                    <ul className="list-items list-items-2 pt-3">
                      {/* <li><span>Sub Total:</span>${booked.totalPrice ? price(booked.totalPrice) : ''}</li> */}
                      <li><span>Vouncher:</span>{booked.voucher ? booked.voucher.discountValue : ''}%</li>
                      <li><span>Total Price:</span>${booked.totalPrice ? price(booked.totalPrice) : ''}</li>
                    </ul>
                  </div>
                </div>{/* end card-item */}
              </div>{/* end form-content */}
            </div>{/* end form-box */}
          </div>{/* end col-lg-4 */}
        </div>{/* end row */}
      </div>{/* end container */}
    </section>{/* end booking-area */}
    {/* ================================
END BOOKING AREA
================================= */}
    <div className="section-block" />
    {/* ================================
START INFO AREA
================================= */}
    <section className="info-area info-bg padding-top-90px padding-bottom-70px">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 responsive-column">
            <a href="#" className="icon-box icon-layout-2 d-flex">
              <div className="info-icon flex-shrink-0 bg-rgb text-color-2">
                <i className="la la-phone" />
              </div>{/* end info-icon*/}
              <div className="info-content">
                <h4 className="info__title">Need Help? Contact us</h4>
                <p className="info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>{/* end info-content */}
            </a>{/* end icon-box */}
          </div>{/* end col-lg-4 */}
          <div className="col-lg-4 responsive-column">
            <a href="#" className="icon-box icon-layout-2 d-flex">
              <div className="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                <i className="la la-money" />
              </div>{/* end info-icon*/}
              <div className="info-content">
                <h4 className="info__title">Payments</h4>
                <p className="info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>{/* end info-content */}
            </a>{/* end icon-box */}
          </div>{/* end col-lg-4 */}
          <div className="col-lg-4 responsive-column">
            <a href="#" className="icon-box icon-layout-2 d-flex">
              <div className="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                <i className="la la-times" />
              </div>{/* end info-icon*/}
              <div className="info-content">
                <h4 className="info__title">Cancel Policy</h4>
                <p className="info__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>
              </div>{/* end info-content */}
            </a>{/* end icon-box */}
          </div>{/* end col-lg-4 */}
        </div>{/* end row */}
      </div>{/* end container */}
    </section>{/* end info-area */}
  </div>

  )
}

export default CheckOut