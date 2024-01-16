import React from "react";
import Navbars from "../../../Constants/Navbars";
import shopOneImg from "../../../Assests/ShopOne.png";
import ElectronicsOneImg from "../../../Assests/ElectronicsOne.png";
import ElectronicsTwoImg from "../../../Assests/ElectronicsTwo.png";
import ElectronicsThreeImg from "../../../Assests/ElectronicsThree.png";

const Electronics = () => {
  return (
    <div>
      <Navbars />
      <div className="hotels-card shadow-sm">
        <img
          src={shopOneImg}
          alt=""
          style={{
            width: "120px",
            borderRadius: "15px",
          }}
        />
      </div>
      <span style={{ marginLeft: "150px" }}>Electronics</span>
      <div className="row electronics-cards">
        <div className="col-4 ">
          <div className="card electronics-card shadow-lg">
            <img
              src={ElectronicsOneImg}
              className="card-img-top"
              alt="CardImage"
            />
            <div className="card-body">
              <h5 className="card-title">
                Earn 5 Intermiles per Rs 100 spent.
              </h5>

              <button className="btn submitButton hotel-card-button">
                Earn now
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 gx-sm-0">
          <div className="card electronics-card shadow-lg">
            <img
              src={ElectronicsTwoImg}
              className="card-img-top"
              alt="CardImage"
            />
            <div className="card-body">
              <h5 className="card-title">
                Earn 5 Intermiles per Rs 100 spent.
              </h5>

              <button className="btn submitButton hotel-card-button">
                Earn now
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 gx-sm-0">
          <div className="card electronics-card shadow-lg">
            <img
              src={ElectronicsThreeImg}
              className="card-img-top"
              alt="CardImage"
            />
            <div className="card-body">
              <h5 className="card-title">
                Earn 5 Intermiles per Rs 100 spent.
              </h5>

              <button className="btn submitButton hotel-card-button">
                Earn Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
