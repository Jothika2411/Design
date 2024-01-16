import React, { useState } from "react";
import Navbars from "../Constants/Navbars";
import cartImg from "../Assests/CartOne.png";
import cartTwoImg from "../Assests/cartTwo.png";
import "../index.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imageSrc: { cartImg },
      description: "Fastrack Smart Watch for Men",
      quantity: 2,
      amount: 5000,
    },
    {
      id: 2,
      imageSrc: { cartTwoImg },
      description: "Fastrack Smart Watch for Men",
      quantity: 2,
      amount: 5000,
    },
    {
      id: 3,
      imageSrc: { cartImg },
      description: "Fastrack Smart Watch for Men",
      quantity: 2,
      amount: 5000,
    },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <Navbars />
      <div className="card cart-card">
        <h5>Your's Cart</h5>
        <div className="card-body cart-card-body">
          {cartItems.map((item, id) => (
            <div className="row">
              <div className="col">
                <img
                  src={item.imageSrc}
                  alt={`Item ${item.id}`}
                  className="img-fluid"
                />
              </div>
              <div className="col">{item.description}</div>
              <div className="col">
                <div className="input-group" style={{ width: "60%" }}>
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={item.quantity}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <p>${item.amount.toFixed(2)}</p>
              </div>
              <div className="col">
                {" "}
                <button
                  className="btn submitButton-outlined"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="d-flex flex-row cart-buttons">
            <h6>
              Total:{" "}
              <span style={{ color: "#ef4044" }}>
                $
                {cartItems
                  .reduce((total, item) => total + item.amount, 0)
                  .toFixed(2)}
              </span>
            </h6>
            <button className="submitButton" style={{ marginLeft: "20px" }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
