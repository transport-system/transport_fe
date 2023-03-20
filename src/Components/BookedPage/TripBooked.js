import React from 'react'
import { useNavigate } from 'react-router-dom';

function TripBooked({booked}) {
    const TotalPrice = ((booked.totalPrice)).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      const tranfer=(time)=>{
        const newTime = new Date(time).toLocaleString("en-US", {
             month: "short",
             day: "2-digit",
             year: "numeric",
             hour: "2-digit",
             minute: "2-digit",
           });
           return newTime;
       }
       const navigate = useNavigate();
  return (
    <tr>
    <th scope="row">#{booked.id}</th>
    <td>
      <div className="table-content">
        <h3 className="title">{booked.tripResponse ? booked.tripResponse.departure + "-" + booked.tripResponse.arrival  :''}</h3>
      </div>
    </td>
    <td>{booked.tripResponse ? booked.tripResponse.vehicle.vehicleType :''}</td>
    <td>{booked.createBookingTime ?  tranfer(booked.createBookingTime) : ''}</td>
    <td>{booked.tripResponse ?  tranfer(booked.tripResponse.timeDeparture) : ''}</td>
    <td>{TotalPrice}</td>
    {        booked.status      ==="DONE" ?                     <td><span className="badge badge-success py-1 px-2">{booked.status}</span></td>
:             <td><span class="badge badge-warning py-1 px-2">{booked.status}</span></td>
}
    <td>
      <div className="table-content">
        <button className="theme-btn theme-btn-small" onClick={()=>navigate(`/paymentcomplete/${booked.id}`)}>View Detail</button>
      </div>
    </td>
  </tr>
  //   <div><div class="card p-2 m-2">
  //   <div class="card-body">
  //     <h5 class="card-title">Booked ID: {booked.id}</h5>
  //     <p class="card-text">trạng thái : {booked.status}</p>
  //     {/* <p class="card-text">Ghế đặt : {booked.seatResponse}</p> */}
  //     <p class="card-text">Phương thức thanh toán : {booked.paymentMethod}</p>
  //     <p class="card-text">totalPrice : {TotalPrice}</p>
  //     {/* <p class="card-text">TripID : {booked.tripResponse.tripId}</p>
  //     <p class="card-text">Loại xe : {booked.vehicle.vehicleType}</p> */}

  //     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  //   </div>
  // </div></div>
  )
}

export default TripBooked