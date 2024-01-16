import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbars from "../../../Constants/Navbars";
import flightImage from "../../../Assests/BookingFlight.png";
import flightImg from "../../../Assests/Flights.png";
import airasiaImg from "../../../Assests/AirAsia.png";
import vistaraImg from "../../../Assests/vistaralogo.png";
import fetchImg from "../../../Assests/fetchimage.png";

const Search = () => {
  const [flights, setFlights] = useState(false);

  return (
    <div className="search">
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
      {flights === true ? (
        <>
          <div className="first-card">
            <div className="first-card-header">
              <h4>Bangalore -- Mumbai</h4>
              <p>Tuesday, 12 January 2024 1 Traveller Economy</p>
            </div>
            <div
              className="card first-card-container"
              style={{ marginBottom: "10px" }}
            >
              <div className="card-body search-card-body-container">
                <div className="search-card-body-image">
                  <img src={airasiaImg} alt="" />
                </div>
                <div className="search-card-body-text-one">
                  <p>Airasia India</p>
                </div>
                <div className="search-card-body-text-two">
                  <p className="search-card-body-text-two-para-one">
                    02.35, Tuesday, 12 Jan
                  </p>
                  <p className="search-card-body-text-two-para-two">
                    Bangalore(BLR)
                  </p>
                </div>
                <div className="search-card-body-text-three">
                  <p>----01h 55m ----</p>
                </div>
                <div className="search-card-body-text-four">
                  <p className="search-card-body-text-four-para-one">
                    04.30, Tuesday, 12 Jan
                  </p>
                  <p className="search-card-body-text-four-para-two">
                    Mumbai(BOM)
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-4 first-card-form">
              <div className="card first-card">
                <div className="card-body first-card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col form-group input-container">
                        <h5
                          className="card-title"
                          style={{ fontSize: "18px", fontWeight: "600" }}
                        >
                          Contact Details
                        </h5>
                        <input
                          type="text"
                          className="form-control custom-input"
                          id="input1"
                          placeholder="Email"
                        />
                      </div>
                      <div
                        className="col form-group"
                        style={{ marginTop: "30px" }}
                      >
                        <input
                          type="text"
                          className="form-control custom-input"
                          id="input2"
                          placeholder="Mobile"
                        />
                      </div>
                      <div className="col"></div>
                    </div>
                    <div className="row">
                      <div className="col form-group">
                        <h5
                          className="card-title"
                          style={{ fontSize: "18px", fontWeight: "600" }}
                        >
                          Traveller Details: <span>Adult 1</span>{" "}
                        </h5>
                        <select
                          className="form-control custom-input"
                          id="dropdownInput"
                          placeholder="Title"
                        >
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                      <div
                        className="col form-group"
                        style={{ marginTop: "30px" }}
                      >
                        <input
                          type="text"
                          className="form-control custom-input"
                          id="input3"
                          placeholder="First Name"
                        />
                      </div>
                      <div
                        className="col form-group"
                        style={{ marginTop: "30px" }}
                      >
                        <input
                          type="text"
                          className="form-control custom-input"
                          id="input4"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn submitButton"
                    style={{
                      width: "20%",
                      marginLeft: "600px",
                      marginTop: "10px",
                    }}
                  >
                    <Link
                      to="/booking/flights/search/success"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Book Ticket
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="card search-card">
              <div className="card-body search-card-body">
                <div className="row">
                  <div className="col-2 search-card-body-header-one">
                    <h6>Showing 3 Results</h6>
                  </div>
                  <div className="col-5 search-card-body-header-two">
                    <h4>Bangalore -- Mumbai</h4>
                    <p>Tuesday, 12 January 2024 1 Traveller Economy</p>
                  </div>
                  <div className="col-2 search-card-body-header-three">
                    <button className="submitButton-outlined">MODIFY</button>
                  </div>
                  <div className="col-3">
                    <img
                      src={flightImg}
                      alt=""
                      style={{
                        width: "60%",
                        marginLeft: "50px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="card search-card-container"
                style={{ marginBottom: "10px" }}
                onClick={() => setFlights(true)}
              >
                <div className="card-body search-card-body-container">
                  <div className="search-card-body-image">
                    <img src={airasiaImg} alt="" />
                  </div>
                  <div className="search-card-body-text-one">
                    <p>Airasia India</p>
                  </div>
                  <div className="search-card-body-text-two">
                    <p className="search-card-body-text-two-para-one">
                      02.35, Tuesday, 12 Jan
                    </p>
                    <p className="search-card-body-text-two-para-two">
                      Bangalore(BLR)
                    </p>
                  </div>
                  <div className="search-card-body-text-three">
                    <p>----01h 55m ----</p>
                  </div>
                  <div className="search-card-body-text-four">
                    <p className="search-card-body-text-four-para-one">
                      04.30, Tuesday, 12 Jan
                    </p>
                    <p className="search-card-body-text-four-para-two">
                      Mumbai(BOM)
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card search-card-container"
                style={{ marginBottom: "10px" }}
              >
                <div className="card-body search-card-body-container">
                  <div className="search-card-body-image">
                    <img src={vistaraImg} alt="" />
                  </div>
                  <div className="search-card-body-text-one">
                    <p>Airasia India</p>
                  </div>
                  <div className="search-card-body-text-two">
                    <p className="search-card-body-text-two-para-one">
                      02.35, Tuesday, 12 Jan
                    </p>
                    <p className="search-card-body-text-two-para-two">
                      Bangalore(BLR)
                    </p>
                  </div>
                  <div className="search-card-body-text-three">
                    <p>----01h 55m ----</p>
                  </div>
                  <div className="search-card-body-text-four">
                    <p className="search-card-body-text-four-para-one">
                      04.30, Tuesday, 12 Jan
                    </p>
                    <p className="search-card-body-text-four-para-two">
                      Mumbai(BOM)
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card search-card-container"
                style={{ marginBottom: "20px" }}
              >
                <div className="card-body search-card-body-container">
                  <div className="search-card-body-image">
                    <img src={fetchImg} alt="" />
                  </div>
                  <div className="search-card-body-text-one">
                    <p>Airasia India</p>
                  </div>
                  <div className="search-card-body-text-two">
                    <p className="search-card-body-text-two-para-one">
                      02.35, Tuesday, 12 Jan
                    </p>
                    <p className="search-card-body-text-two-para-two">
                      Bangalore(BLR)
                    </p>
                  </div>
                  <div className="search-card-body-text-three">
                    <p>----01h 55m ----</p>
                  </div>
                  <div className="search-card-body-text-four">
                    <p className="search-card-body-text-four-para-one">
                      04.30, Tuesday, 12 Jan
                    </p>
                    <p className="search-card-body-text-four-para-two">
                      Mumbai(BOM)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
