import React, { Children, useState } from 'react'
import bookApi from '../../../api/bookApi'
import {message,Input, Button, Radio, Form,Row, Modal} from 'antd'
import { BsNutFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../../redux/alertsSlice'

function ModalOrder({isModalOpen,handleOk,handleCancel,selectedSeats,trip,Children}) {

  return (
    <Modal  width={600} title="Thanh toán" footer={null}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        {Children}
</Modal>
  )
}

export default ModalOrder