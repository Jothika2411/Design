import React from "react";
import GroupLogo from "../Assests/Group.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Navbar, Nav } from "react-bootstrap";
import username from "../Assests/UserName.png";
import "../index.css";

const Navbars = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <img src={GroupLogo} alt="" />
      </div>
      <div>
        <img src={username} alt="" />
      </div>

      <div className="navbar-navbar">
        <Navbar className="navbar-list">
          <Nav>
            <Nav.Link
              href="/profile"
              className="navbar-lists"
              style={{
                color: "white",
                marginRight: "50px",
                marginLeft: "550px",
              }}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              href="/booking"
              style={{ color: "white", marginRight: "50px" }}
            >
              Booking
            </Nav.Link>
            <Nav.Link
              href="/referAFriend"
              style={{ color: "white", marginRight: "50px" }}
            >
              Refer a Friend
            </Nav.Link>
            <Nav.Link
              href="/survey"
              style={{ color: "white", marginRight: "50px" }}
            >
              Survey
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "white", marginLeft: "300px" }}>
              Your's Cart
              <span style={{ marginLeft: "5px" }}>
                <ShoppingCartOutlinedIcon />
              </span>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Navbars;
