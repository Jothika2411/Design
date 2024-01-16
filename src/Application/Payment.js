import React, { useState } from "react";
import Navbars from "../Constants/Navbars";
import payemntImg from "../Assests/Payment.png";
import percentageImg from "../Assests/Percentage.png";
import PhonepeImg from "../Assests/phonepe.png";
import gPayImg from "../Assests/gpay.png";
import paytmImg from "../Assests/paytm.png";
import successImg from "../Assests/paymentSuccess.png";
import succesIconImg from "../Assests/SuccessIcon.png";

const Payment = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [checkout, setCheckout] = useState(false);
  const [success, setSuccess] = useState(false);

  var amount = 6543;
  const coupons = [
    { id: 1, code: "ABDY124ASKASD", discount: 10, amount: 1234 },
    { id: 2, code: "QWE24ASKASDAS ", discount: 5 },
  ];

  const handleCouponChange = (couponId) => {
    setSelectedCoupon(couponId);
  };

  const calculateDiscountedAmount = () => {
    if (selectedCoupon) {
      const selectedDiscount = coupons.find(
        (coupon) => coupon.id === selectedCoupon
      ).discount;
      // Replace the following line with your actual logic to calculate the discounted amount
      const originalAmount = 100; // Example original amount, replace it with your actual amount
      const discountedAmount =
        originalAmount - (originalAmount * selectedDiscount) / 100;
      return discountedAmount.toFixed(2); // Adjust as needed
    }
    return null;
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Navbars />
      {success ? (
        <>
          <div className="success-card">
            <div className="row">
              <div
                className="col card success-column"
                style={{ borderRadius: "15px", marginTop: "30px" }}
              >
                <img
                  src={succesIconImg}
                  alt=""
                  className="success-image"
                  style={{ marginBottom: "10px" }}
                />
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    marginBottom: "40px",
                  }}
                >
                  Your order has been received
                </p>
                <p
                  style={{
                    color: "#ef4044",
                    fontSize: "30px",
                    lineHeight: "0",
                    marginBottom: "100px",
                  }}
                >
                  Successfully.
                </p>
              </div>

              <div className="col">
                <img src={successImg} alt="" style={{ width: "100%" }} />
              </div>
            </div>
            <button
              className="submitButton"
              style={{
                width: "30%",
                marginTop: "30px",
                padding: "10px",
                marginLeft: "90px",
              }}
            >
              Continue Shoppimg
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="row">
            <div className="col">
              <div className="card payment-card shadow-lg">
                {checkout === true ? (
                  <>
                    <div className="card-body payment-card-body">
                      <h5>Order Summary</h5>
                      <div className="payment-card-description">
                        <div className="row">
                          <div className="col-8 ">
                            <h5>You Pay</h5>
                            <p>INCLUSIVE OF ALL TAXES*</p>
                          </div>
                          <div className="col payment-amount">
                            <p>$54345</p>
                            <p>$54345</p>
                            <p>$54345</p>
                          </div>
                        </div>
                      </div>
                      <div className="payment-gateway">
                        <div className="row">
                          <div className="col">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <img
                              src={PhonepeImg}
                              alt="altImage"
                              style={{
                                width: "90px",

                                marginLeft: "10px",
                              }}
                            />
                          </div>
                          <div className="col">
                            {" "}
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <img
                              src={gPayImg}
                              alt="altImage"
                              style={{
                                width: "50px",

                                marginLeft: "15px",
                              }}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            {" "}
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <img
                              src={paytmImg}
                              alt="altImage"
                              style={{
                                width: "90px",

                                marginLeft: "10px",
                              }}
                            />
                          </div>
                          <div className="col d-flex flex-row">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <p
                              style={{ marginLeft: "10px", marginTop: "30px" }}
                            >
                              Net Banking
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            alignItems: "center",
                            textAlign: "center",
                            justifyContent: "center",
                          }}
                        >
                          <button
                            className="submitButton"
                            onClick={() => setSuccess(true)}
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-body payment-card-body">
                      <div className="payment-card-body-title">
                        <h5>Order Summary</h5>
                        <div className="row">
                          <div className="col-8">
                            <p>Order total(4 Items)</p>
                          </div>
                          <div className="col payment-amount">
                            <p>$65134</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <p>Shipping</p>
                          </div>
                          <div className="col payment-amount">
                            <p>FREE</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <p>Discount</p>
                          </div>
                          <div className="col payment-amount">
                            <div>
                              {selectedCoupon ? (
                                <>
                                  <p>{`$${calculateDiscountedAmount()}`}</p>
                                </>
                              ) : (
                                <>
                                  <p>$0000</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment-card-body-title">
                        <h5>Add Your Coupon</h5>
                        <p style={{ fontSize: "10px" }}>Available Coupons</p>
                        <form>
                          {selectedCoupon ? (
                            <>
                              <div className="d-flex flex-row selected-coupon">
                                <img
                                  src={percentageImg}
                                  alt=""
                                  style={{
                                    width: "4%",
                                    height: "4%",
                                    borderRadius: "50%",
                                  }}
                                />
                                <p>Your Coupon has been Applied</p>
                              </div>
                            </>
                          ) : (
                            <>
                              {coupons.map((coupon) => (
                                <div key={coupon.id}>
                                  <label className="coupon">
                                    <img
                                      src={percentageImg}
                                      alt=""
                                      style={{
                                        width: "4%",
                                        height: "4%",
                                        borderRadius: "50%",
                                      }}
                                    />
                                    {`use this coupol code ${coupon.code} -  ${coupon.discount}% off`}
                                  </label>
                                  <div>
                                    <input
                                      type="radio"
                                      name="coupon"
                                      className="coupon-input"
                                      value={coupon.id}
                                      checked={selectedCoupon === coupon.id}
                                      onChange={() =>
                                        handleCouponChange(coupon.id)
                                      }
                                    />
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        </form>
                      </div>
                      <div className="payment-card-description">
                        <div className="row">
                          <div className="col-8 ">
                            <h5>You Pay</h5>
                            <p>INCLUSIVE OF ALL TAXES*</p>
                          </div>
                          <div className="col payment-amount">
                            <p style={{ fontSize: "20px" }}>${amount}</p>

                            <p style={{ fontSize: "20px" }}>
                              {selectedCoupon && (
                                <>
                                  <p
                                    style={{ fontSize: "20px" }}
                                  >{`-$${calculateDiscountedAmount()}`}</p>
                                </>
                              )}

                              <p style={{ fontSize: "20px" }}>
                                $
                                {selectedCoupon &&
                                  amount - calculateDiscountedAmount()}
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="submitButton"
                        style={{ width: "100%", padding: "5px" }}
                        onClick={() => setCheckout(true)}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col">
              <img src={payemntImg} alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
