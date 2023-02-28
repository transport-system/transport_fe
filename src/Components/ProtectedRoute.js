import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { SetUser } from '../redux/userSlice';
import userApi from '../api/userApi'
import Defaultlayout from './Defaultlayout'
import UserLayout from "./UserLayout";
import {HideLoading, ShowLoading} from "../redux/alertsSlice";
function ProtectedRoute({children}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {user}= useSelector(state => state.user);
    const[loading,setLoading]=useState(true);
    const validateToken=async ()=>{
        try{
            dispatch(ShowLoading());
            console.log(2)

            const response = await userApi.getUser(localStorage.getItem("userID"),
            {headers:{Authorization: `Bearer {${localStorage.getItem("token")}}`}}
            )

            console.log(response)
            dispatch(HideLoading());
            if(response.data.data.id){
                dispatch(SetUser(response.data.data))
                console.log(response)
            }else{
                localStorage.clear();

            }
        }catch(error){

            localStorage.clear();
        }
    }

    useEffect(()=>{
            validateToken();


    },[])
    return (
        <div>
           <UserLayout>{children}</UserLayout>
        </div>
    )
}

export default ProtectedRoute