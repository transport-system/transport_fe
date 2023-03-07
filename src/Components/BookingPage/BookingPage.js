import React, {Component, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {HideLoading, ShowLoading} from "../../redux/alertsSlice";
import tripApi from "../../api/tripApi";
import {Col, message, Row} from "antd";
import {useParams} from "react-router-dom"; 
import SeatSelection from '../SeatSelection';
 import "./bookingPage.css"
function BookingPage(){
    const params =useParams();
    const dispatch = useDispatch();
    const [Trip, setTrip] = useState([]);
    const [Seats, setSeats] = useState([]);

    const [selectedSeats,setSelectedSeats] =useState([]);

    const getTrip = async () => {
        try {
            dispatch(ShowLoading());
            const response = await tripApi.getTripById(params.id);
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
                dispatch(setTrip(response.data));

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
            const response = await tripApi.getSeatById(params.id);
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
                setSeats(response.data.data);

            } else {
                message.error(response.data.message);

            }
        } catch (err) {
            message.error(err.message);

        }
    };
    useEffect(() => {
        getTrip();
        getSeatById()
    },[]);
    
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
    return (
        <div className="container">
            <Row className=" m-5 p-5">
                <Col lg={12} xs={12} sm={12} className="card">
                    <img className="card-img" src="../assets/banner_img.jpeg"  />

                    <div className="card-body ">
                        <h1 className="card-title">TripID: {Trip.id}</h1>

                        <div>Time: {timeDeparture} -  {timeArrival}</div>
                        <div>Quantity: {Trip.seatQuantity}</div>
                        <h4>Ghế đã chọn: {selectedSeats.join(", ")}</h4>
                    <h3>Total: {Trip.price*selectedSeats.length}</h3>
                   {/* { Trip.company.companyName} */}
                    </div>
                    
                </Col>
                <Col lg={12} xs={12} sm={12} className='align-items-center'>
                <SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} Trip={Trip} Seat={Seats}/>

                </Col>
            </Row>
        </div>
    );

}

export default BookingPage;