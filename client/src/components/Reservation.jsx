import React, { useEffect, useState } from "react";
import bgReserve from "../assets/bgreservation.jpg";
import { FaRegCalendar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker

const Reservation = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [timeValue, setTimeValue] = useState("8:00 AM"); // State for selected time
  const [personValue, setPersonValue] = useState("2 People"); // State for selected time
  const [showTimeOptions, setShowTimeOptions] = useState(false); // State to toggle dropdown
  const [showPersonOptions, setShowPersonOptions] = useState(false); // State to toggle dropdown

  // Function to format the date as "YYYY-MM-DD"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Update formatted date whenever dateValue changes
  useEffect(() => {
    setDateValue(new Date());
  }, []);

  // Available time options
  const timeOptions = [
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];
  const personOptions = [
    "2 People",
    "3 People",
    "4 People",
    "5 People",
    "6 People",
    "7 People",
    "8 People",
    "9 People",
  ];

  return (
    <div>
      <div
        className="w-full h-[40vh] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgReserve})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-white text-center">
          <h1 className="font-Square-Peg text-[70px] md:text-[150px]">
            Reservations
          </h1>
        </div>
      </div>
      <div className="font-Poppins container mx-auto mt-20">
        <div className="md:flex md:flex-row md:gap-5 md:items-center mb-20 flex flex-col gap-5 mx-5">
          <div className="w-full text-center rounded-md p-5 border border-black hover:bg-[#DA4444] hover:text-white cursor-pointer hover:border-none">
            <h1>NEWPORT WORLD RESORTS</h1>
          </div>
          <div className="w-full text-center rounded-md p-5 border border-black hover:bg-[#DA4444] hover:text-white cursor-pointer hover:border-none">
            <h1>BONIFACIO GLOBAL CITY</h1>
          </div>
        </div>

        <h1 className="text-center font-semibold text-[30px]">
          Make reservation
        </h1>

        <div className="mt-20">
          <form action="">
            <div className="flex flex-wrap items-center gap-5 mx-10">
              <div className="shadow-md rounded-lg w-full md:w-auto flex-1 cursor-pointer border border-slate-300 hover:border-slate-400">
                <div className="flex justify-between items-center p-5">
                  <div className="flex items-center gap-5">
                    <FaRegCalendar className="text-[25px]" />
                    <div>
                      <p className="text-gray-500">Date</p>
                      <DatePicker
                        selected={dateValue}
                        onChange={(date) => setDateValue(date)}
                        className="outline-none border-none"
                      />
                    </div>
                  </div>
                  <div>
                    <TiArrowSortedDown className="text-[35px]" />
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-lg w-full md:w-auto flex-1 cursor-pointer border border-slate-300 hover:border-slate-400 relative">
                <div
                  className="flex justify-between items-center p-5"
                  onClick={() => setShowTimeOptions(!showTimeOptions)}
                >
                  <div className="flex items-center gap-5">
                    <MdAccessTime className="text-[25px]" />
                    <div>
                      <p className="text-gray-500">Time</p>
                      <h1>{timeValue}</h1>
                    </div>
                  </div>
                  <div>
                    <TiArrowSortedDown className="text-[35px]" />
                  </div>
                </div>
                {showTimeOptions && (
                  <div className="absolute z-10 bg-white shadow-md rounded-lg w-full mt-2">
                    {timeOptions.map((time, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setTimeValue(time);
                          setShowTimeOptions(false);
                        }}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="shadow-md rounded-lg w-full md:w-auto flex-1 cursor-pointer border border-slate-300 hover:border-slate-400 relative">
                <div
                  className="flex justify-between items-center p-5"
                  onClick={() => setShowPersonOptions(!showPersonOptions)}
                >
                  <div className="flex items-center gap-5">
                    <MdAccessTime className="text-[25px]" />
                    <div>
                      <p className="text-gray-500">Time</p>
                      <h1>{personValue}</h1>
                    </div>
                  </div>
                  <div>
                    <TiArrowSortedDown className="text-[35px]" />
                  </div>
                </div>
                {showPersonOptions && (
                  <div className="absolute z-10 bg-white shadow-md rounded-lg w-full mt-2">
                    {personOptions.map((person, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setPersonValue(person);
                          setShowPersonOptions(false);
                        }}
                      >
                        {person}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-center w-full md:w-auto bg-[#DA4444] rounded-lg mx-auto cursor-pointer">
                <button className="p-5 text-white font-semibold w-full md:w-auto">
                  Find a table
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-20 border-b border-b-gray-30">
        <h1 className="text-[#DA4444] font-semibold text-center text-[30px]">
          Your details
        </h1>
        <div className="flex flex-col md:flex-row md:w-full md:space-x-4 md:gap-20 m-10 gap-10">
          <div className="flex-1">
            <form action="">
              <div className="md:grid md:grid-cols-2 md:gap-4 grid grid-cols-1 gap-4 ">
                <div>
                  <input
                    type="text"
                    className="shadow-md rounded-lg text-[15px] p-4 w-full border border-slate-200"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="shadow-md rounded-lg text-[15px] p-4 w-full border border-slate-200"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    className="shadow-md rounded-lg text-[15px] p-4 w-full border border-slate-200"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <select
                    className="shadow-md rounded-lg text-[15px] p-4 w-full border border-slate-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Occasion (Optional)
                    </option>
                    <option value="birthday">Birthday</option>
                    <option value="graduation">Graduation</option>
                    <option value="party">Party</option>
                  </select>
                </div>

                <div>
                  <input
                    type="Email"
                    className="shadow-md rounded-lg text-[15px] p-4 w-full border border-slate-200"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    className="shadow-md rounded-lg text-[15px] p-4 w-full border border-slate-200"
                    placeholder="Add special request"
                  />
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full font-Poppins font-semibold p-5 rounded-md text-white bg-[#DA4444]"
                >
                  Confirm booking
                </button>
              </div>
            </form>
          </div>

          <div className="font-Poppins">
            <div>
              <h1 className="text-[20px] font-medium mb-4">
                NEWPORT WORLD RESORTS
              </h1>
            </div>

            <div className="flex flex-col gap-3">
              <div className=" flex items-center gap-5">
                <FaRegCalendar className="text-[25px]" />
                <div className="">
                  <h1 className="text-gray-500">{formatDate(dateValue)}</h1>
                </div>
              </div>

              <div className=" flex items-center gap-5">
                <MdAccessTime className="text-[25px]" />
                <div className="">
                  <h1 className="text-gray-500">{timeValue}</h1>
                </div>
              </div>

              <div className=" flex items-center gap-5">
                <IoPersonOutline className="text-[25px]" />
                <div className="">
                  <h1 className="text-gray-500">2 People</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-Poppins mt-10 container mx-auto px-10">
        <h1 className="text-[20px] font-medium">What to know before you go</h1>
        <div className="md:flex md:flex-row md:gap-10 flex flex-col mt-5 gap-10">
          <div>
            <h1 className="font-medium">Important dining information</h1>
            <p>
              Indulge in the exquisite flavors and meticulous presentation of
              our signature Savory Delights dishes. From the first bite to the
              last, experience a culinary journey that delights the senses.
            </p>
            <p>
              Your table will be reserved for 1 hour 30 minutes for parties of
              up to 2; 2 hours for parties of up to 4; 2 hours 30 minutes for
              parties of up to 6; and 3 hours for parties of 7+.
            </p>
          </div>
          <div>
            <h1 className="font-medium">A note from the restaurant</h1>
            <p>
              Dear valued guest, As we strive to accommodate all guests, we
              kindly ask that you arrive promptly to enjoy your dining
              experience to the fullest. Thank you for your cooperation and
              continued support. For any concern, you may contact the store at:
              +639171449787
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
