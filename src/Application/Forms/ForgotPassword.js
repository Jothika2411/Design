import React from "react";
import img from "../../Assests/homeimg.png";
import Header from "../../Constants/Header";

const ForgotPassword = () => {
  return (
    <div>
      <Header />
      <div className="container forgotpassword">
        <div className="row">
          <div className="col-6">
            <img src={img} style={{ width: "100%", height: "400px" }} alt="" />
          </div>
          <div className="col-4 card forgotpassword-form-card">
            <div className="card-body forgotpassword-form-body">
              <h5 className="card-title font-weight-bold">
                Verify Your Account
              </h5>
              <form>
                <div className="mb-3 forgotpassword-form-input">
                  <input
                    type="text"
                    className="form-control"
                    id="inputField"
                    placeholder="User Name/Email"
                  />
                </div>
                <button
                  type="submit"
                  className="btn forgotpassword-form-button button"
                >
                  Verify
                </button>
                <p className="forgotpassword-form-para">
                  <a href="#" className="ms-2">
                    Back to login? Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
