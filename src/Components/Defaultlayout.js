import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Defaultlayout({ children }) {
  const {user} = useSelector(state=>state.user)
  const navigate = useNavigate();
  const userMenu = [  { name: "home", path: "/", icon: "fa-regular fa-house" },
  {
    name: "profile",
    path: "/profile",
    icon: "fa-regular fa-car-side",
  },{
    name: "booking",
    path: "/booking",
    icon: "fa-regular fa-car-side",
  }];
  const agencyMenu = [
    { name: "home", path: "/agency", icon: "fa-regular fa-house" },
    {
      name: "vehicle",
      path: "/agency/vehicle",
      icon: "fa-regular fa-car-side",
    },{
      name: `Hello, ${user.firstName}`,
      path: "/profile",
      icon: "fa-regular fa-car-side",
    }
  ];
  const userSidebar = [{name:"Profile Info",path:"/user/profile"},{name:"Booked Detail",path:"/user/booked"}]
  const agencySidebar = [{name:"Add Vehicle"}]
  const menuToRender = agencyMenu;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    SWP391
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
        {menuToRender.map((item, index) => {
          return (
            <div>
                    <span className="nav-link"
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.name}
              </span>

              </div>  
          );
        })}
            
            </div>
                  </div>
        </div>
      </nav>
       <div className="sidebar">

      </div>      

      <div className="content">{children}</div>
    </div>
  );
}

export default Defaultlayout;
