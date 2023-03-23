import React from 'react'
import { useNavigate } from 'react-router-dom';
const Logout=()=>{
    localStorage.clear();
    const navigate = useNavigate();
    navigate('/')

}

export default Logout