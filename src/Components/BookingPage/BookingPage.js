import React, {Component, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {HideLoading, ShowLoading} from "../../redux/alertsSlice";
import tripApi from "../../api/tripApi";
import {Button, Col, message, Row} from "antd";
import {useNavigate, useParams} from "react-router-dom"; 
import SeatSelection from '../SeatSelection';
 import "./bookingPage.css"
import Order from './orderForm/Order';
import ModalOrder from './orderForm/ModalOrder';
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
            const response = await tripApi.getSeatById(4);
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
    const [error, setError] = useState(false);
    const TotalPrice = (Trip.price*selectedSeats.length).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });

    //order
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
<section className='container'>
            <Row className=" ">
                <Col lg={12} xs={24} sm={24} className="card">
                    <img className="card-img" src="../assets/banner_img.jpeg"  />
                    {Trip.companyName}
                    <div className="card-body ">
                        <h1 className="card-title">TripID: {Trip.tripId}</h1>

                        <div>Time: {timeDeparture} -  {timeArrival}</div>
                        <div>Quantity: {Trip.seatQuantity}</div>
                        <h4>Ghế đã chọn: {selectedSeats.join(", ")}</h4>
                    <h3>Total: {TotalPrice}</h3>
                    </div>
                    <Button onClick={showModal}>Book now</Button>
                </Col>
                <Col lg={12} xs={24} sm={24} className='align-items-center'>
                <SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} Trip={Trip} Seat={Seats}/>

                </Col>
            </Row>
            <ModalOrder isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel} selectedSeats={selectedSeats} trip={Trip}
          ><Order/></ModalOrder>
        </section>
</div>
        
    );

}

export default BookingPage;