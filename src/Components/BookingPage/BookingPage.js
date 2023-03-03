import React, {Component, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {HideLoading, ShowLoading} from "../../redux/alertsSlice";
import tripApi from "../../api/tripApi";
import {Col, message, Row} from "antd";
import {useParams} from "react-router-dom";

function BookingPage(){
    const params =useParams();
    const dispatch = useDispatch();
    const [Trip, setTrip] = useState([]);

    const getTrip = async () => {
        try {
            dispatch(ShowLoading());
            const response = await tripApi.getTripById(params.id);
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
                setTrip(response.data);

            } else {
                message.error(response.data.message);

            }
        } catch (err) {
            message.error(err.message);

        }
    };
    useEffect(() => {
        getTrip();
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
            <Row>
                <Col lg={12} xs={24} sm={24} className="card m-5 p-5">
                    <img className="card-img" src="../assets/banner_img.jpeg"  />

                    <div className="card-body">
                        <h1 className="card-title">TripID: {Trip.id}</h1>

                        <div>Time: {timeDeparture} -  {timeArrival}</div>
                        <div>Quantity: {Trip.seatQuantity}</div>
                    </div>


                </Col>
                <Col lg={12} xs={24} sm={24}>
                </Col>
            </Row>
        </div>
    );

}

export default BookingPage;