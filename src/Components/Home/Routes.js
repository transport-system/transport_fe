import React, { useEffect, useState } from 'react'
import bookApi from '../../api/bookApi';
import { message } from 'antd';

function Routes() {
    const [routes, setRoutes] = useState([]);

    const getRoutes = async () => {
        try {
          const response = await bookApi.getRoutes();
      
          console.log(response.data);
      
          if (response.data) {
            setRoutes(response.data);
          } else {
            message.error(response.data.message);
          }
        } catch (err) {
          // message.error(err.message);
        }
      };
      useEffect(() => {
        getRoutes();
    //   console.log("Booked ", vehicles.status);
    }, []);
  return (
    <div className="row padding-top-60px">

{ routes.map((route,index)=> 
index <3 &&  (<div className="col-lg-4 responsive-column">
     <div className="card-item flight-card">
       <div className="card-img">
         <a href="flight-single.html" className="d-block">
           <img height={210} src="https://reviewvilla.vn/wp-content/uploads/2022/06/dia-diem-du-lich-Vung-Tau-15-1024x523.jpg" alt="destination-img" />
           <span className="badge">{route.cityDeparture}</span>
         </a>
       </div>
       <div className="card-body">
         <img src="images/american-airline.png" alt="" className="flight-logo" />
         <h3 className="card-title">
           <a href="flight-single.html">{route.cityDeparture} to {route.cityArrival}</a>
         </h3>
         <p className="card-meta">One way </p>
         <div className="card-price d-flex align-items-center justify-content-between">
           <p>
             <span className="price__from">From</span>
             <span className="price__num">100.000VNĐ</span>
           </p>
           <a href={`https://swp-demo-main.vercel.app/booking?departure=${route.cityDeparture}&arrival=${route.cityArrival}&date=`} className="btn-text">Read details<i className="la la-angle-right" /></a>
         </div>
       </div>
     </div>
     {/* end card-item */}
   </div>) 
   )
    
}
   
            </div>)
}

export default Routes