import React from "react";
import check from "../assets/check.svg";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={check} alt="check-sign" className="check" />
        <h6 className="text-center mt-5">
          This app has been developed by the Developer team.
        </h6>
        <h1 className="text-center mt-5 header-text">Todos</h1>
      </div>
    </div>
  );
};

export default Header;
