import React from "react";
import { Link } from "react-router-dom";
import Navbars from "../../../Constants/Navbars";
import hotelImg from "../../../Assests/BookingHotels.png";
import shopOneImg from "../../../Assests/ShopOne.png";
import shopTwoImg from "../../../Assests/shopTwo.png";
import shopThreeImg from "../../../Assests/shopThree.png";
import shopFourImg from "../../../Assests/shopFour.png";

const Shop = () => {
  return (
    <div>
      <Navbars />
      <div className="hotels-card shadow-sm">
        <img
          src={hotelImg}
          alt=""
          style={{
            width: "50px",
            marginLeft: "70px",
            marginTop: "10px",
          }}
        />
      </div>
      <span style={{ marginLeft: "150px" }}>Shop</span>
      <div className="shop-header">
        <h3>Shop By Category</h3>
        <p>Browse through your favourite categories. We have got them all.</p>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card shop-card shadow-lg">
              <img src={shopOneImg} className="card-img-top" alt="CardImage" />
              <div className="card-body">
                <h5 className="card-title shop-card-title">
                  {" "}
                  <Link
                    to="/booking/shop/electronics"
                    style={{ textDecoration: "none", color: "#ef4044" }}
                  >
                    Electronics
                  </Link>
                </h5>
                <p className="card-text shop-card-text">Explore</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shop-card shadow-lg">
              <img src={shopTwoImg} className="card-img-top" alt="CardImage" />
              <div className="card-body">
                <h5 className="card-title shop-card-title">Personal Care</h5>
                <p className="card-text shop-card-text">Explore</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shop-card shadow-lg">
              <img
                src={shopThreeImg}
                className="card-img-top"
                alt="CardImage"
              />
              <div className="card-body">
                <h5 className="card-title shop-card-title">Apparels</h5>
                <p className="card-text shop-card-text">Explore</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shop-card shadow-lg">
              <img src={shopFourImg} className="card-img-top" alt="CardImage" />
              <div className="card-body">
                <h5 className="card-title shop-card-title">All</h5>
                <p className="card-text shop-card-text">Explore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
