import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import bookApi from '../api/bookApi';
import { message } from 'antd';
import QRCode from 'react-qr-code';
import userApi from '../api/userApi';

function PaymentComplete() {
    const params = useParams();
    const [booked,setBooked] =useState({});
    const navigate = useNavigate()

    const handleRefund = async () =>{
      try {
        const response = await userApi.requestRefund(params.id);
        console.log(response.data);
        

        if (response.data) {
            message.success("Request refund success!!")
            
        } else {
            message.error(response.data.message);

        }
    } catch (err) {
        message.error(err.message);

    }
    }
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
       const price = (price) =>{ const  newPrice = price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    return newPrice
    }
  return (
    <section className="payment-area section-bg section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="form-box payment-received-wrap mb-0">
            <div className="form-title-wrap">
              <div className="step-bar-wrap text-center">
                <ul className="step-bar-list d-flex align-items-center justify-content-around">
                  <li className="step-bar flex-grow-1 step-bar-active">
                    <span className="icon-element">1</span>
                    <p className="pt-2 color-text-2">Choose Your Room</p>
                  </li>
                  <li className="step-bar flex-grow-1 step-bar-active">
                    <span className="icon-element">2</span>
                    <p className="pt-2 color-text-2">Your Booking &amp; Payment Details</p>
                  </li>
                  {  booked.status === 'DONE'  ?  
                  <li className="step-bar flex-grow-1 step-bar-active">
                    <span className="icon-element">3</span>
                    <p className="pt-2 color-text-2">Booking Completed!</p>
                  </li> : <li className="step-bar flex-grow-1 step-bar-inactive">
                    <span className="icon-element">3</span>
                    <p className="pt-2 color-text-2">Booking  {booked.status}!</p>
                  </li>}
                </ul>
              </div>
            </div>
            <div className="form-content">
              <div className="payment-received-list">
         
     {  booked.status === 'DONE'  ?         <div className="d-flex align-items-center">
                  <i className="la la-check icon-element flex-shrink-0 mr-3 ml-0" />
                  <div>
                    <h3 className="title pb-1">Thanks {booked.c_Firstname ? booked.c_Firstname : booked.firstname}</h3>
                    <h3 className="title">Your booking {booked.id} ID is confirmed.</h3>
                    </div>
                </div> : 
             <div className="d-flex align-items-center">
             <div>
               <h3 className="title pb-1">Hi, {booked.c_Firstname}</h3>
               <h3 className="title">Your booking {booked.id} ID is {booked.status}.</h3>
               </div>
           </div> }
                 
                <ul className="list-items py-4">
                  {/* <li><i className="la la-check text-success mr-2" /><strong className="text-black">EnVision Hotel Boston</strong> is Expecting you on <strong className="text-black">01 june</strong></li> */}
                  <li><i className="la la-check text-success mr-2" />Your <strong className="text-black">payment</strong> will be handled by us, the <strong className="color-text-2">'Payment'</strong> section below has more details</li>
                  <li><i className="la la-check text-success mr-2" />Make changes to your booking or ask the properly a question in just a few clicks</li>
                </ul>
                <div className="form-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="payment-received-list">
              <h3 className="title font-size-24">{booked.tripResponse ? booked.tripResponse.departure + "-" + booked.tripResponse.arrival  :''}</h3>
              <div className="card-rating">
                <span className="badge badge-warning text-white">4.4/5</span>
                <span className="review__text text-warning">Average</span>
                <span className="rating__text">(30 Reviews)</span>
              </div>
              <ul className="list-items list-items-2 py-3">
                <li><span>Date:</span>{booked.tripResponse ?  tranfer(booked.tripResponse.timeDeparture) : ''}</li>
                <li><span>From</span>{booked.tripResponse ? booked.tripResponse.departure :''}</li>
                <li><span>To:</span>{booked.tripResponse ? booked.tripResponse.arrival :''}</li>
                <li><span>Booking details:</span>{booked.numberOfSeats}</li>
                <li><span>Vehicle type:</span>{booked.tripResponse ? booked.tripResponse.vehicle.vehicleType :''}</li>
                <li><span>Client:</span>{booked.companyName}</li>
              </ul>
            </div>{/* end card-item */}
          </div>{/* end col-lg-6 */}
          <div className="col-lg-6">
            <div className="card-item card-item-list payment-received-card">
              <div className="card-img">
                <img src={booked.tripResponse ? booked.tripResponse.image :''} alt="hotel-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Number of Seat {booked.numberOfSeats}</h3>
                <div className="card-price pb-3">
                  <span className="price__from">From</span>
                  <span className="price__num">${booked.tripResponse ? price(booked.tripResponse.price) : ''}</span>
                  <span className="price__text">Per seat</span>
                </div>
                <div className="section-block" />
                <div style={{ height: "auto", margin: "0 auto", maxWidth: 100, width: "100%" }}>
    <QRCode
    size={300}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={`https://swp-demo-main.vercel.app/paymentcomplete/${booked.id}`}
    viewBox={`0 0 256 256`}
    />
</div>
                <p className="card-text pt-3 text-warning">Please save this code carefully!</p>
              </div>
              {/* <h3 className='warning'>Please save this code carefully!</h3> */}
        
            </div>{/* end card-item */}
       
          </div>{/* end col-lg-6 */}
        </div>{/* end row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="payment-received-list">
              <h3 className="title">Received</h3>
              <p>Thank you. Your order has been received</p>
              <div className="table-form table-responsive pt-3 pb-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Order</th>
                      <th scope="col">Date</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">#{booked.id}</th>
                      <td>
                        <div className="table-content">
                          <h3 className="title">{booked.tripResponse ?  tranfer(booked.createBookingTime) : ''}</h3>
                        </div>
                      </td>
                      <td>
                        <div className="table-content">
                          <h3 className="title">{booked.totalPrice ? price(booked.totalPrice) : ''}</h3>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Make your payment derectly into our bank account. Please ues your Order ID as the payment reference. Your order wont be shipped until the funds have cleared in our account</p>
            </div>{/* end card-item */}
          </div>{/* end col-lg-6 */}
          <div className="col-lg-6">
            <div className="payment-received-list">
              <h3 className="title">Payment Detail</h3>
              <div className="table-form table-layout-2 table-responsive pt-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Seat</th>
                      <th scope="col" className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="table-content">
                            {booked.seatRespone ? booked.seatRespone.map(seat=>(

                        <p className="title pb-2"></p>

                            )) : ''}
                        </div>
                      </th>
                      <td>
                        <div className="table-content text-right">
                          <h3 className="title color-text">${booked.totalPrice ? price(booked.totalPrice) : ''}</h3>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="table-content">
                          <p className="title">Subtotal</p>
                        </div>
                      </th>
                      <td>
                        <div className="table-content text-right">
                          <h3 className="title color-text">${booked.totalPrice ? price(booked.totalPrice) : ''}</h3>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="table-content">
                          <p className="title">Order Total</p>
                        </div>
                      </th>
                      <td>
                        <div className="table-content text-right">
                          <h3 className="title color-text">${booked.totalPrice ? price(booked.totalPrice) : ''}</h3>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>{/* end card-item */}
          </div>{/* end col-lg-6 */}
        </div>{/* end row */}
      </div>
                {/* <div className="btn-box pb-4">
                  <a href="#" className="theme-btn mb-2 mr-2">Make changes to your booking</a>
                  <a href="#" className="theme-btn mb-2 theme-btn-transparent">Make your booking in the app</a>
                </div> */}
                <h3 className="title"><a href="#" className="text-black">{booked.tripResponse ? booked.companyName : ''}</a></h3>
                {/* <p className="py-1"><a href="#" className="text-color">Click for directions on Google maps <i className="la la-arrow-right" /></a></p> */}
                <p><strong className="text-black mr-1">Email:</strong>{booked.tripResponse ? booked.companyEmail : ''}</p>
                <p><strong className="text-black mr-1">Phone:</strong>{booked.tripResponse ? booked.companyPhone : ''}</p>
                <ul className="list-items list-items-3 list-items-4 py-4">
                  <li><span className="text-black font-weight-bold">Prepayment</span>You will be charged a prepayment of the total price at any time.</li>
                  <li><span className="text-black font-weight-bold">Cancellation cost</span>10% Total fee</li>
                </ul>

                {localStorage.getItem("userID") ?  <div className="btn-box">
                  <button onClick={()=>handleRefund()} className="theme-btn border-0 text-white bg-7 ">Cancel your booking</button>
                </div> : ''}
               
              </div>{/* end card-item */}
            </div>
          </div>{/* end payment-card */}
        </div>{/* end col-lg-12 */}
      </div>{/* end row */}
    </div>{/* end container */}
  </section>
  )
}

export default PaymentComplete