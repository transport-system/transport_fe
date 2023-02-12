import { message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TripForm from "../../Components/TripForm";
import axios from "axios";
import tripApi from "../../api/tripApi";

function AgencyTrip() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const[loading,setLoading]=useState(true);

  const getTrips = async () => {
    try {
      // dispatch(showLoading());
      const response = await tripApi.getAllTrip();
      console.log(response);

      if (response.data) {
        setLoading(false)
        setTrips(response.data.products);
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      message.error(err.message); 
    }
  };
    
  const columns = [
    { title: "Type", dataIndex: "brand" },
    { title: "From", dataIndex: "from" },
    { title: "To", dataIndex: "to" },
    { title: "Start Date", dataIndex: "date" },
    { title: "Status", dataIndex: "status" },
  ];
  useEffect(() => {
    getTrips();
    console.log(trips)
  },[]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="container d-flex justify-content-between mt-5">
        <div></div>
        <button className="btn btn-primary" onClick={showModal}>
          Add Trip
        </button>
      </div>
      <Table className="mt-3 container" columns={columns} dataSource={trips}/>

      {isModalOpen && (
        <TripForm
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default AgencyTrip;
