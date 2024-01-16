import React from "react";
import Navbars from "../../../Constants/Navbars";
import digiStroImg from "../../../Assests/BookingDigi.png";
import digiStoreOneImg from "../../../Assests/DigiStoreOne.png";
import digiStoreTwoImg from "../../../Assests/DigiStoreTwo.png";
import digiStoreThreeImh from "../../../Assests/DigiStoreThree.png";
import digiStoreFourImh from "../../../Assests/DigiStoreFour.png";

const DigiStore = () => {
  return (
    <div>
      <Navbars />
      <div className="hotels-card shadow-sm">
        <img
          src={digiStroImg}
          alt=""
          style={{
            width: "50px",
            marginLeft: "70px",
            marginTop: "10px",
          }}
        />
      </div>
      <span style={{ marginLeft: "150px" }}>Digi Store</span>
      <div className="digistore-header">
        <h3>Quick Links</h3>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card digistore-card shadow-lg">
              <img
                src={digiStoreOneImg}
                className="card-img-top"
                alt="CardImage"
              />
              <div className="card-body">
                <h5 className="card-title digistore-card-title"> Deals</h5>
                <p className="card-text digistore-card-text">Explore</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card digistore-card shadow-lg">
              <img
                src={digiStoreTwoImg}
                className="card-img-top"
                alt="CardImage"
              />
              <div className="card-body">
                <h5 className="card-title digistore-card-title">Vochers</h5>
                <p className="card-text digistore-card-text">Explore</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card digistore-card shadow-lg">
              <img
                src={digiStoreThreeImh}
                className="card-img-top"
                alt="CardImage"
              />
              <div className="card-body">
                <h5 className="card-title digistore-card-title">Raffels</h5>
                <p className="card-text digistore-card-text">Explore</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card digistore-card shadow-lg">
              <img
                src={digiStoreFourImh}
                className="card-img-top"
                alt="CardImage"
              />
              <div className="card-body">
                <h5 className="card-title digistore-card-title">events</h5>
                <p className="card-text digistore-card-text">Explore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiStore;
