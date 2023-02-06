import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userApi from '../api/userApi'
import { Form, message } from "antd";

function Profile() {
    const[email,setEmail] = useState();
    const[name,setName] = useState();
    const[id,setId] = useState();
    const[ava,setAva] = useState();

    useEffect(()=>{
        const fetchUser = async ()=>{
            const userInfo = await userApi.getUser(2);
            console.log(userInfo.data.data)
            setEmail(userInfo.data.data.email)
            setName(userInfo.data.data.first_name)
            setId(userInfo.data.data.id)
            setAva(userInfo.data.data.avatar)

        }

        fetchUser();
        
    },[])

    // useEffect(()=>{
    //     axios.get('https://reqres.in/api/users/2').then(res=>{
    //         console.log(res.data.data)
    //         setUser(res.data.data)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // },[])
  return (
    <div>


       
<div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-500 card p-5">
        
        <img src={ava}/>
        <Form layout="vertical" >
        <Form.Item label="id" name='email' valuePropName='id'  >
            <input type="text" value={id} />
          </Form.Item>
          <Form.Item label="Email" name='email' valuePropName='name'  >
            <input type="text" value={email} />
          </Form.Item>
          <Form.Item label="name" name='name' valuePropName=''>
            <input type="text" value={name} />
          </Form.Item>
          <div className="d-flex justify-content-between align-items-center">
            {/* <Link to="/register">Click here to Register!</Link> */}
          <button className="secondary-btn" type="submit">Save</button>
        </div>  
        </Form>


      </div>
    </div>
     
    </div>
  )
}

export default Profile