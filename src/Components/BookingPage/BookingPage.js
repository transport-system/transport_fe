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
<section className='container pb-5 bookingP'>
            <Row className=" " gutter={[16, 24]}>
                <Col lg={12} xs={24} sm={24} className="card">
                    <img className="card-img" src="../assets/banner_img.jpeg"  />
                    {Trip.companyName} - {Trip.rating}
                    <div className="card-body p-2 m-2">
                        <h1 className="card-title">TripID: {Trip.tripId}</h1>

                        <div>Time: {timeDeparture} -  {timeArrival}</div>
                        <div>Quantity: {Trip.seatQuantity}</div>
                        <h5>Ghế đã chọn: {selectedSeats.join(", ")}</h5>
                    </div>
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