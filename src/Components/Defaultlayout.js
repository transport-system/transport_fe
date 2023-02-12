import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Defaultlayout({ children }) {
  const {user} = useSelector(state=>state.user)
  const navigate = useNavigate();
  const userMenu = [  { name: "home", path: "/", icon: "fa-regular fa-house" },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-regular fa-car-side",
  },{
    name: "Booking",
    path: "/booking",
    icon: "fa-regular fa-car-side",
  }];
  const agencyMenu = [
    { name: "Home", path: "/agency", icon: "fa-regular fa-house" },
    {
      name: "Vehicle",
      path: "/agency/vehicle",
      icon: "fa-regular fa-car-side",
    },{
      name: "Trip",
      path: "/agency/trip",
      icon: "fa-regular fa-car-side",
    },{
      name: `Hello, ${user.firstName}`,
      path: "/profile",
      icon: "fa-regular fa-car-side",
    }
  ];
  const userSidebar = [{name:"Profile Info",path:"/user/profile"},{name:"Booked Detail",path:"/user/booked"}]
  const agencySidebar = [{name:"Add Vehicle"}]
  //role nav
  const menuToRender = user.gender == "female" ? agencyMenu : userMenu;
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
            <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/logout">Log out</a></li>
            <li><a class="dropdown-item" href="#">manager</a></li>
            <li><a class="dropdown-item" href="#">...</a></li>
          </ul>
        </div>
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
