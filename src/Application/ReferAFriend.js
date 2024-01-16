import React from "react";
import Navbars from "../Constants/Navbars";
import referFreindImg from "../Assests/ReferFriend.png";
import "../index.css";

const ReferAFriend = () => {
  return (
    <div>
      <Navbars />
      <div className="container login">
        <div className="row">
          <div className="col-5">
            <img
              src={referFreindImg}
              style={{ width: "100%", height: "400px" }}
              alt=""
            />
          </div>
          <div className="col-4 card login-form-card">
            <div className="card-body login-form-body">
              <h5 className="card-title font-weight-bold">Refer A Friend</h5>
              <form>
                <div className="mb-3 login-form-input">
                  <input
                    type="text"
                    className="form-control"
                    id="inputField"
                    placeholder="Friend's Name"
                  />
                  <div className="mb-3 login-form-input">
                    <input
                      type="password"
                      className="form-control"
                      id="inputField"
                      placeholder="Mobile"
                    />
                  </div>
                  <div className="mb-3 login-form-input">
                    <input
                      type="password"
                      className="form-control"
                      id="inputField"
                      placeholder="Referal Code"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn submitButton"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAFriend;
