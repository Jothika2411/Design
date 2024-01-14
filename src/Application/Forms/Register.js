import React from "react";
import RegisterImage from "../../Assests/Register.png";
import Header from "../../Constants/Header";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="container register">
        <div className="row">
          <div className="col-6">
            <div className="card register-form-card">
              <div className="card-body register-form-body">
                <h5 className="card-title font-weight-bold">New User</h5>
                <form className="register-form">
                  <div className="row">
                    {/* Left Side Column */}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="inputField1"
                          placeholder="User Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="inputField2"
                          placeholder="Mobile"
                        />
                      </div>
                      <div className="mb-3 register-input-container">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />

                        <span className="regiter-icon">
                          <FileUploadOutlinedIcon />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="inputField4"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3 register-input-container">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="DOB"
                        />

                        <span className="regiter-icon">
                          <CalendarMonthOutlinedIcon />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <button type="submit" className="submitButton">
                        Register
                      </button>
                      <Link to="/" className="ms-2">
                        Back to Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <img
              src={RegisterImage}
              alt=""
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
