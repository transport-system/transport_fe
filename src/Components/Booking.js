import React, {  useRef, useEffect, useState } from "react";
import tripApi from "../api/tripApi";
import {useDispatch} from "react-redux";
import {HideLoading, ShowLoading} from "../redux/alertsSlice";
import {message,Row,Col} from "antd";
import Trip from "./Trip/Trip";
import Home from "./Home/Home";
import { useSearchParams } from "react-router-dom";

function Booking(){
    const dispatch = useDispatch();
    const [Trips, setTrips] = useState([]);

    const [searchParams,setSearchParams] = useSearchParams();
    const departure = searchParams.get('departure')
    const arrival = searchParams.get('arrival')
    const date = searchParams.get('date')

    const getTripSearch = async () => {
        try {
            const response = await tripApi.getTripSearch(departure,arrival,date);
            dispatch(HideLoading());
            console.log(response.data.list_trip);

            if (response.data) {
                setTrips(response.data.list_trip_Customer);


            } else {
                message.error(response.data.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    };
    useEffect(() => {
        getTripSearch();
    },[]);
    return (<section>
          
          <div className="container ">
          <div class="row">
            <div class="col-lg-12">
                <div class="filter-wrap margin-bottom-30px">
                    <div class="filter-top d-flex align-items-center justify-content-between pb-4">
                        <div>
                            <h3 class="title font-size-24">{Trips.length} Trips found</h3>
                            <p class="font-size-14"><span class="mr-1 pt-1">Book with confidence:</span>No booking fees</p>
                        </div>
        
                    </div>
                    <div class="filter-bar d-flex align-items-center justify-content-between">
                        <div class="filter-bar-filter d-flex flex-wrap align-items-center">
                            <div class="filter-option">
                                <h3 class="title font-size-16">Filter by:</h3>
                            </div>
                            <div class="filter-option">
                                <div class="dropdown dropdown-contain">
                                    <a class="dropdown-toggle dropdown-btn dropdown--btn" href="#" role="button" data-toggle="dropdown">
                                        Filter Price
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-wrap">
                                        <div class="dropdown-item">
                                            <div class="slider-range-wrap">
                                                <div class="price-slider-amount padding-bottom-20px">
                                                    <label for="amount" class="filter__label">Price:</label>
                                                    <input type="text" id="amount" class="amounts"/>
                                                </div>
                                                <div id="slider-range"></div>
                                            </div>
                                            <div class="btn-box pt-4">
                                                <button class="theme-btn theme-btn-small theme-btn-transparent" type="button">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="filter-option">
                                <div class="dropdown dropdown-contain">
                                    <a class="dropdown-toggle dropdown-btn dropdown--btn" href="#" role="button" data-toggle="dropdown">
                                        Review Score
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-wrap">
                                        <div class="dropdown-item">
                                            <div class="checkbox-wrap">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="r1"/>
                                                    <label for="r1">
                                                        <span class="ratings d-flex align-items-center">
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <span class="color-text-3 font-size-13 ml-1">(55.590)</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="r2"/>
                                                    <label for="r2">
                                                        <span class="ratings d-flex align-items-center">
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star-o"></i>
                                                            <span class="color-text-3 font-size-13 ml-1">(40.590)</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="r3"/>
                                                    <label for="r3">
                                                        <span class="ratings d-flex align-items-center">
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star-o"></i>
                                                            <i class="la la-star-o"></i>
                                                            <span class="color-text-3 font-size-13 ml-1">(23.590)</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="r4"/>
                                                    <label for="r4">
                                                        <span class="ratings d-flex align-items-center">
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star-o"></i>
                                                            <i class="la la-star-o"></i>
                                                            <i class="la la-star-o"></i>
                                                            <span class="color-text-3 font-size-13 ml-1">(12.590)</span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="r5"/>
                                                    <label for="r5">
                                                        <span class="ratings d-flex align-items-center">
                                                            <i class="la la-star"></i>
                                                            <i class="la la-star-o"></i>
                                                            <i class="la la-star-o"></i>
                                                            <i class="la la-star-o"></i>
                                                            <i class="la la-star-o"></i>
                                                            <span class="color-text-3 font-size-13 ml-1">(590)</span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="filter-option">
                                <div class="dropdown dropdown-contain">
                                    <a class="dropdown-toggle dropdown-btn dropdown--btn" href="#" role="button" data-toggle="dropdown">
                                        Airlines
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-wrap">
                                        <div class="dropdown-item">
                                            <div class="checkbox-wrap">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb1"/>
                                                    <label for="catChb1">Major Airlines</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb2"/>
                                                    <label for="catChb2">United Airlines</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb3"/>
                                                    <label for="catChb3">Delta Airlines</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb4"/>
                                                    <label for="catChb4">Alitalia</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb5"/>
                                                    <label for="catChb5">US Airways</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb6"/>
                                                    <label for="catChb6">Air France</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb7"/>
                                                    <label for="catChb7">Air Tahiti Nui</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="catChb8"/>
                                                    <label for="catChb8">Indigo</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="select-contain">
                            <select class="select-contain-select">
                                <option value="1">Short by default</option>
                                <option value="2">Popular Flight</option>
                                <option value="3">Price: low to high</option>
                                <option value="4">Price: high to low</option>
                                <option value="5">A to Z</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="row">
            <div class="col-lg-4">
                <div class="sidebar mt-0">
                    <div class="sidebar-widget">
                        <h3 class="title stroke-shape">Search Trips</h3>
                        <div class="sidebar-widget-item">
                            <div class="contact-form-action">
                                <form action="/booking">
                                    <div class="input-box">
                                        <label class="label-text">Leaving from</label>
                                        <div class="form-group">
                                            <span class="la la-map-marker form-icon"></span>
                                            <input name="departure" class="form-control" type="text"  placeholder="Destination, city, or airport"/>
                                        </div>
                                    </div>
                                    <div class="input-box">
                                        <label class="label-text">Going to</label>
                                        <div class="form-group">
                                            <span class="la la-map-marker form-icon"></span>
                                            <input name="arrival" class="form-control" type="text" placeholder="Destination, city, or airport"/>
                                        </div>
                                    </div>
                                    <div class="input-box">
                                        <label class="label-text">Departure on</label>
                                        <div class="form-group">
                                            <span class="la la-calendar form-icon"></span>
                                            <input name="date" class="date-range form-control" type="date" />
                                        </div>
                                    </div>
                                    
                                    {/* <div class="input-box">
                                        <label class="label-text">Airlines</label>
                                        <div class="form-group">
                                            <div class="select-contain w-auto">
                                                <select class="select-contain-select">
                                                    <option value="1">American Airlines</option>
                                                    <option value="2">Air France</option>
                                                    <option value="3">Asiana</option>
                                                    <option value="4">Cathay Pacific</option>
                                                    <option value="5">China Southern</option>
                                                    <option value="6">Delta Airlines</option>
                                                    <option value="7">Jet Airways</option>
                                                    <option value="8">Vietnam Airlines</option>
                                                    <option value="9">Qatar Airways</option>
                                                    <option value="10">Singapore Airlines</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}
                                
                                    <div class="btn-box pt-2">
                                        <button type="submit" href="#" class="theme-btn">Search Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                       
                </div>
            </div>
            <div class="col-lg-8">
            {Trips === null ? <div p-5>Not Found!</div> : <Row>
                    {Trips.map(trip=>(
                        <Col lg={24} xs={24} sm={24}>
                            <Trip trip={trip}/>
                        </Col>
                    ))}
                </Row>}

</div>
            </div>
           <div className="pt-5"></div>

                

            

        </div>
    </section>
      
    );

}

export default Booking;