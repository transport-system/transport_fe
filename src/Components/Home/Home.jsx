import React, {useEffect, useState} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useForm } from "react-hook-form";
import {Form, Input,Button,message,Select} from "antd";
import tripApi from "../../api/tripApi";
import Booking from "../Booking";
import {HideLoading, ShowLoading} from "../../redux/alertsSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

 const Home = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [Trips, setTrips] = useState([]);

     const handleSubmit=async (values)=>{
        try {

            // navigate("/booking")
            const response = await tripApi.getTripSearch(values.arrival,values.departure,values.date)
            dispatch(HideLoading());
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

     return (<div>
           <section className='home'>
               <div className="secContainer container">
                   <div className="homeText">
                       <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
                           Plan Your Trip With Travel FPT
                       </h1>
                       <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                           Travel to your favourite city with respectful of the environment!
                       </p>
                       <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                           <a href="#">Explore Now</a>
                       </button>
                   </div>

                   <Form onFinish={handleSubmit} className="homeCard grid">
                       <Form.Item name="departure" className="locationDiv ">
                           {/*<label htmlFor="departure">departure</label>*/}
                           {/*<Input  placeholder='Departure'/>*/}
                           <Select
                               showSearch

                               placeholder="Search to Select"
                               optionFilterProp="children"
                               filterOption={(input, option) => (option?.label ?? '').includes(input)}
                               filterSort={(optionA, optionB) =>
                                   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                               }
                               options={[
                                   {
                                       value: 'Sài Gòn',
                                       label: 'Sài Gòn',
                                   },
                                   {
                                       value: 'Đà Lạt',
                                       label: 'Đà Lạt',
                                   },
                                   {
                                       value: 'Huế',
                                       label: 'Huế',
                                   },
                                   {
                                       value: 'Nha Trang',
                                       label: 'Nha Trang',
                                   },
                               ]}
                           />
                       </Form.Item>
                       <Form.Item name="arrival" data-aos="fade-right" data-aos-duration="2500" className="distDiv">
                           {/*<label htmlFor="arrival">arrival</label>*/}
                           {/*<Input type="text"  placeholder='arrival'/>*/}
                           <Select
                               showSearch
                               style={{ width: 250 }}
                               placeholder="Search to Select"
                               optionFilterProp="children"
                               filterOption={(input, option) => (option?.label ?? '').includes(input)}
                               filterSort={(optionA, optionB) =>
                                   (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                               }
                               options={[
                                {
                                    value: 'Sài Gòn',
                                    label: 'Sài Gòn',
                                },
                                {
                                    value: 'Đà Lạt',
                                    label: 'Đà Lạt',
                                },
                                {
                                    value: 'Huế',
                                    label: 'Huế',
                                },
                                {
                                    value: 'Nha Trang',
                                    label: 'Nha Trang',
                                },
                            ]}
                           />
                       </Form.Item>
                       <Form.Item  name="date" data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
                           {/*<label htmlFor="price">Price Range</label>*/}
                           <Input type="date" placeholder='$140-$500'/>
                       </Form.Item>
                       <Form.Item className="locationDiv btn">
                           <Button type="submit"  htmlType="submit"  data-aos="fade-left" data-aos-duration="3500" >Search</Button>
                       </Form.Item>
                   </Form>
               </div>
           </section>
           <Booking tripSearch={Trips}/>
   </div>

   )
 }
 
 export default Home