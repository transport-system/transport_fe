import React, {useEffect} from 'react'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
  
 const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

   return (
    <div class="row">
    <div class="col-md-12">
        <div class="copy-right">
            <p class="copy__desc">
                Copyright ©2023 SWP391 FPT. Made with
                <span class="la la-heart-o"></span> by <a href="https://techydevs.com">SWP.</a>
            </p>
            <ul class="condition-links">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
        </div>
    </div>
</div>
   )
 }
 
 export default Footer