import axios from "axios";
import React, { useEffect, useState } from "react";
import userApi from "../api/userApi";
import { Form, message } from "antd";
import { Descriptions } from "antd";
import { useSelector } from "react-redux";
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import ProfileForm from "../Components/ProfileForm";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="container mt-5">
        <div className=" card p-5">
          {/* <img src={ava} /> */}
          <Avatar className="mb-5"
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />
          <Descriptions title="User Info">

            <Descriptions.Item label="UserName">
              {user.username}
            </Descriptions.Item>
            <Descriptions.Item label="Telephone">
              {user.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Name ">
              {user.firstName + " " + user.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
              123 La Xuan Oai, Quan 9, TP.Thu Duc
            </Descriptions.Item>
            <Descriptions.Item label="Email ">{user.email}</Descriptions.Item>
            <Descriptions.Item label="BirhtDate ">
              {user.date_of_birth}
            </Descriptions.Item>
            <Descriptions.Item label="Gender ">{user.gender}</Descriptions.Item>
          </Descriptions>
          <div className="container right">
          <button className="btn btn-primary" onClick={showModal}>
        Update Profile
      </button>
          </div>

          {isModalOpen && (
      <ProfileForm
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
