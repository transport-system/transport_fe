import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout=()=>{
    localStorage.clear();
}

export default Logout