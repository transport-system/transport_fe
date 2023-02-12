import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { SetUser } from '../redux/userSlice';
import userApi from '../api/userApi'
import Defaultlayout from './Defaultlayout'
function ProtectedRoute({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {user}= useSelector(state => state.user);
    const[loading,setLoading]=useState(true);
    const validateToken=async ()=>{
        try{            
            const response = await userApi.getUser(localStorage.getItem("userID"))
            if(response.data.username){
              setLoading(false)
              dispatch(SetUser(response.data))   
            }else{
              setLoading(false)
                localStorage.clear();
                navigate('/login')

            }
        }catch(error){
          setLoading(false)

          localStorage.clear();
            navigate('/login')
        }
    }
    
    useEffect(()=>{
        if(localStorage.getItem('token')){
            validateToken();

        }else{
            navigate('/login')
        }
    })
  return (
    <div>
      { !loading && <Defaultlayout>{children}</Defaultlayout>}
    </div>
  )
}

export default ProtectedRoute