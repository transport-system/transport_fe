import React, {useEffect} from 'react'
import DefaultLayout from "./Defaultlayout";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {HideLoading, ShowLoading} from "../redux/alertsSlice";
import userApi from "../api/userApi";
import {SetUser} from "../redux/userSlice";
function PublicRoute({children}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user}= useSelector(state => state.user);
    const {loading} = useSelector((state)=>state.alerts)
    const validateToken=async ()=>{
        try{
            dispatch(ShowLoading());
            const response = await userApi.getUser(localStorage.getItem("userID"))

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
      <DefaultLayout>{children}</DefaultLayout>
          
          
    </div>
    
  )
}

export default PublicRoute