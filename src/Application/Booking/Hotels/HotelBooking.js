import React from "react";
import { Link } from "react-router-dom";
import Navbars from "../../../Constants/Navbars";
import hotlesImg from "../../../Assests/BookingHotels.png";
import HotelBookingImage from "../../../Assests/HotelBooking.png";

const HotelBooking = () => {
  return (
    <div>
      <Navbars />
      <div className="hotels-card shadow-sm">
        <img
          src={hotlesImg}
          alt=""
          style={{
            width: "50px",
            marginLeft: "70px",
            marginTop: "10px",
          }}
        />
      </div>
      <span style={{ marginLeft: "150px" }}>Hotels</span>
      <div
        className="card shadow-lg"
        style={{
          width: "50rem",
          marginLeft: "400px",
          borderRadius: "15px",
        }}
      >
        <div className="card-header hotel-booking-card-header border-0 d-flex flex-row justify-content-around align-items-center bg-transparent">
          <h5 className="card-title hotel-booking-card-header-title">
            Novotel Hyderabad Hotel
          </h5>
          <div className="d-flex">
            <select
              className="form-control hotel-booking-card-header-dropdown-one"
              placeholder="10 Jan - 11 Jan 2024"
            >
              <option>Dropdown 1</option>
              <option>Dropdown 2</option>
              <option>Dropdown 3</option>
            </select>
            <select
              className="form-control hotel-booking-card-header-dropdown-two"
              placeholder="2 adult, 1 Room"
            >
              <option>Dropdown 1</option>
              <option>Dropdown 2</option>
              <option>Dropdown 3</option>
            </select>
          </div>
        </div>
        <div className="card-body hotel-booking-card-body">
          <div className="d-flex hotel-booking-card-body-img-container">
            <img src={HotelBookingImage} alt="CardImage" className="" />

            <div className="d-flex flex-column hotel-booking-card-body-description">
              <div className="card-text flex-column hotel-booking-card-body-text">
                <h6>HIGHLIGHTS</h6>
                <p>Check-in-time: 3.00pm</p>
                <p>Check-out-time: 12:00pm</p>
              </div>
              <div className="card-text hotel-booking-card-body-text">
                <h6>FEATURED AMENTITIES</h6>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <p>Elevator</p>
                    <p>Hair Salon</p>
                  </div>
                  <div
                    className="d-flex flex-column"
                    style={{ marginLeft: "30px" }}
                  >
                    <p>Fitness Facilities</p>
                    <p>ATM / Banking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn submitButton  hotel-booking-card-button">
            <Link
              to="/booking/hotels/hotelbooking/success"
              style={{ textDecoration: "none", color: "white" }}
            >
              Book Room
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
