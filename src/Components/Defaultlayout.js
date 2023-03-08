import React  from 'react';

import { useState } from 'react';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "./globalNav/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Popular from './Popular/Popular';

function DefaultLayout ({children}) {
    const {user}= useSelector(state => state.user);



    return (
<div>
    {/* <video autoPlay loop muted >
        <source type="video/mp4" src="assets/fbus.mp4"/>
            <source type="video/webm" src="https://player.vimeo.com/video/364964523?title=0&portrait=0&byline=0&autoplay=1&muted=true"/>
    </video> */}
    <Navbar/>
    <Home/>
    <div>{children}</div>
    <Footer/>
</div>


    );
};
export default DefaultLayout;