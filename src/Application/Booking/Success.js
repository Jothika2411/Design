import React from "react";
import Navbars from "../../Constants/Navbars";
import flightImage from "../../Assests/BookingFlight.png";
import successImg from "../../Assests/Success.png";
import "../../index.css";

const Success = () => {
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
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Success;
