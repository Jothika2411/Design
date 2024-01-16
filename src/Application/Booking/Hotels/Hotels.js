import React from "react";
import { Link } from "react-router-dom";
import Navbars from "../../../Constants/Navbars";
import hotlesImg from "../../../Assests/BookingHotels.png";
import hotelImgOne from "../../../Assests/HotelOne.png";
import hotelImgTwo from "../../../Assests/HotelThree.png";
import "../../../index.css";

const Hotels = () => {
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
      <div className="hotles-card-header">
        <h4>Book your Hotel with us and Save</h4>
        <p>With InterMiles on your Stay!</p>
      </div>
      <div className="container mt-3 hotels-search-bar">
        <div className="input-group hotels-search-bar-input">
          <input
            type="text"
            className="form-control"
            placeholder="Where would you like to stay?"
          />
          <div className="input-group-append">
            <button className="btn submitButton" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row hotels-cards">
        <div className="col-4 ">
          <div className="card hotel-card shadow-lg">
            <img src={hotelImgOne} className="card-img-top" alt="CardImage" />
            <div className="card-body">
              <h5 className="card-title">Novotel Hyderabad Hotel</h5>
              <p className="card-text">
                $17,939 <span>for 1 Night</span>
              </p>
              <button className="btn submitButton hotel-card-button">
                Book Room
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 gx-sm-0">
          <div className="card hotel-card shadow-lg">
            <img src={hotelImgOne} className="card-img-top" alt="CardImage" />
            <div className="card-body">
              <h5 className="card-title">Hyatt Regency Delhi</h5>
              <p className="card-text">
                $19,399 <span>for 1 Night</span>
              </p>
              <button className="btn submitButton hotel-card-button">
                Book Room
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 gx-sm-0">
          <div className="card hotel-card shadow-lg">
            <img src={hotelImgTwo} className="card-img-top" alt="CardImage" />
            <div className="card-body">
              <h5 className="card-title">Taj MG Road, Bengaluru</h5>
              <p className="card-text">
                $17,939 <span>for 1 Night</span>
              </p>
              <button className="btn submitButton hotel-card-button">
                <Link
                  to="/booking/hotels/hotelbooking"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Book Room
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
