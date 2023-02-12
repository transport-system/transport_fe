import { message, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import tripApi from "../../api/tripApi";
import VehicleForm from "../../Components/VehicleForm";
function AgencyVehicle() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const getTrips = async () => {
    try {
      // dispatch(showLoading());
      const response = await tripApi.getAllTrip();
      console.log(response);

      if (response.data) {
        dispatch(setTrips(response.data.data));
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      message.error(err.message); 
    }
  };

  const columns = [
    { title: "Type", dataIndex: "type" },
    { title: "Total Seat", dataIndex: "from" },
    { title: "To", dataIndex: "to" },
    { title: "Start Date", dataIndex: "date" },
    { title: "Status", dataIndex: "status" },
  ];
  useEffect(() => {
    getTrips();
  });

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
        Add Vehicle
      </button>
    </div>
    <Table className="mt-3 container" columns={columns} dataSource={trips}/>

    {isModalOpen && (
      <VehicleForm
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    )}
  </div>
  )
}

export default AgencyVehicle