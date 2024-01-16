import React from "react";
import flightImage from "../../../Assests/BookingFlight.png";
import Navbars from "../../../Constants/Navbars";
import { Link } from "react-router-dom";
import "../../../index.css";
import flight from "../../../Assests/Flights.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const Flights = () => {
  return (
    <div className="flights">
      <Navbars />
      <div>
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
        <div className="container register">
          <div className="row">
            <div className="col-5">
              <div className="card register-form-card">
                <div className="card-body register-form-body">
                  <h5 className="card-title font-weight-bold">
                    Book International Flights with InterMiles
                  </h5>
                  <form className="register-form">
                    <div className="">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="inputField1"
                          placeholder="Bangalore"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="inputField2"
                          placeholder="Mumbai"
                        />
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              style={{
                                color: "#ef4044",
                                background: "none",
                                borderColor: "black",
                              }}
                            >
                              <CalendarMonthOutlinedIcon />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              style={{
                                color: "#ef4044",
                                background: "none",
                                borderColor: "black",
                              }}
                            >
                              <Person2OutlinedIcon />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        style={{
                          width: "100%",
                          marginTop: "15px",
                          padding: "5px",
                        }}
                        className="submitButton"
                      >
                        <Link
                          to="/booking/flights/search"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Search
                        </Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src={flight}
                alt=""
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
