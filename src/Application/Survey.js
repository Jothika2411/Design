import React, { useState } from "react";
import Navbars from "../Constants/Navbars";

const Survey = () => {
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleChange = (question, value) => {
    setFormData({
      ...formData,
      [question]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <Navbars />
      <div className="container mt-4">
        <div className="card shadow-lg" style={{ borderRadius: "15px" }}>
          <div className="card-title survey-card-title">---Survey Form---</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3 survey-question">
                <h5>1. How often do you use Intermiles services?</h5>
                <form className="d-flex flex-row">
                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Daily"
                      checked={formData.q1 === "Daily"}
                      onChange={() => handleChange("q1", "Daily")}
                    />
                    <label className="form-check-label">Daily</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Weekly"
                      checked={formData.q1 === "Weekly"}
                      onChange={() => handleChange("q1", "Weekly")}
                    />
                    <label className="form-check-label">Weekly</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Monthly"
                      checked={formData.q1 === "Monthly"}
                      onChange={() => handleChange("q1", "Monthly")}
                    />
                    <label className="form-check-label">Monthly</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Rarely"
                      checked={formData.q1 === "Rarely"}
                      onChange={() => handleChange("q1", "Rarely")}
                    />
                    <label className="form-check-label">Rarely</label>
                  </div>
                </form>
              </div>

              <div className="col-md-6 survey-question">
                <h5>2. What intermiles services do you use most frequently?</h5>
                <form className="d-flex flex-row survey-form">
                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Flight bookings"
                      checked={formData.q1 === "Flight bookings"}
                      onChange={() => handleChange("q1", "Flight bookings")}
                    />
                    <label className="form-check-label ">Flight bookings</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Hotel bookings"
                      checked={formData.q1 === "Hotel bookings"}
                      onChange={() => handleChange("q1", "Hotel bookings")}
                    />
                    <label className="form-check-label">Hotel bookings</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Shopping"
                      checked={formData.q1 === "Shopping"}
                      onChange={() => handleChange("q1", "Shopping")}
                    />
                    <label className="form-check-label">Shopping</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Other"
                      checked={formData.q1 === "Other"}
                      onChange={() => handleChange("q1", "Other")}
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </form>
              </div>
              <div className="col-md-6 survey-question">
                <h5>
                  3. How do you prefer to receive updates and promotions from
                  Intermiles?
                </h5>
                <form className="d-flex flex-row">
                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Email"
                      checked={formData.q1 === "Email"}
                      onChange={() => handleChange("q1", "Email")}
                    />
                    <label className="form-check-label">Email</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="SMS"
                      checked={formData.q1 === "SMS"}
                      onChange={() => handleChange("q1", "SMS")}
                    />
                    <label className="form-check-label">SMS</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Others"
                      checked={formData.q1 === "Others"}
                      onChange={() => handleChange("q1", "Others")}
                    />
                    <label className="form-check-label">Others</label>
                  </div>
                </form>
              </div>
              <div className="col-md-6 survey-question">
                <h5>
                  4. Are you satisfied with the benefits and rewards of the
                  loyality program?
                </h5>
                <form className="d-flex flex-row">
                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="Yes"
                      checked={formData.q1 === "Yes"}
                      onChange={() => handleChange("q1", "Yes")}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="No"
                      checked={formData.q1 === "No"}
                      onChange={() => handleChange("q1", "No")}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </form>
              </div>
              <div className="col-md-6  survey-question">
                <h5>
                  5. On a scale from 0 tp 10, hpw likely are you to recommended
                  intermiles products and services to friends or colleagues?
                </h5>
                <form className="d-flex flex-row">
                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="1-3"
                      checked={formData.q1 === "1-3"}
                      onChange={() => handleChange("q1", "1-3")}
                    />
                    <label className="form-check-label">1-3</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="4-8"
                      checked={formData.q1 === "4-8"}
                      onChange={() => handleChange("q1", "4-8")}
                    />
                    <label className="form-check-label">4-8</label>
                  </div>

                  <div className="form-check survey-form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="q1"
                      value="9-10"
                      checked={formData.q1 === "9-10"}
                      onChange={() => handleChange("q1", "9-10")}
                    />
                    <label className="form-check-label">9-10</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3" style={{ float: "right" }}>
              <div className="col-md-12 text-right">
                <button
                  className="btn submitButton-outlined "
                  style={{ marginRight: "20px" }}
                >
                  Cancel
                </button>
                <button
                  className="btn submitButton mr-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
