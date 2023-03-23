import React, {useState} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {SiYourtraveldottv} from 'react-icons/si'
import Login from "../../pages/Login";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

  const [active, setActive]  = useState('navBar')
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  
  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)
    const {user}= useSelector(state => state.user);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
  return (
    // <section className='navBarSection'>
    //    <header className={transparent}>
        
    //       <div className="logoDiv">
    //         <a href="#" className="logo flex"><h1><SiYourtraveldottv className='icon' /> FPT</h1></a>
    //       </div>

    //       <div className={active}>
    //         <ul onClick={removeNav} className="navLists flex">
    //           <li className="navItem">
    //             <a href="/" className="navLink">Home</a>
    //           </li>
    //           <li className="navItem">
    //             <a href="http://localhost:3001/login" className="navLink">Manager</a>
    //           </li>

    //             {user == null ? <div className="headerBtns flex">
    //             <li className="navItem">
    //             <a href="#" className="navLink">Contact </a>
    //           </li>
    //           <li className="navItem">
    //             <a href="#" className="navLink">Blog</a>
    //           </li>
    //                 <button className="btn loginBtn" onClick={showModal}>
    //                     <a href="#">Login</a>
    //                 </button>
    //                 <button className="btn">
    //                     <a href="#" onClick={()=>navigate("/register")}>Sign Up</a>
    //                 </button>
    //             </div>:
    //              <div className="headerBtns flex">
    //                             <li className="navItem">
    //             <a href="#" className="navLink" onClick={()=>navigate("/booked")}>Booked</a>
    //           </li>
    //           <li className="navItem">
    //             <a href="#" className="navLink" onClick={()=>{localStorage.clear();        window.location.reload(false);}}>Log Out</a>
    //           </li>
    //                 <button className="btn loginBtn" onClick={(()=>{navigate("/profile")})}>
    //                 <a href="#">Hello, {user.firstname}</a>
    //             </button></div>}

    //         </ul>
    //         <div onClick={removeNav} className="closeNavbar">
    //             <AiFillCloseCircle className='icon'/>
    //           </div>
    //       </div>

    //       <div onClick={showNav} className="toggleNavbar">
    //         <TbGridDots className='icon'/>
    //       </div>
    //    </header>
 
    // </section>
    <header class="header-area">
    <div class="header-top-bar padding-right-100px padding-left-100px">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="header-top-content">
              <div class="header-left">
                <ul class="list-items">
                  <li>
                    <a href="#"
                      ><i class="la la-phone mr-1">
                        </i>(+84) 338148702 </a>
                  </li>
                  <li>
                    <a href="#"
                      ><i class="la la-envelope mr-1">
                        </i>dtgkhang99@gmail.com
                        </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="header-top-content">
              <div
                class="header-right d-flex align-items-center justify-content-end"
              >
 { localStorage.getItem("userID")  ?  <div class="header-right-action">
                  <a
                    href="#"
                    class="theme-btn theme-btn-small theme-btn-transparent mr-1"
                    data-toggle="modal"
                    data-target="#signupPopupForm"
                    onClick={()=>navigate("/profile")}
                    >Hello, {user.firstname}</a >
                    <button
                    href="#"
                    class="theme-btn theme-btn-small"
                    data-toggle="modal"
                    data-target="#loginPopupForm"
                    onClick={()=>{localStorage.clear()
                      window.location.reload(false);}
                    }
                    >Log out</button >
                </div> 
                
                : <div class="header-right-action">
                  <a
                    onClick={()=>{navigate("/register")}}
                    class="theme-btn theme-btn-small theme-btn-transparent mr-1"
                    data-toggle="modal"
                    data-target="#signupPopupForm"
                    
                    >Sign Up</a >
                  <button
                    href="#"
                    class="theme-btn theme-btn-small"
                    data-toggle="modal"
                    data-target="#loginPopupForm"
                    onClick={showModal}
                    >Login</button >
                </div>  }
                
              
                   {isModalOpen && <Login
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-menu-wrapper padding-right-100px padding-left-100px">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="menu-wrapper">
              <a href="#" class="down-button"
                ><i class="la la-angle-down"></i></a>
              <div class="logo">
                <a href="#"
                  >
                    SWP BUS</a>
                <div class="menu-toggler">
                  <i class="la la-bars"></i>
                  <i class="la la-times"></i>
                </div>
                {/* <!-- end menu-toggler --> */}
              </div>
              {/* <!-- end logo --> */}
              <div class="main-menu-content">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Home <i class="la la-angle-down"></i></a>
                      <ul class="dropdown-menu-item">
                        <li><a href="/">Home - main</a></li>
                      </ul>
                    </li>
                   
                  </ul>
                </nav>
              </div>
              <div class="nav-btn">
                <a href="become-local-expert.html" class="theme-btn"
                  >Become Local Agency</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </header>
  )
}

export default Navbar