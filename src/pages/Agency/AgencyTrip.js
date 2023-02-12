import { Button, message, Table } from "antd";
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
    { title: "ID", dataIndex: "id" },
    { title: "Description", dataIndex: "description" },
    { title: "Price", dataIndex: "price" },
    { title: "Time Arrival", dataIndex: "time_arrival" },
    { title: "Time Departure", dataIndex: "time_departure" },
    { title: "City arrival", dataIndex: "city_arrival" },
    { title: "City departure", dataIndex: "city_departure" },
    { title: "Refund time", dataIndex: "time_return" },
    { title: "Status", dataIndex: "status" }, {
      title: 'Action',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
       <Button onClick={()=> console.log(record)}>
         {"Disable"}
       </Button>
      ),
    },
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
        <h4>Trip Management</h4>
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