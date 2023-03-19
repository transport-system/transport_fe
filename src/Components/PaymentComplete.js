import React from 'react'

function PaymentComplete() {
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
                  <li className="step-bar flex-grow-1 step-bar-active">
                    <span className="icon-element">3</span>
                    <p className="pt-2 color-text-2">Booking Completed!</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-content">
              <div className="payment-received-list">
                <div className="d-flex align-items-center">
                  <i className="la la-check icon-element flex-shrink-0 mr-3 ml-0" />
                  <div>
                    <h3 className="title pb-1">Thanks Alex!</h3>
                    <h3 className="title">Your booking in EnVision Hotel Boston is confirmed.</h3>
                  </div>
                </div>
                <ul className="list-items py-4">
                  <li><i className="la la-check text-success mr-2" /><strong className="text-black">EnVision Hotel Boston</strong> is Expecting you on <strong className="text-black">01 june</strong></li>
                  <li><i className="la la-check text-success mr-2" />Your <strong className="text-black">payment</strong> will be handled by EnVision Hotel Boston, the <strong className="color-text-2">'Payment'</strong> section below has more details</li>
                  <li><i className="la la-check text-success mr-2" />Make changes to your booking or ask the properly a question in just a few clicks</li>
                </ul>
                <div className="form-content">
        <div className="row">
          <div className="col-lg-6">
            <div className="payment-received-list">
              <h3 className="title font-size-24">EnVision Hotel Boston</h3>
              <div className="card-rating">
                <span className="badge badge-warning text-white">4.4/5</span>
                <span className="review__text text-warning">Average</span>
                <span className="rating__text">(30 Reviews)</span>
              </div>
              <ul className="list-items list-items-2 py-3">
                <li><span>Location:</span>Delaware, OH, USA</li>
                <li><span>Check-in:</span>Thu 30 Mar, 2020</li>
                <li><span>Check-out:</span>Sat 01 Jun, 2020</li>
                <li><span>Booking details:</span>2 Nights, 1 Room, Max 2 Adult(s)</li>
                <li><span>Room type:</span>Luxury View Suite</li>
                <li><span>Client:</span>David Martin</li>
              </ul>
            </div>{/* end card-item */}
          </div>{/* end col-lg-6 */}
          <div className="col-lg-6">
            <div className="card-item card-item-list payment-received-card">
              <div className="card-img">
                <img src="images/img1.jpg" alt="hotel-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title">1 Room x 2 Nights</h3>
                <div className="card-price pb-3">
                  <span className="price__from">From</span>
                  <span className="price__num">$88.00</span>
                  <span className="price__text">Per night</span>
                </div>
                <div className="section-block" />
                <p className="card-text pt-3">Hotel tax 7% not included, Service charge 10% not included</p>
              </div>
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
                      <th scope="row">#121</th>
                      <td>
                        <div className="table-content">
                          <h3 className="title">Thu 30 Mar, 2020</h3>
                        </div>
                      </td>
                      <td>
                        <div className="table-content">
                          <h3 className="title">$88</h3>
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
                      <th scope="col">Room</th>
                      <th scope="col" className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="table-content">
                          <p className="title pb-2">EnVision Hotel Boston</p>
                          <p className="font-size-13 text-gray line-height-20 font-weight-medium"><span className="mr-2 color-text-2">Start Date:</span>Thu 30 Mar, 2020</p>
                          <p className="font-size-13 text-gray line-height-20 font-weight-medium"><span className="mr-2 color-text-2">End Date:</span>Sat 01 Jun, 2020</p>
                        </div>
                      </th>
                      <td>
                        <div className="table-content text-right">
                          <h3 className="title color-text">$88</h3>
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
                          <h3 className="title color-text">$88</h3>
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
                          <h3 className="title color-text">$88</h3>
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
                <div className="btn-box pb-4">
                  <a href="#" className="theme-btn mb-2 mr-2">Make changes to your booking</a>
                  <a href="#" className="theme-btn mb-2 theme-btn-transparent">Make your booking in the app</a>
                </div>
                <h3 className="title"><a href="#" className="text-black">EnVision Hotel Boston</a></h3>
                <p>New York City, NY, USA</p>
                <p className="py-1"><a href="#" className="text-color">Click for directions on Google maps <i className="la la-arrow-right" /></a></p>
                <p><strong className="text-black mr-1">Phone:</strong>+ 00 222 44 5678</p>
                <ul className="list-items list-items-3 list-items-4 py-4">
                  <li><span className="text-black font-weight-bold">Your reservation</span>2 Nights, 1 Room</li>
                  <li><span className="text-black font-weight-bold">Check-in</span>Thu 30 Mar, 2020</li>
                  <li><span className="text-black font-weight-bold">Check-out</span>Sat 01 Jun, 2020</li>
                  <li><span className="text-black font-weight-bold">Prepayment</span>You will be charged a prepayment of the total price at any time.</li>
                  <li><span className="text-black font-weight-bold">Cancellation cost</span>From now on: USD 34</li>
                </ul>
                <div className="btn-box">
                  <a href="#" className="theme-btn border-0 text-white bg-7">Cancel your booking</a>
                </div>
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