import React from "react";
import menuImg from "../assets/menuImg.jpg";
import appetizer from "../assets/appetizer.jpg";
import mainCourse from "../assets/mainCourse.jpg";
import dessert from "../assets/dessert.jpg";
import beverages from "../assets/beveranges.jpg";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowDownWideFill } from "react-icons/ri";

const Menu = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${menuImg})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        }}
      >
        <div className="text-white text-center">
          <h1 className="font-Square-Peg text-[70px] md:text-[150px]">
            Check out the <span className="text-[#F6F287]">menu</span>{" "}
          </h1>
          <p className="text-[12px] max-w-[400px] md:text-[15px] md:w-[570px] mx-auto px-5 font-Poppins text-gray-100">
            Explore our menu at Savory Delights, featuring a delicious array of
            appetizers, entrees, and desserts crafted with passion and quality
            ingredients.
          </p>
          <div className="flex justify-center mt-10">
            <RiArrowDownWideFill className="text-5xl floating-arrow" />
          </div>
        </div>
      </div>

      <div className="font-Poppins container mx-auto mt-20">
        <h1 className="text-center font-semibold text-[30px]">
          Menu Categories
        </h1>

        <div className="md:grid md:grid-cols-2 flex flex-col gap-5 mt-10 mx-5">
          <div className="shadow-md rounded-lg">
            <div className="">
              <img
                src={appetizer}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="mt-5 px-10 flex justify-between items-center pb-3">
                <h1 className="font-medium text-[25px] md:text-[30px]">
                  Appetizers
                </h1>

                <div>
                  <button
                    type="submit"
                    className="bg-[#DA4444] text-white px-4 py-4 rounded-md"
                  >
                    <RiArrowRightWideFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-lg">
            <div className="">
              <img
                src={mainCourse}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="mt-5 px-10 flex justify-between items-center pb-3">
                <h1 className="font-medium text-[25px] md:text-[30px]">
                  Main Course
                </h1>

                <div>
                  <button
                    type="submit"
                    className="bg-[#DA4444] text-white px-4 py-4 rounded-md"
                  >
                    <RiArrowRightWideFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-lg">
            <div className="">
              <img
                src={dessert}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="mt-5 px-10 flex justify-between items-center pb-3">
                <h1 className="font-medium text-[25px] md:text-[30px]">
                  Dessert
                </h1>

                <div>
                  <button
                    type="submit"
                    className="bg-[#DA4444] text-white px-4 py-4 rounded-md"
                  >
                    <RiArrowRightWideFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded-lg">
            <div className="">
              <img
                src={beverages}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="mt-5 px-10 flex justify-between items-center pb-3">
                <h1 className="font-medium text-[25px] md:text-[30px]">
                  Beverages
                </h1>

                <div>
                  <button
                    type="submit"
                    className="bg-[#DA4444] text-white px-4 py-4 rounded-md"
                  >
                    <RiArrowRightWideFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
