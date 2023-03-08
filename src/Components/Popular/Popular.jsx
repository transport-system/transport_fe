import React, {useEffect, useState} from 'react'
import './popular.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

// Images ======================>
import img2 from '../../Assets/image (2).png'
import img5 from '../../Assets/image (5).jpg'
import img9 from '../../Assets/image (5).png'
import img7 from '../../Assets/image (7).jpg'

// import AOS ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import tripApi from "../../api/tripApi";
import Booking from '../Booking'


const Data = [
 
  {
  id:1,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location: 'Sài Gòn - Đà Lạt',
  grade: 'CULTURAL RELAX ',
  departure:'Sài Gòn',
  arrival:'Đà Lạt'
  },

  {
  id:2,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Sài Gòn - Huế',
  grade: 'CULTURAL RELAX ',
  departure:'Sài Gòn',
  arrival:'Huế'
  },

  {
  id:3,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location: 'Sài Gòn - Nha Trang',
  grade: 'CULTURAL RELAX ', 
  departure:'Sài Gòn',
  arrival:'Nha Trang' 
  },


  {
  id:4,
  imgSrc: img9,
  destTitle: 'Taj Mahal',
  location: 'Huế - Sài Gòn',
  grade: 'CULTURAL RELAX ',
  departure:'Huế',
  arrival:'Sài Gòn'
  }
]

 
 const Popular = () => {
  const dispatch = useDispatch();
  const [Trips, setTrips] = useState([]);
  const navigate = useNavigate();

  const handleSubmit=async (departure,arrival)=>{
    try {
  
        navigate("/booking")
        const response = await tripApi.getTripPopular(arrival,departure)
        console.log(response.data.list_trip_Customer)
        if (response.data) {
            setTrips(response.data.list_trip_Customer);
  
            message.success(response.data.message + "Thành công")
  
        } else {
            message.error("Not Found!")
            console.log(response)
        }
    } catch (err) {
        message.error(err.message)
    }     }

      useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
   return (
     <section className='popular section container'>
      <div className="secContainter">

        <div className="secHeader flex">

          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
          <h2 className='secTitle'>
          Popular Destinations
          </h2>
          <p>
          From historical cities to natural specteculars, come see the best of the world!
          </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon"/>
          </div>
        </div>

        <div className="mainContent grid">
          {/* Single Destination from the map Array */}

          {
            Data.map(({id, imgSrc, destTitle, location, departure,arrival })=>{
              return (
                <div data-aos="fade-up" className="singleDestination">
            <div className="destImage">

            <img src={imgSrc} alt="" />

            <div className="overlayInfo">
                <h3>
                  {destTitle}
                </h3>
                <p>
                  {location}
                </p>

                <BsArrowRightShort onClick={()=>handleSubmit(departure,arrival)} className='icon'/>
                
            </div>
            </div>

            <div className="destFooter">
            <div className="number">
                0{id}
             </div>

             <div className="destText flex">
               <h6>
                {location} 
               </h6>
               <span className='flex'>
                <span className="dot">
                <BsDot className='icon'/>
                </span>
                 Dot
               </span>
             </div>
            </div>

             

           </div>
              )
            })
          }
           
        </div>
      </div>
      <Booking tripSearch={Trips}/>

     </section>
     
   )
 }
 
 export default Popular