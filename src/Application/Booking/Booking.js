import React from "react";
import Navbars from "../../Constants/Navbars";
import flightImage from "../../Assests/BookingFlight.png";
import digiStoreImage from "../../Assests/BookingDigi.png";
import hotelsImage from "../../Assests/BookingHotels.png";
import fuelImage from "../../Assests/BookingFuel.png";
import shopImage from "../../Assests/BookingShop.png";
import cardsImage from "../../Assests/BookingCards.png";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div>
      <Navbars />
      <div className="booking-center">
        <h5>-----Bookings-----</h5>
      </div>
      <div className="container booking-container">
        <div className="row g-5">
          <div className="col-2">
            <div className="row">
              <div className="card booking-card shadow-sm">
                <div className="card-body ">
                  <h5>
                    <Link
                      to="/booking/flights"
                      className="ms-2 booking-card-body-text"
                    >
                      Flights
                    </Link>
                  </h5>
                  <img
                    src={flightImage}
                    alt=""
                    style={{
                      width: "80px",
                      height: "180",
                      marginLeft: "80px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card booking-card shadow-sm"
                style={{ marginTop: "20px" }}
              >
                <div className="card-body ">
                  <h5>Digi Stores</h5>
                  <img
                    src={digiStoreImage}
                    alt=""
                    style={{
                      width: "80px",
                      height: "180",
                      marginLeft: "80px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="card booking-card shadow-sm">
                <div className="card-body ">
                  <h5>Hotels</h5>
                  <img
                    src={hotelsImage}
                    alt=""
                    style={{
                      width: "100px",
                      height: "180",
                      marginLeft: "70px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card booking-card shadow-sm"
                style={{ marginTop: "20px" }}
              >
                <div className="card-body ">
                  <h5>Fuel</h5>
                  <img
                    src={fuelImage}
                    alt=""
                    style={{
                      width: "110px",
                      height: "180",
                      marginLeft: "60px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="card booking-card shadow-sm">
                <div className="card-body ">
                  <h5>Shop</h5>
                  <img
                    src={shopImage}
                    alt=""
                    style={{
                      width: "100px",
                      height: "180",
                      marginLeft: "70px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card booking-card shadow-sm"
                style={{ marginTop: "20px" }}
              >
                <div className="card-body ">
                  <h5>Cards</h5>
                  <img
                    src={cardsImage}
                    alt=""
                    style={{
                      width: "180px",
                      height: "150",
                      padding: "20px",
                      marginLeft: ".5px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
