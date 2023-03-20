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
            dispatch(ShowLoading());
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
    <div className="dashboard-content-wrap">
    <div className="dashboard-bread dashboard--bread">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="breadcrumb-content">
              <div className="section-heading">
                <h2 className="sec__title font-size-30 text-white">My Booking</h2>
              </div>
            </div>{/* end breadcrumb-content */}
          </div>{/* end col-lg-6 */}
          <div className="col-lg-6">
            <div className="breadcrumb-list text-right">
              <ul className="list-items">
                <li><a href="index.html" className="text-white">Home</a></li>
                <li>Dashboard</li>
                <li>My Booking</li>
              </ul>
            </div>{/* end breadcrumb-list */}
          </div>{/* end col-lg-6 */}
        </div>{/* end row */}
      </div>
    </div>{/* end dashboard-bread */}
    <div className="dashboard-main-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-box">
              <div className="form-title-wrap">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="title">Booking Results</h3>
                  </div>
                  <span>Total Bookings <strong className="color-text">{listBooked.length}</strong></span>
                </div>
              </div>
              <div className="form-content">
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Departure Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                                    {listBooked.map(booked=>(
                          <TripBooked booked={booked}/>
                  
    ))}

              
                    </tbody>
                  </table>
                </div>
              </div>
            </div>{/* end form-box */}
          </div>{/* end col-lg-12 */}
        </div>{/* end row */}

        <div className="border-top mt-5" />

      </div>{/* end container-fluid */}
    </div>{/* end dashboard-main-content */}
  </div>
    // <div className='container booked p-4  mt-3  card'>
    //     <h5>Chuyến đi đã Book</h5>
    //     <div className="pt-5"><Row>
    //                 {listBooked.map(booked=>(
    //                     <Col lg={24} xs={24} sm={24}>
    //                       {/* {booked.id} */}
    //                       <TripBooked booked={booked}/>
    //                         {/* <CommentFeedback feedback={feedback}/> */}
    //                     </Col>
    //                 ))}
    //             </Row></div>
    // </div>
  )
}

export default BookedTrip