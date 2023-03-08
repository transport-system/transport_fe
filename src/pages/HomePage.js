import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import '../resourses/global.css'
import Popular from "../Components/Popular/Popular";
import Home from '../Components/Home/Home';
function HomePage() {

    return (
    
    <div>
        {/* <Home/> */}
        <Popular/>
    </div>
  )
}

export default HomePage