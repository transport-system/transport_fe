import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import {  useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    
    const[loading,setLoading]=useState(true);
    const validateToken=async ()=>{
        try{
            
            const response = await axios.post('https://reqres.in/api/users/2',{},{
                // headers:{
                //     Authorization:`Bearer ${localStorage.getItem('token')}`,
                // },
            });
            if(true){
              setLoading(false);


            }else{
                setLoading(false);
                navigate('/login')

            }
        }catch(error){
            setLoading(false);
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
      { loading ? <div>loading..</div>: <>{children}</>}
    </div>
  )
}

export default ProtectedRoute