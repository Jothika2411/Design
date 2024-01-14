import React from "react";
import Header from "../../Constants/Header";
import LoginImage from "../../Assests/Login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="container login">
        <div className="row">
          <div className="col-5">
            <img
              src={LoginImage}
              style={{ width: "100%", height: "400px" }}
              alt=""
            />
          </div>
          <div className="col-4 card login-form-card">
            <div className="card-body login-form-body">
              <h5 className="card-title font-weight-bold">Welcome</h5>
              <form>
                <div className="mb-3 login-form-input">
                  <input
                    type="text"
                    className="form-control"
                    id="inputField"
                    placeholder="User Id"
                  />
                  <div className="mb-3 login-form-input">
                    <input
                      type="password"
                      className="form-control"
                      id="inputField"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn login-form-button button">
                  Login
                </button>
                <p className="login-form-para">
                  <Link to="/register" className="ms-2">
                    First time user? Register | Forgot Password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
