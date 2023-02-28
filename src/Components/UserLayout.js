import React  from 'react';

import { useState } from 'react';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "./globalNav/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import {Layout} from "antd";

function UserLayout ({children}) {
    // const {user}= useSelector(state => state.user);

    return (
        <div className="bg-dark">
            <div style={{height:"90px"}} className="activeHeader">
                <Navbar />
            </div>
            <Layout className="pt-5">
                <div>{children}</div>

            </Layout>
            <Footer/>
        </div>


    );
};
export default UserLayout;