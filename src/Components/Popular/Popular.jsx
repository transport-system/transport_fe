import React, {useEffect} from 'react'
import './popular.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

// Images ======================>
import img2 from '../../Assets/image (2).jpg'
import img5 from '../../Assets/image (5).jpg'
import img9 from '../../Assets/image (5).png'
import img7 from '../../Assets/image (7).jpg'

// import AOS ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [
 
  {
  id:1,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  grade: 'CULTURAL RELAX ',
  },

  {
  id:2,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Mexico',
  grade: 'CULTURAL RELAX ',
  },

  {
  id:3,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location: 'Cambodia',
  grade: 'CULTURAL RELAX ',  
  },


  {
  id:4,
  imgSrc: img9,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX ',
  }

]

 
 const Popular = () => {
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
            Data.map(({id, imgSrc, destTitle, location, grade })=>{
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

                <BsArrowRightShort className='icon'/>
                
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
     </section>
   )
 }
 
 export default Popular