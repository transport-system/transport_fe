import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import {  useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    const[loading,setLoading]=useState(true);
    const validateToken=()=>{
        try{
            const response= axios.post('https://reqres.in/api/login',{},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`,
                },
            });
            if(response.status){
                setLoading(false);
                navigate('/login')

            }else{
                setLoading(false);
                navigate('/login')

            }
            console.log(response)
        }catch(error){
            setLoading(false);
            navigate('/login')
        }
    }
    
    // useEffect(()=>{
    //     if(localStorage.getItem('token')){
    //         validateToken();

    //     }else{
    //         navigate('/login')
    //     }
    // })
  return (
    <div>
        {loading?<div> Loading... </div> : <>{children}</>}
    </div>
  )
}

export default ProtectedRoute