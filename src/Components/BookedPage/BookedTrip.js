import { Row,Col, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import userApi from '../../api/userApi';
import { HideLoading, ShowLoading } from '../../redux/alertsSlice';
// import Comment from './Comment';
import './booked.css'
import TripBooked from './TripBooked';
function BookedTrip() {
    const dispatch = useDispatch()
    const params =useParams();
    const [listBooked,setListBooked] = useState([])
    const getFeedback = async () => {
        try {
            // dispatch(ShowLoading());
            const response = await userApi.getBooked(localStorage.getItem("userID"));
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
              setListBooked(response.data);

            } else {
                message.error(response.data.message);

            }
        } catch (err) {
            message.error(err.message);

        }
    };
    useEffect(() => {
        getFeedback()
    },[]);
    
  return (
    <div className='container p-4  mt-3 mb-3 card'>
        <h5>Chuyến đi đã Book</h5>
        <div className="pt-5"><Row>
                    {listBooked.map(booked=>(
                        <Col lg={24} xs={24} sm={24}>
                          {/* {booked.id} */}
                          <TripBooked booked={booked}/>
                            {/* <CommentFeedback feedback={feedback}/> */}
                        </Col>
                    ))}
                </Row></div>
    </div>
  )
}

export default BookedTrip