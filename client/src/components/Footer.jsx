import React from "react";
import logo from "../assets/logo.png";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 md:mt-40 border-t-[2px] border-t-black border-opacity-20">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 md:px-14 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col items-center md:items-start md:flex-1">
            <div className="flex items-center">
              <img src={logo} alt="" className="w-16 md:w-20" />
              <div className="font-Poppins text-[20px] font-semibold leading-5 md:leading-8 md:text-[30px]">
                <p>Savory</p>
                <p className="text-[#DA4444]">Delights</p>
              </div>
            </div>
            {/* socials */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="border border-slate-200 p-3 rounded-full cursor-pointer hover:bg-[#DA4444] hover:text-white">
                <BiLogoFacebook className="text-[22px]" />
              </div>
              <div className="border border-slate-200 p-3 rounded-full cursor-pointer hover:bg-[#DA4444] hover:text-white">
                <IoLogoInstagram className="text-[22px]" />
              </div>
              <div className="border border-slate-200 p-3 rounded-full cursor-pointer hover:bg-[#DA4444] hover:text-white">
                <SlSocialYoutube className="text-[22px]" />
              </div>
              <div className="border border-slate-200 p-3 rounded-full cursor-pointer hover:bg-[#DA4444] hover:text-white">
                <FaXTwitter className="text-[22px]" />
              </div>
            </div>
          </div>

          <div className="font-Poppins flex-1">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h1 className="font-semibold text-[20px]">Quick Links</h1>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="font-Poppins flex-1">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h1 className="font-semibold text-[20px]">Contact Information</h1>
              <p>123 Gourmet Street, Flavor Town, FT 45678</p>
              <p>(123) 456-7890</p>
              <p>info@savoryDelights.com</p>
              <div>
                <p>Hours of Operation:</p>
                <ul className="list-disc pl-5">
                  <li>Monday to Friday: 11:00 AM - 10:00 PM</li>
                  <li>Saturday to Sunday: 9:00 AM - 11:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="font-Poppins flex-1">
            <h1 className="font-semibold text-[20px] text-center md:text-left">
              Stay Updated:
            </h1>
            <div className="w-full md:w-[300px]">
              <p className="text-center md:text-left">
                Subscribe to our newsletter for the latest updates, special
                offers, and events
              </p>

              <div className="py-3">
                <form action="">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Your email"
                      className="w-full border py-2 focus:outline-none px-4"
                    />
                    <button
                      type="submit"
                      className="bg-[#DA4444] text-white px-4 py-2"
                    >
                      <RiArrowRightWideFill />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="font-Poppins mt-10 text-center md:text-start">
          <h1>© 2024 Gourmet Delights. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
