import React from "react";
import logo from "../../public/images/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="grad hat" className="w-[150px]" />
    </div>
  );
};

export default Logo;
