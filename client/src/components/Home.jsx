import React from "react";
import img1 from "../assets/img1.jpg";
import { RiArrowDownWideFill } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { bookImgs, Foods, photos } from "../Data";
import plate from "../assets/plate.png";
import b1 from "../assets/b1.jpg";
const Home = () => {
  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        }}
      >
        <div className="text-white text-center">
          <h1 className="font-Square-Peg text-[70px] md:text-[150px]">
            Savor the <span className="text-[#F6F287]">Flavor</span>{" "}
          </h1>
          <p className="text-[12px] max-w-[400px] md:text-[15px] md:w-[570px] mx-auto px-5 font-Poppins text-gray-100">
            Enjoy culinary excellence and unique ambiance at Savory Delights.
            Our passionate chefs ensure a memorable dining experience. Join us
            for an unforgettable meal.
          </p>
          <div className="flex justify-center mt-10">
            <RiArrowDownWideFill className="text-5xl floating-arrow" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4 font-Poppins font-light">
        <h1 className="text-center font-Poppins text-2xl sm:text-4xl lg:text-3xl font-semibold">
          Discover What Makes Savory Delights Special
        </h1>
        <div className="max-w-[850px] mx-auto mt-4 text-center">
          <p className="text-sm sm:text-base lg:text-lg">
            At [Restaurant Name], we pride ourselves on our unique cuisine
            crafted by our renowned chef, [Chef’s Name]. Our dishes are a
            harmonious blend of traditional flavors and innovative techniques,
            creating a dining experience like no other.
          </p>
          <p className="mt-5 text-sm sm:text-base lg:text-lg">
            The exceptional ambiance of our restaurant, with its elegant decor
            and warm atmosphere, provides the perfect setting for any occasion.
            Whether you’re here for a casual meal or a special celebration, our
            commitment to excellence in both food and service ensures that every
            visit is memorable.
          </p>
        </div>
        <div className="flex justify-center items-center mt-5 font-Poppins font-medium">
          <button className="bg-[#DA4444] text-white flex py-2 px-5 items-center gap-2 rounded-md">
            <Link to="/about">View More</Link>
            <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
          </button>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <div className="font-Poppins font-semibold flex items-center gap-2">
              <h1 className="text-3xl sm:text-3xl md:text-4xl">
                Featured Photos
              </h1>
            </div>
            <div className="flex items-center mt-5 font-Poppins font-medium">
              <button className="border border-slate-400 flex py-2 px-5 items-center gap-2 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
                <Link to="/reservation">Visit More</Link>
                <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-col gap-20 md:flex md:flex-row md:gap-3 justify-between items-center w-full">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`${
                    index === 1 ? "flex-grow" : "flex-2"
                  } h-[300px] md:h-[500px]`}
                >
                  <img
                    src={photo.photoImg}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="font-Poppins mt-2">
                    <h1 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                      {photo.tag}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      {photo.descrip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-40">
            <div className="font-Poppins font-semibold flex items-center gap-2 mb-10">
              <h1 className="text-3xl sm:text-3xl md:text-4xl">
                Featured Dishes
              </h1>
            </div>

            <div className="flex flex-col justify-center lg:flex-row items-center gap-10 lg:gap-20">
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                {Foods.map((food) => (
                  <div
                    key={food.id}
                    className="border max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] mt-10 mx-auto p-5 rounded shadow-md hover:shadow-lg mb-5"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={food.foodImg}
                        alt=""
                        className="w-[150px] xs:w-[180px] sm:w-[200px] h-auto max-h-[150px] xs:max-h-[180px] sm:max-h-[200px] object-cover"
                      />
                      <div className="mt-5">
                        <h1 className="font-bold text-base sm:text-lg md:text-xl">
                          {food.title}
                        </h1>
                        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
                          {food.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 lg:mt-0 text-center lg:text-left">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
                  Signature <span className="text-[#DA4444]">Creations</span>
                </h1>
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl mt-2">
                  <span className="text-5xl sm:text-6xl md:text-7xl">100+</span>{" "}
                  Dishes
                </h1>
                <div className="max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] mx-auto mt-5">
                  <p className="text-sm sm:text-base md:text-lg">
                    Explore our culinary highlights with our selection of
                    signature dishes at [Restaurant Name]. From succulent steaks
                    to delicate seafood, each dish is crafted with the finest
                    ingredients and culinary expertise, ensuring a dining
                    experience like no other.
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-5 font-Poppins font-medium">
                  <button className="bg-[#DA4444] text-white flex py-2 px-5 items-center gap-2 rounded-md">
                    <Link to="/menu">Order Now</Link>
                    <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="font-Poppins font-semibold flex items-center gap-2 mb-10">
              <h1 className="text-3xl sm:text-3xl md:text-4xl">
                Featured Dishes
              </h1>
            </div>

            <div className="flex justify-center flex-col lg:flex-row items-center gap-10 lg:gap-20">
              <div className="mt-10 lg:mt-0 text-center lg:text-left">
                <div className="max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] mx-auto mt-5">
                  <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl pb-5">
                    Book a Dining{" "}
                    <span className="text-[#DA4444]">Experience</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg">
                    Plan your next dining experience at [Restaurant Name].
                    Whether you're celebrating a special occasion or simply
                    craving a delicious meal, we offer a seamless online booking
                    process to ensure your visit is unforgettable.
                  </p>

                  <div className="flex font-medium mt-5  justify-center items-center">
                    <div className="py-1 px-5 border-l border-l-[#DA4444]">
                      <h1 className="text-xs">Select Date & Time</h1>
                    </div>
                    <div className="py-1 px-5 border-l border-l-[#DA4444]">
                      <h1 className="text-xs">Party Size</h1>
                    </div>
                    <div className="py-1 px-5 border-l border-l-[#DA4444]">
                      <h1 className="text-xs">Special Requests</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start mt-5 font-Poppins font-medium">
                  <button className="bg-[#DA4444] text-white flex py-2 px-5 items-center gap-2 rounded-md">
                    <Link to="/menu">Book Now</Link>
                    <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {bookImgs.map((book) => (
                  <div key={book.id}>
                    <img src={book.photoImg} alt="" className="w-[300px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="font-Poppins font-semibold flex items-center gap-2 mb-10">
              <h1 className="text-3xl sm:text-3xl md:text-4xl">
                Special Offers & Promotions
              </h1>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row-reverse items-center text-center lg:text-left">
                <div
                  className="lg:w-1/2 flex flex-col justify-center text-center px-10"
                  style={{ height: "400px" }}
                >
                  <h1 className="text-[35px] font-Square-Peg">
                    Weekday Lunch Special
                  </h1>
                  <p className="mt-4">
                    Enjoy a 3-course lunch for $25, available Monday to Friday
                    from 11:30 AM to 2:30 PM.
                  </p>
                  <div className="flex justify-center my-5">
                    <button className="bg-[#DA4444] text-white flex py-2 px-5 items-center gap-2 rounded-md">
                      <Link to="/menu">Book Now</Link>
                      <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={b1}
                    alt="Weekday Lunch Special"
                    className="w-full h-[400px] object-cover rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
                <div
                  className="lg:w-1/2 flex flex-col justify-center text-center px-10"
                  style={{ height: "400px" }}
                >
                  <h1 className="text-[35px] font-Square-Peg">
                    Date Night Package
                  </h1>
                  <p className="mt-4">
                    Treat your loved one to a romantic dinner for two, including
                    a bottle of wine and dessert, for $100.
                  </p>
                  <div className="flex justify-center my-5">
                    <button className="bg-[#DA4444] text-white flex py-2 px-5 items-center gap-2 rounded-md">
                      <Link to="/menu">Book Now</Link>
                      <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={b1}
                    alt="Weekday Lunch Special"
                    className="w-full h-[400px] object-cover rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row-reverse items-center text-center lg:text-left">
                <div
                  className="lg:w-1/2 flex flex-col justify-center text-center px-10"
                  style={{ height: "400px" }}
                >
                  <h1 className="text-[35px] font-Square-Peg">Happy Hour</h1>
                  <p className="mt-4">
                    Join us for Happy Hour every weekday from 4 PM to 6 PM and
                    enjoy 50% off on select appetizers and drinks.
                  </p>
                  <div className="flex justify-center my-5">
                    <button className="bg-[#DA4444] text-white flex py-2 px-5 items-center gap-2 rounded-md">
                      <Link to="/menu">Book Now</Link>
                      <RiArrowRightSLine className="arrow-icon transition-transform duration-300 ease-in-out" />
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={b1}
                    alt="Weekday Lunch Special"
                    className="w-full h-[400px] object-cover rounded-md shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 container mx-auto px-5">
            <div className="font-Poppins font-semibold flex items-center gap-2 mb-10">
              <h1 className="text-3xl sm:text-3xl md:text-4xl">Contact Us </h1>
            </div>

            <div className="relative">
              <div className="absolute overflow-hidden -left-52 hidden md:block">
                <img
                  src={plate}
                  alt="Decorative plate"
                  className="w-full max-w-[500px]"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-20 items-center justify-center relative mt-20">
                <div className="w-full lg:w-[350px]">
                  <form action="">
                    <div className="flex flex-col gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full border py-2 focus:outline-none px-4 rounded-md"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Your email"
                          className="w-full border py-2 focus:outline-none px-4 rounded-md"
                        />
                      </div>
                      <div>
                        <textarea
                          rows="4"
                          name=""
                          id=""
                          className="w-full border py-2 focus:outline-none px-4 rounded-md"
                          placeholder="Write a message"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                  <button
                    type="submit"
                    className="mt-4 px-4 py-3 bg-[#DA4444] rounded w-full text-white font-Roboto font-medium"
                  >
                    Submit
                  </button>
                </div>

                <div className="text-center lg:text-left">
                  <h1 className="font-semibold text-[20px]">
                    Have a Question? Ask Us!
                  </h1>

                  <div className="mt-10">
                    <div>
                      <h1 className="font-semibold text-[#DA4444]">Phone:</h1>
                      <h1 className="font-medium">(123) 456-7890</h1>
                    </div>
                    <div className="mt-10">
                      <h1 className="font-semibold text-[#DA4444]">
                        Schedule:
                      </h1>
                      <h1 className="font-medium">9:00am - 11pm</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
