import React from "react";
import GroupLogo from "../Assests/Group.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={GroupLogo} alt="" />
      </div>
      <div className="header-navbar"></div>
    </div>
  );
};

export default Header;
