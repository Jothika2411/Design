import React from "react";
import Navbars from "../Constants/Navbars";
import profile from "../Assests/Profile.png";
import silverImage from "../Assests/Silver.png";
import GoldImage from "../Assests/Gold.png";
import PlatinumImage from "../Assests/Platinum.png";

const Profile = () => {
  return (
    <div>
      <Navbars />
      <div className="container profile-container">
        <div className="row g-0">
          <div className="col-6">
            <div
              className="card text-center mt-5 profile-card shadow"
              style={{ width: "400px", height: "400px" }}
            >
              <img
                src={profile}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="User"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Username</h5>
                <ul className="list-group list-group-flush list-unstyled">
                  <li className="list-group-item border-0">
                    <div className="row">
                      <div className="col-4">User ID</div>
                      <div className="col-1">:</div>
                      <div className="col">10021033</div>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="row">
                      <div className="col-4">Email</div>
                      <div className="col-1">:</div>
                      <div className="col">abc@gmail.com</div>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="row">
                      <div className="col-4">Mobile No</div>
                      <div className="col-1">:</div>
                      <div className="col">9988776655</div>
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="row">
                      <div className="col-4">DOB</div>
                      <div className="col-1">:</div>
                      <div className="col">12-SEP-2001</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="card  mt-5 achievements-card shadow"
              style={{ width: "400px", height: "400px" }}
            >
              <div className="container text-center mt-5">
                <h3 className="text-center mb-4 font-weight-bold">
                  Achievements
                </h3>

                <div className="container mt-3 d-flex align-items-center justify-content-center">
                  <div
                    className="card"
                    style={{ maxWidth: "600px", borderRadius: "15px" }}
                  >
                    <div className="card-body">icon</div>
                  </div>
                </div>

                <h5
                  className="mt-4 font-weight-bold"
                  style={{ marginRight: "280px" }}
                >
                  Points
                </h5>
                <div className="container points-container">
                  <div className="row g-0">
                    <div className="col">
                      <div className="card text-center points-card shadow">
                        <h6>
                          <img
                            src={GoldImage}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              marginTop: "10px",
                            }}
                          />
                        </h6>
                        <h6>Gold</h6>
                        <h6>10</h6>
                      </div>
                    </div>

                    <div className="col mb-3">
                      <div
                        className="card text-center points-card shadow"
                        style={{}}
                      >
                        <h6>
                          <img
                            src={silverImage}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              marginTop: "10px",
                            }}
                          />
                        </h6>
                        <h6>Silver</h6>
                        <h6>10</h6>
                      </div>
                    </div>

                    <div className="col mb-3">
                      <div
                        className="card text-center points-card shadow"
                        style={{}}
                      >
                        <h6>
                          <img
                            src={PlatinumImage}
                            alt=""
                            style={{
                              width: "20px",
                              height: "20px",
                              marginTop: "10px",
                            }}
                          />
                        </h6>
                        <h6>Platinum</h6>
                        <h6>10</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
