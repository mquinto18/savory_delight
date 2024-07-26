import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <div className="flex justify-center items-center px-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="w-16" />
            <div className="font-Poppins font-semibold leading-4 text-[18px]">
              <p>Savory</p>
              <p className="text-[#DA4444]">Delights</p>
            </div>
          </div>

          <div className="sm:block hidden md:flex md:justify-center md:items-center gap-5 font-Poppins text-[15px]">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {user ? (
            <ProfileInfo user={user} />
          ) : (
            <div className="bg-[#DA4444] px-5 rounded-md py-3 sm:block hidden">
              <div className="flex justify-center font-Poppins items-center gap-2 text-[15px] text-white">
                <Link to="/login">Login</Link>
                <div className="bg-white w-[2px] h-4"></div>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="sm:hidden flex items-center">
        <button
          className="text-black focus:outline-none"
          onClick={() => setToggle(!toggle)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {toggle ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {toggle && (
        <div className="font-Poppins absolute top-20 w-full px-4 z-10">
          <div className="bg-white rounded-md py-5 px-4 gap-2 flex flex-col shadow-md">
            <Link
              to="/"
              className="py-2 hover:bg-slate-100 px-2 rounded-md"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="py-2 hover:bg-slate-100 px-2 rounded-md"
              onClick={handleLinkClick}
            >
              Menu
            </Link>
            <Link
              to="/reservation"
              className="py-2 hover:bg-slate-100 px-2 rounded-md"
              onClick={handleLinkClick}
            >
              Reservation
            </Link>
            <Link
              to="/about"
              className="py-2 hover:bg-slate-100 px-2 rounded-md"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:bg-slate-100 px-2 rounded-md"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            <div className="bg-[#DA4444] px-5 rounded-md py-3">
              <div className="flex justify-center font-Poppins items-center gap-12 text-[15px] text-white">
                <Link to="/login" onClick={handleLinkClick}>
                  Login
                </Link>
                <div className="bg-white w-[2px] h-4"></div>
                <Link to="/signup" onClick={handleLinkClick}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
