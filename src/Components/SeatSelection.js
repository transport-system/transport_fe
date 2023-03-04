import { Col, Row } from 'antd';
import React from 'react'

export default function SeatSelection({selectedSeats,setSelectedSeats,Trip,Seat}) {
    const capacity = Trip.seatQuantity;
    // seatClass= "gray";

  return (
    <div>
        <div className='bus-container'>
            <Row> 
               
                {Seat.map(Seat=>{
                        const [seatClass,setSeatClass] =["grey"];
                    // {Seat.status === "ACTIVE" ?  setSeatClass="green" : setSeatClass="red"}
                    return(

                        <Col span={5}>

                        <div className={`${Seat.status}`}>
            
                            {Seat.seatNumber}
                        </div>
                    </Col>
                    )})}
                {/* {Array.from(Array(capacity).keys()).map((seat)=>(
                    <Col span={6}>
                        <div className='seat'>
                            {seat+1}
                        </div>
                    </Col>
                ))} */}
            </Row>
        </div>
    </div>
  )
}
