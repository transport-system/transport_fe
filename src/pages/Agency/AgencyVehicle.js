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
  const handleOk = async (values) => {
    try {
      // dispatch(showLoading());
      const response = await tripApi.getAllTrip(values);
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
    { title: "ID", dataIndex: "vehicle_id" },
    { title: "License", dataIndex: "license_plates" },
    { title: "Type", dataIndex: "vehicle_type_name" },
    { title: "Total seat", dataIndex: "total_seat" },
    { title: "Status", dataIndex: "status" },
    { title: "Action", dataIndex: "status" },
  ];
  useEffect(() => {
    getTrips();
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
    <div className="container d-flex justify-content-between mt-5">
      <h4>Vehicle Management</h4>
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