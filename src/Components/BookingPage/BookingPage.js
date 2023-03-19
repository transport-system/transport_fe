import React, {Component, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {HideLoading, ShowLoading} from "../../redux/alertsSlice";
import tripApi from "../../api/tripApi";
import {Button, Col, message, Row} from "antd";
import {useNavigate, useParams} from "react-router-dom"; 
import SeatSelection from '../SeatSelection';
//  import "./bookingPage.css"
import Order from './orderForm/Order';
import ModalOrder from './orderForm/ModalOrder';
import Feedback from '../feedbackPage/Feedback';
function BookingPage(){
    const params =useParams();
    const dispatch = useDispatch();
    const [Trip, setTrip] = useState([]);
    const [Seats, setSeats] = useState([]);
    const navigate = useNavigate();
    const [selectedSeats,setSelectedSeats] =useState([]);

    const getTrip = async () => {
        try {
            dispatch(ShowLoading());
            const response = await tripApi.getTripById(params.id);
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
                setTrip(response.data.data_id);
                
            } else {
                message.error(response.data.message);

            }
        } catch (err) {
            message.error(err.message);

        }
    };
    
    const getSeatById = async () => {
        try {
            dispatch(ShowLoading());
            const response = await tripApi.getSeatById(Trip.vehicleId);
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
                setSeats(response.data.data);

            } else {
                // message.error(response.data.message);

            }
        } catch (err) {
            // message.error(err.message);

        }
    };
    useEffect(() => {

        getTrip();

    },[]);
    useEffect(() => {
        getSeatById()
    },[Trip]);
    
    
    const timeArrivalOld    = Trip.timeArrival;
    const timeDepartureOld    = Trip.timeDeparture;
    const timeDeparture = new Date(timeDepartureOld).toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    const timeArrival = new Date(timeArrivalOld).toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }
    );
    const [error, setError] = useState(false);
    const TotalPrice = (Trip.price*selectedSeats.length).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });

    //order
    const [isrendered,setisrendered]=useState(false);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
  
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
<div>


      <section className="breadcrumb-area bread-bg-6 py-0">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-btn">
                  <div className="btn-box">
                    <a className="theme-btn" data-fancybox="video" data-src="https://www.youtube.com/watch?v=IpVmKLpo-Sk" data-speed={700}>
                      <i className="la la-video-camera mr-2" />Video
                    </a>
                    <a className="theme-btn" data-src="images/destination-img.jpg" data-fancybox="gallery" data-caption="Showing image - 01" data-speed={700}>
                      <i className="la la-photo mr-2" />More Photos
                    </a>
                  </div>
                  <a className="d-none" data-fancybox="gallery" data-src="images/destination-img2.jpg" data-caption="Showing image - 02" data-speed={700} />
                  <a className="d-none" data-fancybox="gallery" data-src="images/destination-img3.jpg" data-caption="Showing image - 03" data-speed={700} />
                  <a className="d-none" data-fancybox="gallery" data-src="images/destination-img4.jpg" data-caption="Showing image - 04" data-speed={700} />
                </div>{/* end breadcrumb-btn */}
              </div>{/* end col-lg-12 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end breadcrumb-wrap */}
      </section>
      <section className="tour-detail-area padding-bottom-90px">
        <div className="single-content-navbar-wrap menu section-bg" id="single-content-navbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-content-nav" id="single-content-nav">
                  <ul>
                    <li><a data-scroll="description" href="#description" className="scroll-link active">Trip Details</a></li>
                    <li><a data-scroll="seat-selection" href="#seat-selection" className="scroll-link">Seat Selection</a></li>
                    <li><a data-scroll="reviews" href="#reviews" className="scroll-link">Reviews</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{/* end single-content-navbar-wrap */}
        <div className="single-content-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-content-wrap padding-top-60px">
                  <div id="description" className="page-scroll">
                    <div className="single-content-item pb-4">
                      <h3 className="title font-size-26">{Trip.departure} to {Trip.arrival}</h3>
                      <div className="d-flex align-items-center pt-2">
                        <p className="mr-2">One way Ticket</p>
                        {/* <p>
                          <span className="badge badge-warning text-white font-weight-medium font-size-16">1 Stop</span>
                        </p> */}
                      </div>
                    </div>{/* end single-content-item */}
                    <div className="section-block" />
                    
                    <div className="single-content-item py-4">
                      <div className="row">
                        <div className="col-lg-4 col-sm-4">
                          <div className="single-feature-titles text-center mb-3">
                            <h3 className="title font-size-15 font-weight-medium">Trip Departure</h3>
                            <span className="font-size-13">{timeDeparture}</span>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 col-sm-4">
                          <div className="single-feature-titles text-center mb-3">
                            <i className="la la-clock-o text-color font-size-22" />
                            <span className="font-size-13 mt-n2">1H 40M</span>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 col-sm-4">
                          <div className="single-feature-titles text-center mb-3">
                            <h3 className="title font-size-15 font-weight-medium">Trip Arrival</h3>
                            <span className="font-size-13">{timeArrival}</span>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-12">
                          <div className="single-feature-titles text-center border-top border-bottom py-3 mb-4">
                            <h3 className="title font-size-15 font-weight-medium">Total flight time:<span className="font-size-13 d-inline-block ml-1 text-gray">13 Hours 40 min</span></h3>
                          </div>
                        </div>{/* end col-lg-12 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-plane" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Company</h3>
                              <span className="font-size-13">{Trip.companyName}</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-user" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Flight Type</h3>
                              <span className="font-size-13">Economy</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-refresh" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Fare Type</h3>
                              <span className="font-size-13">Refundable</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-times" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Cancellation</h3>
                              <span className="font-size-13">$78 / Person</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-exchange" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Flight Change</h3>
                              <span className="font-size-13">$53 / Person</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-shopping-cart" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Seats &amp; Baggage</h3>
                              <span className="font-size-13">Extra Charge</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-gear" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Inflight Features</h3>
                              <span className="font-size-13">Available</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-building" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Base Fare</h3>
                              <span className="font-size-13">$320.00</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column">
                          <div className="single-tour-feature d-flex align-items-center mb-3">
                            <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                              <i className="la la-money" />
                            </div>
                            <div className="single-feature-titles">
                              <h3 className="title font-size-15 font-weight-medium">Taxes &amp; Fees</h3>
                              <span className="font-size-13">$300.00</span>
                            </div>
                          </div>{/* end single-tour-feature */}
                        </div>{/* end col-lg-4 */}
                      </div>{/* end row */}
                    </div>{/* end single-content-item */}
                    <div id="seat-selection" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">Select your Seats</h3>
                      <p className="pt-3">Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec eget accumsan est. Duis laoreet sagittis elit et vehicula.</p>
                      <SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} Trip={Trip} Seat={Seats}/>

                    </div>{/* end single-content-item */}
                    <div className="section-block" />
                  </div>{/* end seat-selection */}
                    <div className="section-block" />
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">About {Trip.companyName} Company</h3>
                      <p className="py-3">Per consequat adolescens ex, cu nibh commune temporibus vim, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
                      <p className="pb-3">Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint blandit efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
                      <p>Sed scelerisque lectus sit amet faucibus sodales. Proin ut risus tortor. Etiam fermentum tellus auctor, fringilla sapien et, congue quam. In a luctus tortor. Suspendisse eget tempor libero, ut sollicitudin ligula. Nulla vulputate tincidunt est non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus at est imperdiet, dapibus ipsum vel, lacinia nulla. </p>
                    </div>{/* end single-content-item */}
                    <div className="section-block" />
                  </div>{/* end description */}
                  <div id="inflight-features" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-30px">
                      <h3 className="title font-size-20">Inflight Features</h3>
                      <p className="pt-3">Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc.</p>
                      <div className="inflight-content-item pt-4">
                        <div className="row">
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-wifi" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">WI-FI</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-music" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Entertainment</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-television" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Television</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-tree" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Air Conditioning</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-glass" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Drink</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-gamepad" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Games</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-coffee" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Coffee</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-glass" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Wines</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-shopping-cart" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Shopping</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-cutlery" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Food</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-bed" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Comfort</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-3">
                                <i className="la la-photo" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Magazines</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                        </div>{/* end row */}
                      </div>{/* end inflight-content-item */}
                    </div>{/* end single-content-item */}
                    <div className="section-block" />
                  </div>{/* end inflight-features */}
                
                 
                  <div id="fare-rules" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">Fare Rules for your Flight</h3>
                      <div className="fare-feature-item padding-top-30px pb-2">
                        <div className="row">
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-2">
                                <i className="la la-check" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Rules And Policies</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-2">
                                <i className="la la-check" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Flight Changes</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-2">
                                <i className="la la-check" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Refunds</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-2">
                                <i className="la la-check" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Airline Penalties</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-2">
                                <i className="la la-check" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Flight Cancellation</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-4 responsive-column">
                            <div className="single-tour-feature d-flex align-items-center mb-3">
                              <div className="single-feature-icon icon-element ml-0 flex-shrink-0 mr-2">
                                <i className="la la-check" />
                              </div>
                              <div className="single-feature-titles">
                                <h3 className="title font-size-15 font-weight-medium">Airline Terms Of Use</h3>
                              </div>
                            </div>{/* end single-tour-feature */}
                          </div>{/* end col-lg-4 */}
                        </div>{/* end row */}
                      </div>
                      <p>Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing, arcu metus luctus libero, nec vulputate risus elit id nibh.</p>
                      <div className="accordion accordion-item padding-top-30px" id="accordionExample2">
                        <div className="card">
                          <div className="card-header" id="faqHeadingFour">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-toggle="collapse" data-target="#faqCollapseFour" aria-expanded="true" aria-controls="faqCollapseFour">
                                <span className="ml-3">Flight cancellation charges</span>
                                <i className="la la-minus" />
                                <i className="la la-plus" />
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseFour" className="collapse show" aria-labelledby="faqHeadingFour" data-parent="#accordionExample2">
                            <div className="card-body d-flex">
                              <p>Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                          </div>
                        </div>{/* end card */}
                        <div className="card">
                          <div className="card-header" id="faqHeadingFive">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-toggle="collapse" data-target="#faqCollapseFive" aria-expanded="false" aria-controls="faqCollapseFive">
                                <span className="ml-3">WAmendment in higher class charges</span>
                                <i className="la la-minus" />
                                <i className="la la-plus" />
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseFive" className="collapse" aria-labelledby="faqHeadingFive" data-parent="#accordionExample2">
                            <div className="card-body d-flex">
                              <p>Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                          </div>
                        </div>{/* end card */}
                        <div className="card">
                          <div className="card-header" id="faqHeadingSix">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-toggle="collapse" data-target="#faqCollapseSix" aria-expanded="false" aria-controls="faqCollapseSix">
                                <span className="ml-3">Amendment in same class charges</span>
                                <i className="la la-minus" />
                                <i className="la la-plus" />
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseSix" className="collapse" aria-labelledby="faqHeadingSix" data-parent="#accordionExample2">
                            <div className="card-body d-flex">
                              <p>Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                          </div>
                        </div>{/* end card */}
                        <div className="card">
                          <div className="card-header" id="faqHeadingSeven">
                            <h2 className="mb-0">
                              <button className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16" type="button" data-toggle="collapse" data-target="#faqCollapseSeven" aria-expanded="false" aria-controls="faqCollapseSeven">
                                <span className="ml-3">Rebooking/cancellation charges</span>
                                <i className="la la-minus" />
                                <i className="la la-plus" />
                              </button>
                            </h2>
                          </div>
                          <div id="faqCollapseSeven" className="collapse" aria-labelledby="faqHeadingSeven" data-parent="#accordionExample2">
                            <div className="card-body d-flex">
                              <p>Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                          </div>
                        </div>{/* end card */}
                      </div>
                    </div>{/* end single-content-item */}
                    <div className="section-block" />
                  </div>{/* end faq */}
                  <div id="reviews" className="page-scroll">
                    <div className="single-content-item padding-top-40px padding-bottom-40px">
                      <h3 className="title font-size-20">Reviews</h3>
                      <div className="review-container padding-top-30px">
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <div className="review-summary">
                              <h2>{Trip.rating}<span>/5</span></h2>
                              <p>Excellent</p>
                              <span>Based on 4 reviews</span>
                            </div>
                          </div>{/* end col-lg-4 */}
                          <div className="col-lg-8">
                            <div className="review-bars">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="progress-item">
                                    <h3 className="progressbar-title">Service</h3>
                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                      <div className="progressbar-box flex-shrink-0">
                                        <div className="progressbar-line" data-percent="70%">
                                          <div className="progressbar-line-item bar-bg-1" />
                                        </div> {/* End Skill Bar */}
                                      </div>
                                      <div className="bar-percent">4.6</div>
                                    </div>
                                  </div>{/* end progress-item */}
                                </div>{/* end col-lg-6 */}
                                <div className="col-lg-6">
                                  <div className="progress-item">
                                    <h3 className="progressbar-title">Location</h3>
                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                      <div className="progressbar-box flex-shrink-0">
                                        <div className="progressbar-line" data-percent="55%">
                                          <div className="progressbar-line-item bar-bg-2" />
                                        </div> {/* End Skill Bar */}
                                      </div>
                                      <div className="bar-percent">4.7</div>
                                    </div>
                                  </div>{/* end progress-item */}
                                </div>{/* end col-lg-6 */}
                                <div className="col-lg-6">
                                  <div className="progress-item">
                                    <h3 className="progressbar-title">Value for Money</h3>
                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                      <div className="progressbar-box flex-shrink-0">
                                        <div className="progressbar-line" data-percent="40%">
                                          <div className="progressbar-line-item bar-bg-3" />
                                        </div> {/* End Skill Bar */}
                                      </div>
                                      <div className="bar-percent">2.6</div>
                                    </div>
                                  </div>{/* end progress-item */}
                                </div>{/* end col-lg-6 */}
                                <div className="col-lg-6">
                                  <div className="progress-item">
                                    <h3 className="progressbar-title">Cleanliness</h3>
                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                      <div className="progressbar-box flex-shrink-0">
                                        <div className="progressbar-line" data-percent="60%">
                                          <div className="progressbar-line-item bar-bg-4" />
                                        </div> {/* End Skill Bar */}
                                      </div>
                                      <div className="bar-percent">3.6</div>
                                    </div>
                                  </div>{/* end progress-item */}
                                </div>{/* end col-lg-6 */}
                                <div className="col-lg-6">
                                  <div className="progress-item">
                                    <h3 className="progressbar-title">Facilities</h3>
                                    <div className="progressbar-content line-height-20 d-flex align-items-center justify-content-between">
                                      <div className="progressbar-box flex-shrink-0">
                                        <div className="progressbar-line" data-percent="50%">
                                          <div className="progressbar-line-item bar-bg-5" />
                                        </div> {/* End Skill Bar */}
                                      </div>
                                      <div className="bar-percent">2.6</div>
                                    </div>
                                  </div>{/* end progress-item */}
                                </div>{/* end col-lg-6 */}
                              </div>{/* end row */}
                            </div>
                          </div>{/* end col-lg-8 */}
                        </div>
                      </div>
                    </div>{/* end single-content-item */}
                    <div className="section-block" />
                  </div>{/* end reviews */}
                  <div className="review-box">
                    <div className="single-content-item padding-top-40px">
                    <Button
              onClick={()=>{isrendered ? setisrendered(false) : setisrendered(true)}}
            >View Feedback</Button>                      { isrendered &&  <Feedback companyId={Trip.companyId}/>}

                     {/* end comments-list */}
                     {/* end comment-forum */}
                    </div>{/* end single-content-item */}
                  </div>{/* end review-box */}
                </div>{/* end single-content-wrap */}
              </div>{/* end col-lg-8 */}
              <div className="col-lg-4">
                <div className="sidebar single-content-sidebar mb-0">
                  <div className="sidebar-widget single-content-widget">
                    <div className="sidebar-widget-item">
                      <div className="sidebar-book-title-wrap mb-3">
                        <h3>Popular</h3>
                        <p><span className="text-form">Total</span><span className="text-value ml-2 mr-1">{TotalPrice}</span></p>
                      </div>
                    </div>{/* end sidebar-widget-item */}
                    <div className="sidebar-widget-item">
                      <div className="contact-form-action">
                          <div className="input-box">
                            <label className="label-text">Selected Seats:</label>
                            <span> {selectedSeats.join(", ")}</span>

                          </div>
                                    </div>
                    </div>{/* end sidebar-widget-item */}

                    <div className="btn-box pt-2">
                      <a  onClick={showModal} className="theme-btn text-center w-100 mb-2"><i className="la la-shopping-cart mr-2 font-size-18" />Book Now</a>
                      <a href="#" className="theme-btn text-center w-100 theme-btn-transparent"><i className="la la-heart-o mr-2" />Add to Wishlist</a>

                    </div>
                  </div>{/* end sidebar-widget */}
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Enquiry Form</h3>
                    <div className="enquiry-forum">
                      <div className="form-box">
                        <div className="form-content">
                          <div className="contact-form-action">
                            <form method="post">
                              <div className="input-box">
                                <label className="label-text">Your Name</label>
                                <div className="form-group">
                                  <span className="la la-user form-icon" />
                                  <input className="form-control" type="text" name="text" placeholder="Your name" />
                                </div>
                              </div>
                              <div className="input-box">
                                <label className="label-text">Your Email</label>
                                <div className="form-group">
                                  <span className="la la-envelope-o form-icon" />
                                  <input className="form-control" type="email" name="email" placeholder="Email address" />
                                </div>
                              </div>
                              <div className="input-box">
                                <label className="label-text">Message</label>
                                <div className="form-group">
                                  <span className="la la-pencil form-icon" />
                                  <textarea className="message-control form-control" name="message" placeholder="Write message" defaultValue={""} />
                                </div>
                              </div>
                              <div className="input-box">
                                <div className="form-group">
                                  <div className="custom-checkbox mb-0">
                                    <input type="checkbox" id="agreechb" />
                                    <label htmlFor="agreechb">I agree with <a href="#">Terms of Service</a> and
                                      <a href="#">Privacy Statement</a></label>
                                  </div>
                                </div>
                              </div>
                              <div className="btn-box">
                                <button type="button" className="theme-btn">Submit Enquiry</button>
                              </div>
                            </form>
                          </div>{/* end contact-form-action */}
                        </div>{/* end form-content */}
                      </div>{/* end form-box */}
                    </div>{/* end enquiry-forum */}
                  </div>{/* end sidebar-widget */}
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Why Book With Us?</h3>
                    <div className="sidebar-list">
                      <ul className="list-items">
                        <li><i className="la la-dollar icon-element mr-2" />No-hassle best price guarantee</li>
                        <li><i className="la la-microphone icon-element mr-2" />Customer care available 24/7</li>
                        <li><i className="la la-thumbs-up icon-element mr-2" />Hand-picked Tours &amp; Activities</li>
                        <li><i className="la la-file-text icon-element mr-2" />Free Travel Insureance</li>
                      </ul>
                    </div>{/* end sidebar-list */}
                  </div>{/* end sidebar-widget */}
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Get a Question?</h3>
                    <p className="font-size-14 line-height-24">Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.</p>
                    <div className="sidebar-list pt-3">
                      <ul className="list-items">
                        <li><i className="la la-phone icon-element mr-2" /><a href="#">+ 61 23 8093 3400</a></li>
                        <li><i className="la la-envelope icon-element mr-2" /><a href="mailto:info@trizen.com">info@trizen.com</a></li>
                      </ul>
                    </div>{/* end sidebar-list */}
                  </div>{/* end sidebar-widget */}
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Organized by</h3>
                    <div className="author-content">
                      <div className="d-flex">
                        <div className="author-img">
                          <a href="#"><img src="images/team8.jpg" alt="testimonial image" /></a>
                        </div>
                        <div className="author-bio">
                          <h4 className="author__title"><a href="#">royaltravelagency</a></h4>
                          <span className="author__meta">Member Since 2017</span>
                          <span className="ratings d-flex align-items-center">
                            <i className="la la-star" />
                            <i className="la la-star" />
                            <i className="la la-star" />
                            <i className="la la-star" />
                            <i className="la la-star-o" />
                            <span className="ml-2">305 Reviews</span>
                          </span>
                          <div className="btn-box pt-3">
                            <a href="#" className="theme-btn theme-btn-small theme-btn-transparent">Ask a Question</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* end sidebar-widget */}
                </div>{/* end sidebar */}
              </div>{/* end col-lg-4 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>{/* end single-content-box */}
      </section>
  
    
<section className='container pb-5 bookingP'>
            <Row className=" " gutter={[16, 24]}>
                <Col lg={12} xs={24} sm={24} className="card">
                    <img className="card-img" src="../assets/banner_img.jpeg"  />
                    <div className="card-body p-2 m-2">
                        <h1 className="card-title">TripID: {Trip.tripId}</h1>

                        <div>Time: {timeDeparture} -  {timeArrival}</div>
                        <div>Quantity: {Trip.seatQuantity}</div>
                        <div>                    {Trip.companyName}</div>
                    </div>
                        <h5>Ghế đã chọn: {selectedSeats.join(", ")}</h5>

                    <h3>Total: {TotalPrice}</h3>
                    <Button className='btn' onClick={showModal}>Book now</Button>
                    <Button
              onClick={()=>{isrendered ? setisrendered(false) : setisrendered(true)}}
            >View Feedback</Button>
                </Col>
                <Col lg={12} xs={24} sm={24} className='align-items-center'>
                <SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} Trip={Trip} Seat={Seats}/>

                </Col>
            </Row>
            <Order isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel} selectedSeats={selectedSeats} trip={Trip} totalPrice={TotalPrice}
          ></Order>
       { isrendered &&  <Feedback companyId={Trip.companyId}/>}
        </section>
</div>
        
    );

}

export default BookingPage;
