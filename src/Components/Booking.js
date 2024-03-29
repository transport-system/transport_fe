import React, {  useRef, useEffect, useState } from "react";
import tripApi from "../api/tripApi";
import {useDispatch} from "react-redux";
import {HideLoading, ShowLoading} from "../redux/alertsSlice";
import {message,Row,Col} from "antd";
import Trip from "./Trip/Trip";
import Home from "./Home/Home";

function Booking({tripSearch}){
    const dispatch = useDispatch();
    const [Trips, setTrips] = useState([]);
    console.log("Trip nè:",tripSearch)
    const getAllTrip = async () => {
        try {
            dispatch(ShowLoading());
                console.log(1)
            const response = await tripApi.getAllTrip({Headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}});
            dispatch(HideLoading());
            console.log(response.data.list_trip);

            if (response.data) {
                setTrips(response.data.list_trip);


            } else {
                message.error(response.data.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    };
    useEffect(() => {
        getAllTrip();
    },[]);
    return (<section>
          <div className="container mt-5">
            <div>
                {tripSearch == null ?  
                <div>sasa
                    {/* All Trip {Trips.company}<Row>
                    {Trips.map(trip=>(
                        <Col lg={12} xs={24} sm={24}>
                            <Trip trip={trip}/>
                        </Col>
                    ))}
                </Row> */}
                </div> : <div className="pt-5"><Row>
                    {tripSearch.map(trip=>(
                        <Col lg={24} xs={24} sm={24}>
                            <Trip trip={trip}/>
                        </Col>
                    ))}
                </Row></div>

                }

            </div>

        </div>
    </section>
      
    );

}

export default Booking;