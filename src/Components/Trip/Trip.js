import React, {Component} from 'react';
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import {ArrowDownOutlined} from '@ant-design/icons'
import './trip.css'
import {useNavigate} from "react-router-dom";
function Trip({trip}){
    const navigate = useNavigate();
    const timeArrivalOld    = trip.timeArrival;
    const timeDepartureOld    = trip.timeDeparture;
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
    return (
        <div  data-aos="fade-up" data-aos-duration="3000" className="singleOffer m-3">
            <div className="destImage">
                <img src="assets/banner_img.jpeg"  />

                <span className="discount">
              30% Off
             </span>
            </div>

            <div className="offerBody">
                <div className="price flex">
                    <h4>
                        ${trip.price}
                    </h4>
                    <span className="status">
                    {trip.status}
                  </span>
                </div>

                <div className="amenities flex ">
                    <div className="singleAmenity flex">
                        {/*<MdKingBed className="icon"/>*/}
                        <small>Seat Quantity: {trip.seatQuantity}</small>
                        {/*<small>Rating: {trip.seatQuantity}</small>*/}

                    </div>
                </div>
                <div className="location flex">
                    <span>Time Arrival: {timeArrival}</span>
                </div>
                <div className="location flex">
                <span>Time Departure: {timeDeparture}</span>
            </div>
               <div className="location flex pt-2">
                   From: <MdLocationOn className="icon"/>
                    <span>{trip.departure}</span>
                </div>
                <div className="location flex ">
                    <span> <ArrowDownOutlined /></span>
                </div>

                <div className="location flex ">
                    To:  <MdLocationOn className="icon"/>
                    <span>{trip.arrival}</span>
                </div>

                <button className='btn flex' onClick={()=>{navigate(`/booking/${trip.tripId}`)}}>View Details <BsArrowRightShort className='icon'/></button>

            </div>
        </div>
    );

}

export default Trip;