import React from 'react'

function TripBooked({booked}) {
    const TotalPrice = ((booked.totalPrice)).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
  return (
    <div><div class="card">
    <div class="card-body">
      <h5 class="card-title">Booked ID: {booked.id}</h5>
      <p class="card-text">trạng thái : {booked.status}</p>
      <p class="card-text">Ghế đặt : {booked.seatResponse}</p>
      <p class="card-text">totalPrice : {TotalPrice}</p>
      {/* <p class="card-text">TripID : {booked.tripResponse.tripId}</p>
      <p class="card-text">Loại xe : {booked.vehicle.vehicleType}</p> */}

      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    </div>
  </div></div>
  )
}

export default TripBooked