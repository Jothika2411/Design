import React from "react";
import Navbars from "../../../Constants/Navbars";
import digiStroImg from "../../../Assests/BookingDigi.png";
import QuickLInkOneImg from "../../../Assests/QuickLInksOne.png";
import QuickLInkTwoImg from "../../../Assests/QuickLInksTwo.png";
import QuickLInkThreeImg from "../../../Assests/QuickLInksThree.png";

const QuickLink = () => {
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
      <div className="row quicklink-cards">
        <div className="col-4 ">
          <div className="card quicklink-card shadow-lg">
            <img
              src={QuickLInkOneImg}
              className="card-img-top"
              alt="CardImage"
            />
            <div className="card-body quicklink-card-body">
              <div className="card-title quicklink-card-title">
                <p>Ovenstory</p>
                <span>120 Intermiles</span>
              </div>
              <div className="card-text quicklink-card-text">
                <h6>Get Flat INR 120 off on orders above INR 249</h6>
                <button className="btn submitButton quicklink-card-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 gx-sm-0">
          <div className="card quicklink-card shadow-lg">
            <img
              src={QuickLInkTwoImg}
              className="card-img-top"
              alt="CardImage"
            />
            <div className="card-body quicklink-card-body">
              <div className="card-title quicklink-card-title">
                <p>Wendy's</p>
                <span>120 Intermiles</span>
              </div>
              <div className="card-text quicklink-card-text">
                <h6>Get Flat INR 120 off on orders above INR 249</h6>
                <button className="btn submitButton quicklink-card-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 gx-sm-0">
          <div className="card quicklink-card shadow-lg">
            <img
              src={QuickLInkThreeImg}
              className="card-img-top"
              alt="CardImage"
            />
            <div className="card-body quicklink-card-body">
              <div className="card-title quicklink-card-title">
                <p>Firstcry</p>
                <span>120 Intermiles</span>
              </div>
              <div className="card-text quicklink-card-text">
                <h6>Get Flat INR 120 off on orders above INR 249</h6>
                <button className="btn submitButton quicklink-card-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
