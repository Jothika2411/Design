import React from "react";
import Navbars from "../../../Constants/Navbars";
import flightImage from "../../../Assests/BookingFlight.png";
import successImg from "../../../Assests/Success.png";
import succesIconImg from "../../../Assests/SuccessIcon.png";
import "../../../index.css";

const HotelBookingSuccess = () => {
  return (
    <div>
      <Navbars />
      <div className="flights-card shadow-sm">
        <img
          src={flightImage}
          alt=""
          style={{
            width: "50px",
            marginLeft: "70px",
            marginTop: "10px",
          }}
        />
      </div>
      <span style={{ marginLeft: "150px" }}>Flights</span>
      <div className="card success-card">
        <div className="row">
          <div className="col">
            <img src={successImg} alt="" />
          </div>
          <div className="col success-column">
            <img src={succesIconImg} alt="" className="success-image" />
            <p style={{ fontWeight: "600", fontSize: "20px" }}>
              Your room has been booked
            </p>
            <p style={{ color: "#ef4044", fontSize: "30px", lineHeight: "0" }}>
              Successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingSuccess;
