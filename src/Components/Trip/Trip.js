import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import {
  ArrowDownOutlined,
  SwapRightOutlined,
  StarFilled,
} from "@ant-design/icons";
import "./trip.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { width } from "@mui/system";
function Trip({ trip }) {
  const navigate = useNavigate();
  const timeArrivalOld = trip.timeArrival;
  const timeDepartureOld = trip.timeDeparture;
  const timeDeparture = new Date(timeDepartureOld).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const timeArrival = new Date(timeArrivalOld).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const price = trip.price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="singleOffer m-3"
    >
      <Row>
        <Col lg={6} xs={24} sm={24}>
          <div className="destImage">
            <img src={trip.image} />

            <span className="discount">30% Off</span>
          </div>
        </Col>
        <Col lg={18} xs={24} sm={24}>
          <div className="offerBody">
            <div className="price flex">
              <h5>
                {trip.company.companyName}
                <span className="status">
                  <StarFilled />
                  {trip.company.rating}
                  {/* ({trip.company.feedback[0].length}) */}
                </span>
              </h5>
              <h5>{price}</h5>
              {/* <span className="status">
                    {trip.status}
                  </span> */}
            </div>

            <div className="amenities flex ">
              <div className="singleAmenity flex">
                {/*<MdKingBed className="icon"/>*/}
                <small>Seat Quantity: {trip.seatQuantity}</small>
                {/*<small>Rating: {trip.seatQuantity}</small>*/}
              </div>
            </div>
            <div className="location flex">
              <div>
                <h4>{timeDeparture}</h4>
                <small>
                  From: <MdLocationOn className="icon" />
                  {trip.departure}
                </small>
              </div>
              <div>
                <h5>
                  <SwapRightOutlined style={{ width: "30px" }} />
                </h5>
                <smal>
                  <SwapRightOutlined style={{ width: "30px" }} />
                </smal>
              </div>

              <div>
                <h4>{timeArrival}</h4>
                <small>
                  To: <MdLocationOn className="icon" />
                  {trip.arrival}
                </small>
              </div>
            </div>

            {/* <div className="location flex pt-2">
              <span></span>
            </div>
            <div className="location flex ">
              <span>
        
                <ArrowDownOutlined />
              </span>
            </div> */}

            <button
              className="btn flex"
              onClick={() => {
                navigate(`/booking/${trip.tripId}`);
              }}
            >
              View Details <BsArrowRightShort className="icon" />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Trip;
