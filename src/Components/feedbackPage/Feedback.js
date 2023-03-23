import { Row,Col, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import tripApi from '../../api/tripApi';
import { HideLoading, ShowLoading } from '../../redux/alertsSlice';
import CommentFeedback from './Comment';
import PaypalPay from '../PaypalPay';
// import Comment from './Comment';

function Feedback({companyId}) {
    const dispatch = useDispatch()
    const params =useParams();
    const [listFeedback,setListfeedback] = useState([])
    const getFeedback = async () => {
        try {
            // dispatch(ShowLoading());
            const response = await tripApi.getFeedback(companyId);
            dispatch(HideLoading());
            console.log(response.data);

            if (response.data) {
                setListfeedback(response.data.list_trip);

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
        <h5>Feedback</h5>
        <div className="pt-5"><Row>
                    {listFeedback.map(feedback=>(
                        <Col lg={24} xs={24} sm={24}>
                            <CommentFeedback feedback={feedback}/>
{/* <PaypalPay/> */}
                        </Col>
                    ))}
                </Row></div>
    </div>
  )
}

export default Feedback