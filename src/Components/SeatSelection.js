import { Col, Row, message } from 'antd';
import React from 'react'

export default function SeatSelection({selectedSeats,setSelectedSeats,Trip,Seat}) {
    const capacity = Trip.seatQuantity;
    // seatClass= "gray";
    const selectOrUnselectSeats=(seatNumber)=>{
        console.log(seatNumber)
        if(selectedSeats.length <6){
            if(selectedSeats.includes(seatNumber)){
                setSelectedSeats(selectedSeats.filter((seat)=>seat!==seatNumber))
            }else{
                setSelectedSeats([...selectedSeats,seatNumber])
            }
        }else{
            message.error("Please choose less than 6 seats")
            setSelectedSeats(selectedSeats.filter((seat)=>seat!==seatNumber))

        }
      
    }

  return (
    <div>
        <div className='bus-container'>
            <Row gutter={[20,25]}> 
               
                {Seat.map(Seat=>{
                        // const [seatClass,setSeatClass] =["grey"];
                    // {Seat.status === "ACTIVE" ?  setSeatClass="" : setSeatClass="red"}
                    let seatClass =''
                    if(selectedSeats.includes(Seat.seatNumber)){
                        seatClass = 'selected-seat'
                    }
                    return(

                        <Col span={capacity === 9 ? 12 : 6}>

                        <div className={`seat ${Seat.status} ${seatClass}`} onClick={()=>{selectOrUnselectSeats(Seat.seatNumber)}}>
            
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
