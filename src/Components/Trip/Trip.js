import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import {
  ArrowDownOutlined,
  SwapRightOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { width } from "@mui/system";
import moment from "moment/moment";
function Trip({ trip }) {
  const navigate = useNavigate();
  const timeArrivalOld = trip.timeArrival;
  const timeDepartureOld = trip.timeDeparture;
  const timeDeparture = new Date(timeDepartureOld).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const timeArrival = new Date(timeArrivalOld).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateConverter = (startDate, timeEnd) => {
    const newStartDate= new Date(startDate);
    const newEndDate=new Date(timeEnd);
    let result=moment(newStartDate).diff(newEndDate,'Minutes')
    return result   }


  const price = trip.price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return (
    
<div class="card-item flight-card flight--card card-item-list card-item-list-2">
                    <div class="card-img">
                        <img src={trip.image}  alt="flight-logo-img"/>
                    </div>
                    <div class="card-body">
                        <div class="card-top-title d-flex justify-content-between">
                            <div>
                                <h3 class="card-title font-size-17">{trip.departure} - {trip.arrival}</h3>
                                {/* <p class="card-meta font-size-14" className="m-0">One way</p>  */}
                                <p class="card-meta font-size-14">  {trip.company.companyName}  <StarFilled className="pl-1" style={{"color":"#ffc107","vertical-align": "0.1em"}}/>
                                 {trip.company.rating} <span>({(trip.company.feedBacks).length} reviews)</span>
                                 <span>- Paylater : {trip.allowPaylater ? "YES" : "No"}  </span>
                        </p>

                            </div>
                            <div>
                                <div class="text-right">
                                    <span class="font-weight-regular font-size-14 d-block">avg/seat</span>
                                    <h6 class="font-weight-bold color-text">{price}</h6>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flight-details py-3">
                            <div class="flight-time pb-3">
                                <div class="flight-time-item take-off d-flex">
                                    <div class="flex-shrink-0 mr-2">
                                        {/* <i class="la la-plane"></i> */}
                                    </div>
                                    <div>
                                        <h3 class="card-title font-size-15 font-weight-medium mb-0">Departure</h3>
                                        <p class="card-meta font-size-14">{timeDeparture}</p>
                                    </div>
                                </div>
                                <div class="flight-time-item landing d-flex">
                                    <div class="flex-shrink-0 mr-2">
                                        {/* <i class="la la-plane"></i> */}
                                    </div>
                                    <div>
                                        <h3 class="card-title font-size-15 font-weight-medium mb-0">Arrival</h3>
                                        <p class="card-meta font-size-14">{timeArrival}</p>
                                    </div>
                                </div>
                            </div>
                            <p class="font-size-14 text-center"><span class="color-text-2 mr-1">Total Time:</span>{dateConverter(timeArrival,timeDeparture)} mins</p>
                        </div>
                        <div class="btn-box text-center">
                            <a  onClick={() => {
                navigate(`/booking/${trip.tripId}`);
            }} class="theme-btn theme-btn-small w-100">View Details</a>
                        </div>
                    </div>
                </div>

    // <div
    //   data-aos="fade-up"
    //   data-aos-duration="3000"
    //   className="singleOffer m-3"
    // >
    //   <Row>
    //     <Col lg={6} xs={24} sm={24}>
    //       <div className="destImage">
    //         <img src={trip.image} />

    //         <span className="discount">30% Off</span>
    //       </div>
    //     </Col>
    //     <Col lg={18} xs={24} sm={24}>
    //       <div className="offerBody">
    //         <div className="price flex">
    //           <h5>
    //             {trip.company.companyName}
    //             <span className="status m-2"> 
    //               <StarFilled />
    //               {trip.company.rating} <span>({(trip.company.feedBacks).length})</span>
    //               {/* ({trip.company.feedback[0].length}) */}
    //             </span>
    //           </h5>
    //           <h5>{price}</h5>
    //           {/* <span className="status">
    //                 {trip.status}
    //               </span> */}
    //         </div>

    //         <div className="amenities flex ">
    //           <div className="singleAmenity flex">
    //             {/*<MdKingBed className="icon"/>*/}
    //             <small>Seat Quantity: {trip.seatQuantity}</small>
    //             {/*<small>Rating: {trip.seatQuantity}</small>*/}
    //           </div>
    //         </div>
    //         <div className="location flex">
    //           <div>
    //             <h4>{timeDeparture}</h4>
    //             <small>
    //               From: <MdLocationOn className="icon" />
    //               {trip.departure}
    //             </small>
    //           </div>
    //           <div>
    //             <h5>
    //               <SwapRightOutlined style={{ width: "30px" }} />
    //             </h5>
    //             <smal>
    //               <SwapRightOutlined style={{ width: "30px" }} />
    //             </smal>
    //           </div>

    //           <div>
    //             <h4>{timeArrival}</h4>
    //             <small>
    //               To: <MdLocationOn className="icon" />
    //               {trip.arrival}
    //             </small>
    //           </div>
    //         </div>

    //         {/* <div className="location flex pt-2">
    //           <span></span>
    //         </div>
    //         <div className="location flex ">
    //           <span>
        
    //             <ArrowDownOutlined />
    //           </span>
    //         </div> */}

    //         <button
    //           className="btn flex"
    //           onClick={() => {
    //             navigate(`/booking/${trip.tripId}`);
    //           }}
    //         >
    //           View Details <BsArrowRightShort className="icon" />
    //         </button>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
}

export default Trip;
