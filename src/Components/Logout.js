import React from 'react'
import { useNavigate } from 'react-router-dom';
const Logout=()=>{
    localStorage.clear();
    window.location.reload(false);

}

export default Logout