import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
import bookApi from '../api/bookApi';

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
    
      getBooked();
    
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingId = params.id
        const method = "card"
        try {
          const response = await bookApi.payBook({bookingId,method});
          console.log(response);
          console.log();
    
          if (response.data) {
            message.success(response.data.message);
            navigate(`/paymentcomplete/${response.data.id}`)
    
          } else {
            message.error("Payment Fail!");
            console.log(response);
          }
        } catch (err) {
          message.error("Payment Timeout");
        //   console.log(values);
        }
      }; 
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
                            <div className="form-control">{booked.c_Firstname}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Last Name</label>
                          <div className="form-group">
                            <span className="la la-user form-icon" />
                            <div className="form-control">{booked.c_Lastname}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Your Email</label>
                          <div className="form-group">
                            <span className="la la-envelope-o form-icon" />
                            <div className="form-control">{booked.c_Email}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Phone Number</label>
                          <div className="form-group">
                            <span className="la la-phone form-icon" />
                            <div className="form-control">{booked.c_Phone}</div>
                          </div>
                        </div>
                      </div>{/* end col-lg-6 */}

                      <div className="col-lg-12">
                        <div className="input-box">
                          <div className="form-group mb-0">
                            <div className="custom-checkbox mb-0">
                              <input type="checkbox" id="receiveChb" />
                              <label htmlFor="receiveChb">I want to receive Trizen's promotional offers in the future</label>
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
              <div className="form-title-wrap">
                <h3 className="title">Your Card Information</h3>
              </div>{/* form-title-wrap */}
              <div className="form-content">
                <div className="section-tab check-mark-tab text-center pb-4">
                  <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="credit-card-tab" data-toggle="tab" href="#credit-card" role="tab" aria-controls="credit-card" aria-selected="false">
                        <i className="la la-check icon-element" />
                        <img src="images/payment-img.png" alt="" />
                        <span className="d-block pt-2">Payment with credit card</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="paypal-tab" data-toggle="tab" href="#paypal" role="tab" aria-controls="paypal" aria-selected="true">
                        <i className="la la-check icon-element" />
                        <img src="images/paypal.png" alt="" />
                        <span className="d-block pt-2">Payment with PayPal</span>
                      </a>
                    </li>
 
                  </ul>
                </div>{/* end section-tab */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="credit-card" role="tabpanel" aria-labelledby="credit-card-tab">
                    <div className="contact-form-action">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">Card Holder Name</label>
                              <div className="form-group">
                                <span className="la la-credit-card form-icon" />
                                <input className="form-control" type="text" name="text" placeholder="Card holder name" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">Card Number</label>
                              <div className="form-group">
                                <span className="la la-credit-card form-icon" />
                                <input className="form-control" type="text" name="text" placeholder="Card number" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="input-box">
                                  <label className="label-text">Expiry Month</label>
                                  <div className="form-group">
                                    <span className="la la-credit-card form-icon" />
                                    <input className="form-control" type="text" name="text" placeholder="MM" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="input-box">
                                  <label className="label-text">Expiry Year</label>
                                  <div className="form-group">
                                    <span className="la la-credit-card form-icon" />
                                    <input className="form-control" type="text" name="text" placeholder="YY" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">CVV</label>
                              <div className="form-group">
                                <span className="la la-pencil form-icon" />
                                <input className="form-control" type="text" name="text" placeholder="CVV" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-12">
                            <div className="input-box">
                              <div className="form-group">
                                <div className="custom-checkbox">
                                  <input type="checkbox" id="agreechb" />
                                  <label htmlFor="agreechb">By continuing, you agree to the <a href="#">Terms and Conditions</a>.</label>
                                </div>
                              </div>
                            </div>
                          </div>{/* end col-lg-12 */}
                          <div className="col-lg-12">
                            <div className="btn-box">
                              <button className="theme-btn" type="submit">Confirm Booking</button>
                            </div>
                          </div>{/* end col-lg-12 */}
                        </div>
                      </form>
                    </div>{/* end contact-form-action */}
                  </div>{/* end tab-pane*/}
                  <div className="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal-tab">
                    <div className="contact-form-action">
                      <form method="post">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">Email Address</label>
                              <div className="form-group">
                                <span className="la la-envelope form-icon" />
                                <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">Password</label>
                              <div className="form-group">
                                <span className="la la-lock form-icon" />
                                <input className="form-control" type="text" name="text" placeholder="Enter password" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-12">
                            <div className="btn-box">
                              <button className="theme-btn" type="submit">Login Account</button>
                            </div>
                          </div>{/* end col-lg-12 */}
                        </div>
                      </form>
                    </div>{/* end contact-form-action */}
                  </div>{/* end tab-pane*/}
                  <div className="tab-pane fade" id="payoneer" role="tabpanel" aria-labelledby="payoneer-tab">
                    <div className="contact-form-action">
                      <form method="post">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">Email Address</label>
                              <div className="form-group">
                                <span className="la la-envelope form-icon" />
                                <input className="form-control" type="email" name="email" placeholder="Enter email address" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-6">
                            <div className="input-box">
                              <label className="label-text">Password</label>
                              <div className="form-group">
                                <span className="la la-lock form-icon" />
                                <input className="form-control" type="text" name="text" placeholder="Enter password" />
                              </div>
                            </div>
                          </div>{/* end col-lg-6 */}
                          <div className="col-lg-12">
                            <div className="btn-box">
                              <button className="theme-btn" type="submit">Login Account</button>
                            </div>
                          </div>{/* end col-lg-12 */}
                        </div>
                      </form>
                    </div>{/* end contact-form-action */}
                  </div>{/* end tab-pane*/}
                </div>{/* end tab-content */}
              </div>{/* end form-content */}
            </div>{/* end form-box */}
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
                      <img src={booked.tripResponse ? booked.tripResponse.image :''} alt="room-img" />
                    </a>
                  </div>
                  <div className="card-body p-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="card-title">Premium Lake View Room</h3>
                        <p className="card-meta">Mariana's hotel, Mexico</p>
                      </div>
            
                    </div>
                    <div className="section-block" />
                    <ul className="list-items list-items-2 list-items-flush py-2">
                      <li className="font-size-15"><span className="w-auto d-block mb-n1"><i className="la la-calendar mr-1 font-size-17" />From</span>12 May 2020 7:40am</li>
                      <li className="font-size-15"><span className="w-auto d-block mb-n1"><i className="la la-calendar mr-1 font-size-17" />To</span>16 May 2020 8:40am</li>
                    </ul>
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
                      <li><span>Sub Total:</span>${booked.totalPrice}</li>
                      <li><span>Vouncher:</span>$0</li>
                      <li><span>Total Price:</span>${booked.totalPrice}</li>
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