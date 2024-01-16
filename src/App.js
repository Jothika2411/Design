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
import Flights from "./Application/Booking/Flight/Flights";
import Shop from "./Application/Booking/Shop/Shop";
import DigiStore from "./Application/Booking/DigiStore/DigiStore";
import Hotels from "./Application/Booking/Hotels/Hotels";
import Search from "./Application/Booking/Flight/Search";
import HotelBooking from "./Application/Booking/Hotels/HotelBooking";
import FlightBookingSuccess from "./Application/Booking/Flight/FlightBookingSuccess";
import HotelBookingSuccess from "./Application/Booking/Hotels/HotelBookingSuccess";
import Electronics from "./Application/Booking/Shop/Electronics";
import QuickLink from "./Application/Booking/DigiStore/QuickLink";
import Cart from "./Application/Cart";
import Payment from "./Application/Payment";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/flights" element={<Flights />} />
          <Route path="/booking/flights/search" element={<Search />} />
          <Route
            path="/booking/flights/search/success"
            element={<FlightBookingSuccess />}
          />
          <Route path="/booking/shop" element={<Shop />} />
          <Route path="/booking/shop/electronics" element={<Electronics />} />
          <Route path="/booking/digistore" element={<DigiStore />} />
          <Route path="/booking/digistore/quicklink" element={<QuickLink />} />
          <Route path="/booking/hotels" element={<Hotels />} />
          <Route
            path="/booking/hotels/hotelbooking"
            element={<HotelBooking />}
          />
          <Route
            path="/booking/hotels/hotelbooking/success"
            element={<HotelBookingSuccess />}
          />
          <Route path="/referAFriend" element={<ReferAFriend />} />
          <Route path="/Survey" element={<Survey />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
