import React, {useState} from 'react'
import './navbar.css'
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
    <section className='navBarSection'>
       <header className={transparent}>
        
          <div className="logoDiv">
            <a href="#" className="logo flex"><h1><SiYourtraveldottv className='icon' /> FPT</h1></a>
          </div>

          <div className={active}>
            <ul onClick={removeNav} className="navLists flex">
              <li className="navItem">
                <a href="/" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="http://localhost:3001/login" className="navLink">Manager</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Blog</a>
              </li>
                {user == null ? <div className="headerBtns flex">
                    <button className="btn loginBtn" onClick={showModal}>
                        <a href="#">Login</a>
                    </button>
                    <button className="btn">
                        <a href="#">Sign Up</a>
                    </button>
                </div>: <div className="headerBtns flex">
                    <button className="btn loginBtn" onClick={(()=>{navigate("/profile")})}>
                    <a href="#">Hello, {user.firstname}</a>
                </button></div>}

            </ul>
            <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
              </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
          </div>
       </header>
        {isModalOpen && <Login
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}/>}
    </section>
  )
}

export default Navbar