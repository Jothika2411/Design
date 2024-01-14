import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Application/Profile";
import Booking from "./Application/Booking/Booking";
import ReferAFriend from "./Application/ReferAFriend";
import Survey from "./Application/Survey";
import "./index.css";
import Login from "./Application/Forms/Login";
import Register from "./Application/Forms/Register";
import ForgotPassword from "./Application/Forms/ForgotPassword";
import Flights from "./Application/Booking/Flights";
import Shop from "./Application/Booking/Shop";
import DigiStore from "./Application/Booking/DigiStore";
import Hotels from "./Application/Booking/Hotels";
import Search from "./Application/Booking/Search";
import Success from "./Application/Booking/Success";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/flights" element={<Flights />} />
          <Route path="/booking/flights/search" element={<Search />} />
          <Route path="/booking/flights/search/success" element={<Success />} />
          <Route path="/booking/shop" element={<Shop />} />
          <Route path="/booking/digistore" element={<DigiStore />} />
          <Route path="/booking/hotels" element={<Hotels />} />
          <Route path="/referAFriend" element={<ReferAFriend />} />
          <Route path="/Survey" element={<Survey />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
