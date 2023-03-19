import React, {useEffect, useState} from 'react'
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

  
     useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])

     return (
     <div>
        
           <section class="hero-wrapper hero-wrapper8">
      <div class="hero-box hero-bg-7 after-none">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="hero-content">
                <div class="section-heading">
                  <h2
                    class="sec__title cd-headline slide bg-white-mask d-inline-block text-black py-2 px-3 rounded font-size-30"
                  >
                    <span class="cd-words-wrapper py-0">
                      <b class="is-visible">Low cost</b>
                      <b>Comfortable</b>
                      <b>Safe</b>
                    </span>
                    bus travel from just €5
                  </h2>
                </div>
              </div>
              {/* <!-- end hero-content --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="search-fields-container mt-4 shadow-sm">
                <div class="section-tab section-tab-2 pb-2">
                 
                </div>
                {/* <!-- end section-tab --> */}
                <div class="tab-content mt-2" id="myTabContent3">
                  <div
                    class="tab-pane show active"
                    id="one-way"
                    role="tabpanel"
                    aria-labelledby="one-way-tab"
                  >
                    <div class="contact-form-action search-input-group-wrap">
                      <form action="/booking" class="row align-items-center">
                        <div class="col-lg-7 pr-0">
                          <div
                            class="d-flex align-items-center search-input-group"
                          >
                            <div
                              class="input-box flex-grow-1 prepend-input-box"
                            >
                              <label class="label-text">From</label>
                              <div class="form-group">
                                <span class="la la-map-marker form-icon"></span>
                                <select 
                                  name='departure'
                                  class="form-control prepend-input address-1"
                                >
                                  <option className='m-3' value="Sài Gòn">Sài Gòn</option>
                                  <option value="Huế">Huế</option>
                                  <option value="Đà Lạt">Đà Lạt</option>
                                  <option value="Vũng Tàu">Vũng Tàu</option>

                                </select>
                                <button class="icon-switch" type="button">
                                  <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuOTk3MjMgOC43MjY0MkgyMC43MjY4TDE4LjI4MzYgMTEuMTZDMTguMTUzMiAxMS4yOTI1IDE4LjA4MDEgMTEuNDcwOSAxOC4wODAxIDExLjY1NjhDMTguMDgwMSAxMS44NDI3IDE4LjE1MzIgMTIuMDIxMiAxOC4yODM2IDEyLjE1MzZDMTguNDE3NSAxMi4yODUyIDE4LjU5NzUgMTIuMzU5MiAxOC43ODUyIDEyLjM2VjEyLjM2QzE4Ljk3MDEgMTIuMzU5IDE5LjE0NyAxMi4yODQ4IDE5LjI3NzIgMTIuMTUzNkwyMi41NDg0IDguODgwMDJDMjIuNzg2MSA4LjY0MDggMjIuOTE5NiA4LjMxNzI2IDIyLjkxOTYgNy45ODAwMkMyMi45MTk2IDcuNjQyNzcgMjIuNzg2MSA3LjMxOTIzIDIyLjU0ODQgNy4wODAwMkwxOS4yNzcyIDMuODA2NDJDMTkuMjE0MyAzLjczOTQzIDE5LjEzOCAzLjY4NjQzIDE5LjA1MzIgMy42NTA4N0MxOC45Njg0IDMuNjE1MzEgMTguODc3MSAzLjU5Nzk4IDE4Ljc4NTIgMy42MDAwMlYzLjYwMDAyQzE4LjY5MTkgMy41OTc5NyAxOC41OTkyIDMuNjE1MjUgMTguNTEyOSAzLjY1MDc3QzE4LjQyNjUgMy42ODYyOSAxOC4zNDg1IDMuNzM5MjggMTguMjgzNiAzLjgwNjQyQzE4LjE1MzIgMy45Mzg4NyAxOC4wODAxIDQuMTE3MzEgMTguMDgwMSA0LjMwMzIyQzE4LjA4MDEgNC40ODkxMiAxOC4xNTMyIDQuNjY3NTYgMTguMjgzNiA0LjgwMDAyTDIwLjcyNjggNy4zNDE2MkgxLjk5NzIzQzEuODEwNzEgNy4zNDQxNCAxLjYzMjcyIDcuNDIwMTggMS41MDE5NSA3LjU1MzJDMS4zNzExOCA3LjY4NjIyIDEuMjk4MTggNy44NjU0OCAxLjI5ODgzIDguMDUyMDJDMS4zMDczOCA4LjIzMjI2IDEuMzg0NDMgOC40MDI0MyAxLjUxNDIzIDguNTI3NzhDMS42NDQwNCA4LjY1MzEyIDEuODE2OCA4LjcyNDE3IDEuOTk3MjMgOC43MjY0MlY4LjcyNjQyWk0yMi4xNzg4IDE1LjI3MzZIMy40NTg4M0w1Ljg5MjQzIDEyLjgxODRDNi4wMjI4OCAxMi42ODYgNi4wOTYgMTIuNTA3NSA2LjA5NiAxMi4zMjE2QzYuMDk2IDEyLjEzNTcgNi4wMjI4OCAxMS45NTczIDUuODkyNDMgMTEuODI0OEM1Ljc3NjAyIDExLjcwNjIgNS42MjExNSAxMS42MzMxIDUuNDU1NjMgMTEuNjE4NFYxMS42MTg0QzUuMjY3OTIgMTEuNjE5MiA1LjA4NzkzIDExLjY5MzMgNC45NTQwMyAxMS44MjQ4TDEuNjgwNDMgMTUuMDk4NEMxLjQ0MjcxIDE1LjMzNzYgMS4zMDkyOSAxNS42NjEyIDEuMzA5MjkgMTUuOTk4NEMxLjMwOTI5IDE2LjMzNTcgMS40NDI3MSAxNi42NTkyIDEuNjgwNDMgMTYuODk4NEw0Ljk1NDAzIDIwLjE3MkM1LjA5ODg0IDIwLjI3NjcgNS4yNzkxNSAyMC4zMTk4IDUuNDU1NjMgMjAuMjkyVjIwLjI5MkM1LjU0NjE5IDIwLjI5MzEgNS42MzYwNyAyMC4yNzYzIDUuNzIwMSAyMC4yNDI1QzUuODA0MTMgMjAuMjA4OCA1Ljg4MDY0IDIwLjE1ODcgNS45NDUyMyAyMC4wOTUyQzYuMDc1NzIgMTkuOTYwOCA2LjE0ODcxIDE5Ljc4MDkgNi4xNDg3MSAxOS41OTM2QzYuMTQ4NzEgMTkuNDA2MyA2LjA3NTcyIDE5LjIyNjQgNS45NDUyMyAxOS4wOTJMMy40NTg4MyAxNi42NTg0SDIyLjE3ODhDMjIuMjcyIDE2LjY1ODQgMjIuMzY0MyAxNi42NCAyMi40NTAzIDE2LjYwNDNDMjIuNTM2NCAxNi41Njg2IDIyLjYxNDUgMTYuNTE2MiAyMi42ODAzIDE2LjQ1MDJDMjIuNzQ2MSAxNi4zODQyIDIyLjc5ODIgMTYuMzA1OSAyMi44MzM2IDE2LjIxOTdDMjIuODY5MSAxNi4xMzM1IDIyLjg4NzEgMTYuMDQxMiAyMi44ODY4IDE1Ljk0OEMyMi44ODM3IDE1Ljc2MjMgMjIuODA3NyAxNS41ODUzIDIyLjY3NTMgMTUuNDU1MUMyMi41NDI4IDE1LjMyNDkgMjIuMzY0NSAxNS4yNTIgMjIuMTc4OCAxNS4yNTJWMTUuMjczNloiIGZpbGw9IiM4QjhCOEIiLz4KPC9zdmc+Cg=="
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                            <div class="input-box flex-grow-1 append-input-box">
                              <label class="label-text">To</label>
                              <div class="form-group">
                                <span class="la la-map-marker form-icon"></span>
                                <select
                                  name='arrival'
                                  class="form-control append-input address-2"
                                >
                                  <option  value="Sài Gòn">Sài Gòn</option>
                                  <option value="Huế">Huế</option>
                                  <option value="Đà Lạt">Đà Lạt</option>
                                  <option value="Vũng Tàu">Vũng Tàu</option>
                           </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end col-lg-5 --> */}
                        <div class="col-lg-3 pr-0">
                          <div class="input-box">
                            <label class="label-text">Departure</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <input
                                class="date-range form-control"
                                type="date"
                                name="date"
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                  
                        {/* <!-- end col-lg-2 --> */}
                        <div class="col-lg-2">
                          <button
                          type='submit'
                            href="#"
                            class="theme-btn w-100 text-center margin-top-20px"
                            >Search
                            </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- end tab-pane --> */}
                  <div
                    class="tab-pane"
                    id="round-trip"
                    role="tabpanel"
                    aria-labelledby="round-trip-tab"
                  >
                    <div class="contact-form-action search-input-group-wrap">
                      <form action="#" class="row align-items-center">
                        <div class="col-lg-5 pr-0">
                          <div
                            class="d-flex align-items-center search-input-group"
                          >
                            <div
                              class="input-box flex-grow-1 prepend-input-box"
                            >
                              <label class="label-text">From</label>
                              <div class="form-group">
                                <span class="la la-map-marker form-icon"></span>
                                <input
                                  class="form-control prepend-input address-1"
                                  type="text"
                                  placeholder="Berlin"
                                />
                                <button class="icon-switch" type="button">
                                  <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuOTk3MjMgOC43MjY0MkgyMC43MjY4TDE4LjI4MzYgMTEuMTZDMTguMTUzMiAxMS4yOTI1IDE4LjA4MDEgMTEuNDcwOSAxOC4wODAxIDExLjY1NjhDMTguMDgwMSAxMS44NDI3IDE4LjE1MzIgMTIuMDIxMiAxOC4yODM2IDEyLjE1MzZDMTguNDE3NSAxMi4yODUyIDE4LjU5NzUgMTIuMzU5MiAxOC43ODUyIDEyLjM2VjEyLjM2QzE4Ljk3MDEgMTIuMzU5IDE5LjE0NyAxMi4yODQ4IDE5LjI3NzIgMTIuMTUzNkwyMi41NDg0IDguODgwMDJDMjIuNzg2MSA4LjY0MDggMjIuOTE5NiA4LjMxNzI2IDIyLjkxOTYgNy45ODAwMkMyMi45MTk2IDcuNjQyNzcgMjIuNzg2MSA3LjMxOTIzIDIyLjU0ODQgNy4wODAwMkwxOS4yNzcyIDMuODA2NDJDMTkuMjE0MyAzLjczOTQzIDE5LjEzOCAzLjY4NjQzIDE5LjA1MzIgMy42NTA4N0MxOC45Njg0IDMuNjE1MzEgMTguODc3MSAzLjU5Nzk4IDE4Ljc4NTIgMy42MDAwMlYzLjYwMDAyQzE4LjY5MTkgMy41OTc5NyAxOC41OTkyIDMuNjE1MjUgMTguNTEyOSAzLjY1MDc3QzE4LjQyNjUgMy42ODYyOSAxOC4zNDg1IDMuNzM5MjggMTguMjgzNiAzLjgwNjQyQzE4LjE1MzIgMy45Mzg4NyAxOC4wODAxIDQuMTE3MzEgMTguMDgwMSA0LjMwMzIyQzE4LjA4MDEgNC40ODkxMiAxOC4xNTMyIDQuNjY3NTYgMTguMjgzNiA0LjgwMDAyTDIwLjcyNjggNy4zNDE2MkgxLjk5NzIzQzEuODEwNzEgNy4zNDQxNCAxLjYzMjcyIDcuNDIwMTggMS41MDE5NSA3LjU1MzJDMS4zNzExOCA3LjY4NjIyIDEuMjk4MTggNy44NjU0OCAxLjI5ODgzIDguMDUyMDJDMS4zMDczOCA4LjIzMjI2IDEuMzg0NDMgOC40MDI0MyAxLjUxNDIzIDguNTI3NzhDMS42NDQwNCA4LjY1MzEyIDEuODE2OCA4LjcyNDE3IDEuOTk3MjMgOC43MjY0MlY4LjcyNjQyWk0yMi4xNzg4IDE1LjI3MzZIMy40NTg4M0w1Ljg5MjQzIDEyLjgxODRDNi4wMjI4OCAxMi42ODYgNi4wOTYgMTIuNTA3NSA2LjA5NiAxMi4zMjE2QzYuMDk2IDEyLjEzNTcgNi4wMjI4OCAxMS45NTczIDUuODkyNDMgMTEuODI0OEM1Ljc3NjAyIDExLjcwNjIgNS42MjExNSAxMS42MzMxIDUuNDU1NjMgMTEuNjE4NFYxMS42MTg0QzUuMjY3OTIgMTEuNjE5MiA1LjA4NzkzIDExLjY5MzMgNC45NTQwMyAxMS44MjQ4TDEuNjgwNDMgMTUuMDk4NEMxLjQ0MjcxIDE1LjMzNzYgMS4zMDkyOSAxNS42NjEyIDEuMzA5MjkgMTUuOTk4NEMxLjMwOTI5IDE2LjMzNTcgMS40NDI3MSAxNi42NTkyIDEuNjgwNDMgMTYuODk4NEw0Ljk1NDAzIDIwLjE3MkM1LjA5ODg0IDIwLjI3NjcgNS4yNzkxNSAyMC4zMTk4IDUuNDU1NjMgMjAuMjkyVjIwLjI5MkM1LjU0NjE5IDIwLjI5MzEgNS42MzYwNyAyMC4yNzYzIDUuNzIwMSAyMC4yNDI1QzUuODA0MTMgMjAuMjA4OCA1Ljg4MDY0IDIwLjE1ODcgNS45NDUyMyAyMC4wOTUyQzYuMDc1NzIgMTkuOTYwOCA2LjE0ODcxIDE5Ljc4MDkgNi4xNDg3MSAxOS41OTM2QzYuMTQ4NzEgMTkuNDA2MyA2LjA3NTcyIDE5LjIyNjQgNS45NDUyMyAxOS4wOTJMMy40NTg4MyAxNi42NTg0SDIyLjE3ODhDMjIuMjcyIDE2LjY1ODQgMjIuMzY0MyAxNi42NCAyMi40NTAzIDE2LjYwNDNDMjIuNTM2NCAxNi41Njg2IDIyLjYxNDUgMTYuNTE2MiAyMi42ODAzIDE2LjQ1MDJDMjIuNzQ2MSAxNi4zODQyIDIyLjc5ODIgMTYuMzA1OSAyMi44MzM2IDE2LjIxOTdDMjIuODY5MSAxNi4xMzM1IDIyLjg4NzEgMTYuMDQxMiAyMi44ODY4IDE1Ljk0OEMyMi44ODM3IDE1Ljc2MjMgMjIuODA3NyAxNS41ODUzIDIyLjY3NTMgMTUuNDU1MUMyMi41NDI4IDE1LjMyNDkgMjIuMzY0NSAxNS4yNTIgMjIuMTc4OCAxNS4yNTJWMTUuMjczNloiIGZpbGw9IiM4QjhCOEIiLz4KPC9zdmc+Cg=="
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                            <div class="input-box flex-grow-1 append-input-box">
                              <label class="label-text">To</label>
                              <div class="form-group">
                                <span class="la la-map-marker form-icon"></span>
                                <input
                                  class="form-control append-input address-2"
                                  type="text"
                                  placeholder="Munich"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end col-lg-5 --> */}
                        <div class="col-lg-3 pr-0">
                          <div
                            class="d-flex align-items-center search-input-group"
                          >
                            <div class="input-box flex-grow-1">
                              <label class="label-text">Departure</label>
                              <div class="form-group">
                                <span class="la la-calendar form-icon"></span>
                                <input
                                  class="date-range form-control prepend-input"
                                  type="text"
                                  name="daterange-single"
                                  readonly
                                />
                              </div>
                            </div>
                            <div class="input-box flex-grow-1">
                              <label class="label-text">Return</label>
                              <div class="form-group">
                                <span class="la la-calendar form-icon"></span>
                                <input
                                  class="date-range form-control append-input"
                                  type="text"
                                  name="daterange-single"
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                  
                        {/* <!-- end col-lg-2 --> */}
                        <div class="col-lg-2">
                          <a
                            href="#"
                            class="theme-btn w-100 text-center margin-top-20px"
                            >Search</a
                          >
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- end tab-pane --> */}
                </div>
              </div>
              {/* <!-- end main-search-input --> */}
            </div>
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
    </section>

    <section className="info-area info-bg padding-top-140px padding-bottom-40px text-center bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="icon-box">
                <div className="info-icon after-none before-none font-size-40">
                  <i className="la la-exclamation-circle" />
                </div>
                {/* end info-icon*/}
                <div className="info-content pt-0">
                  <h4 className="info__title font-size-16 font-weight-bold">
                    Traveling during COVID-19
                  </h4>
                  <p>Find all the current information about our network.</p>
                  <a href="#" className="btn-text text-color">Check here <i className="la la-angle-right ml-1" /></a>
                </div>
                {/* end info-content */}
              </div>
              {/* end icon-box */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="icon-box">
                <div className="info-icon after-none before-none font-size-40">
                  <i className="la la-chair" />
                </div>
                {/* end info-icon*/}
                <div className="info-content pt-0">
                  <h4 className="info__title font-size-16 font-weight-bold">
                    Comfort on board
                  </h4>
                  <p>
                    Our buses are equipped with large and comfortable seats, a
                    toilet, Wi-Fi.
                  </p>
                  <a href="#" className="btn-text text-color">Our onboard service <i className="la la-angle-right ml-1" /></a>
                </div>
                {/* end info-content */}
              </div>
              {/* end icon-box */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="icon-box">
                <div className="info-icon after-none before-none font-size-40">
                  <i className="la la-map-marker" />
                </div>
                {/* end info-icon*/}
                <div className="info-content pt-0">
                  <h4 className="info__title font-size-16 font-weight-bold">
                    Largest bus network in Europe
                  </h4>
                  <p>
                    Choose from over 2,500 travel destinations in 35 countries.
                  </p>
                  <a href="#" className="btn-text text-color">Our route network <i className="la la-angle-right ml-1" /></a>
                </div>
                {/* end info-content */}
              </div>
              {/* end icon-box */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="icon-box">
                <div className="info-icon after-none before-none font-size-40">
                  <i className="la la-leaf" />
                </div>
                {/* end info-icon*/}
                <div className="info-content pt-0">
                  <h4 className="info__title font-size-16 font-weight-bold">
                    Travel environmentally-friendly
                  </h4>
                  <p>
                    Our efficient coaches are proven to have an excellent carbon
                    footprint.
                  </p>
                  <a href="#" className="btn-text text-color">Bus travel and environment
                    <i className="la la-angle-right ml-1" /></a>
                </div>
                {/* end info-content */}
              </div>
              {/* end icon-box */}
            </div>
            {/* end col-lg-3 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>

      <section className="destination-area padding-top-100px padding-bottom-80px">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title font-size-30">Featured Trips Deals</h2>
              </div>
              {/* end section-heading */}
            </div>
            {/* end col-lg-12 */}
          </div>
          {/* end row */}
          <div className="row padding-top-60px">
            <div className="col-lg-4 responsive-column">
              <div className="card-item flight-card">
                <div className="card-img">
                  <a href="flight-single.html" className="d-block">
                    <img src="https://reviewvilla.vn/wp-content/uploads/2022/06/dia-diem-du-lich-Vung-Tau-15-1024x523.jpg" alt="destination-img" />
                    <span className="badge">Paris</span>
                  </a>
                </div>
                <div className="card-body">
                  <img src="images/american-airline.png" alt="" className="flight-logo" />
                  <h3 className="card-title">
                    <a href="flight-single.html">London to Paris</a>
                  </h3>
                  <p className="card-meta">One way Flight</p>
                  <div className="card-price d-flex align-items-center justify-content-between">
                    <p>
                      <span className="price__from">From</span>
                      <span className="price__num">$399.00</span>
                    </p>
                    <a href="/booking/" className="btn-text">Read details<i className="la la-angle-right" /></a>
                  </div>
                </div>
              </div>
              {/* end card-item */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item flight-card">
                <div className="card-img">
                  <a href="flight-single.html" className="d-block">
                    <img src="https://vtv1.mediacdn.vn/thumb_w/650/2022/11/30/b22-16697994119911201542911-crop-1669799574167932517806.jpeg" alt="destination-img" />
                    <span className="badge">Spain</span>
                    <span className="badge badge-ribbon">Save 29%</span>
                  </a>
                </div>
                <div className="card-body">
                  <img src="images/united-airline.png" alt="" className="flight-logo" />
                  <h3 className="card-title">
                    <a href="flight-single.html">Dubai to Spain</a>
                  </h3>
                  <p className="card-meta">Round-trip Flight</p>
                  <div className="card-price d-flex align-items-center justify-content-between">
                    <p>
                      <span className="price__from">From</span>
                      <span className="price__num">$570.00</span>
                      <span className="price__num before-price color-text-3">$599.00</span>
                    </p>
                    <a href="flight-single.html" className="btn-text">Read details<i className="la la-angle-right" /></a>
                  </div>
                </div>
              </div>
              {/* end card-item */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item flight-card">
                <div className="card-img">
                  <a href="flight-single.html" className="d-block">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Vung_Tau%2C_Viet_Nam_2021.jpg" alt="destination-img" />
                    <span className="badge">Australia</span>
                  </a>
                </div>
                <div className="card-body">
                  <img src="images/air-france.png" alt="" className="flight-logo" />
                  <h3 className="card-title">
                    <a href="flight-single.html">Bangkok to Australia</a>
                  </h3>
                  <p className="card-meta">One way Flight</p>
                  <div className="card-price d-flex align-items-center justify-content-between">
                    <p>
                      <span className="price__from">From</span>
                      <span className="price__num">$299.00</span>
                    </p>
                    <a href="flight-single.html" className="btn-text">Read details<i className="la la-angle-right" /></a>
                  </div>
                </div>
              </div>
              {/* end card-item */}
            </div>
          
            {/* end col-lg-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      
    
   </div>

   )
 }
 
 export default Home