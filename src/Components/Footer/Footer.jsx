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
    <section className="footer-area section-bg padding-top-40px padding-bottom-30px">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className="term-box footer-item">
            <ul className="list-items list--items d-flex align-items-center">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
        {/* end col-lg-8 */}
        <div className="col-lg-4">
          <div className="footer-social-box text-right">
            <ul className="social-profile">
              <li>
                <a href="#"><i className="lab la-facebook-f" /></a>
              </li>
              <li>
                <a href="#"><i className="lab la-twitter" /></a>
              </li>
              <li>
                <a href="#"><i className="lab la-instagram" /></a>
              </li>
              <li>
                <a href="#"><i className="lab la-linkedin-in" /></a>
              </li>
            </ul>
          </div>
        </div>
        {/* end col-lg-4 */}
      </div>
      {/* end row */}
    </div>
    <div className="section-block mt-4 mb-5" />
    <div className="container">
      <div className="row">
        <div className="col-lg-3 responsive-column">
          <div className="footer-item">
            <div className="footer-logo padding-bottom-30px">
              <a href="index.html" className="foot__logo"><img src="images/logo.png" alt="logo" /></a>
            </div>
            {/* end logo */}
            <p className="footer__desc">
              Morbi convallis bibendum urna ut viverra. Maecenas consequat
            </p>
            <ul className="list-items pt-3">
              <li>
                3015 Grand Ave, Coconut Grove,<br />
                Cerrick Way, FL 12345
              </li>
              <li>+123-456-789</li>
              <li><a href="#">trizen@yourwebsite.com</a></li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column">
          <div className="footer-item">
            <h4 className="title curve-shape pb-3 margin-bottom-20px" data-text="curvs">
              Company
            </h4>
            <ul className="list-items list--items">
              <li><a href="about.html">About us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="blog-grid.html">News</a></li>
              <li><a href="contact.html">Support</a></li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column">
          <div className="footer-item">
            <h4 className="title curve-shape pb-3 margin-bottom-20px" data-text="curvs">
              Other Links
            </h4>
            <ul className="list-items list--items">
              <li><a href="#">USA Vacation Packages</a></li>
              <li><a href="#">USA Flights</a></li>
              <li><a href="#">USA Hotels</a></li>
              <li><a href="#">USA Car Hire</a></li>
              <li><a href="#">Create an Account</a></li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column">
          <div className="footer-item">
            <h4 className="title curve-shape pb-3 margin-bottom-20px" data-text="curvs">
              Payment Methods
            </h4>
            <p className="footer__desc pb-3">
              Pay any way you choose, we support all payment options.
            </p>
            <img src="images/payment-img.png" alt="" />
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
      </div>
      {/* end row */}
      <div className="section-block" />
      <div className="row">
        <div className="col-lg-12">
          <div className="copy-right padding-top-30px text-center">
            <p className="copy__desc">
              © Copyright SWP391 2023. Made with
              <span className="la la-heart" /> by
              <a href="https://themeforest.net/user/techydevs/portfolio">FPT</a>
            </p>
          </div>
          {/* end copy-right */}
        </div>
        {/* end col-lg-12 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
   )
 }
 
 export default Footer