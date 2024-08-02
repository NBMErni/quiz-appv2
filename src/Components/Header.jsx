import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
      navigate("/");
    }
  };

  // console.log(user);

  return (
    <header className="flex justify-between  items-center relative mx-5">
      <Logo />
      <Navbar
        handleAuthClick={handleAuthClick()}
        handleIsAuthenticated={isAuthenticated}
      />
    </header>
  );
};

export default Header;

// <div className="flex justify-between mx-5 mt-5 items-center ">
//       <div className="relative ">
//         <img
//           src="../../public/images/gradhat.png"
//           alt="grad hat"
//           className="absolute w-1/2 sm:w-[70px] md:w-[50px] md:right-[145px] md:bottom-[17px]"
//         />
//         <h1 className="text-4xl">
//           Quiz <span className="text-amber-400">Grad</span>
//         </h1>
//       </div>
//       <div className="">
//         <ul className="flex gap-10 items-center">
//           <li className="text-gray-400">How it works?</li>
//           <li className="text-gray-400">Features?</li>
//           <li className="text-gray-400">About us</li>
//           <button
//             onClick={handleAuthClick}
//             className="px-3 py-2 border-2  border-amber-400 ounded-md text-amber-400"
//           >
//             {isAuthenticated ? "Logout" : "Login"}
//           </button>
//         </ul>
//       </div>
//     </div>
