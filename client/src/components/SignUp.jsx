import React, { useState } from "react";
import loginImg from "../assets/loginImg.jpg";
import google from "../assets/search.png";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        toast.success("Registered successfully!");
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 400) {
          toast.error("An account with this email already exists.");
        } else {
          toast.error(
            "An error occurred during registration. Please try again."
          );
        }
      });
    let hasError = false;

    if (!name) {
      setNameError("Please enter your name");
      hasError = true;
    } else {
      setEmailError(null);
    }
    if (!email) {
      setEmailError("Please enter your email");
      hasError = true;
    } else {
      setEmailError(null);
    }
    if (!password) {
      setPasswordError("Please enter your password");
      hasError = true;
    } else {
      setPasswordError(null);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        }}
      >
        <div className="bg-white mx-5 w-[450px] py-10 px-10 rounded-lg font-Poppins">
          <h1 className="text-center mb-10 text-3xl font-medium">Sign Up</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                id="name"
                required
                className="appearance-none border-b rounde w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && (
                <p className="text-red-500 text-xs ml-3 pb-1">{nameError}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                id="email"
                required
                className="appearance-none border-b rounde w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="text-red-500 text-xs ml-3 pb-1">{emailError}</p>
              )}
            </div>

            <div className="">
              <input
                type="password"
                value={password}
                id="password"
                required
                className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-500 text-xs  pb-1 ml-3">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#DA4444] text-sm w-full rounded-md hover:bg-red-700 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                SIGN UP
              </button>
            </div>
          </form>

          <div className="mt-10">
            <h1 className="text-sm">Not a member yet?</h1>
            <Link
              to="/login"
              className=" text-sm w-full border border-slate-300 py-2 rounded-md relative flex items-center justify-center cursor-pointer hover:bg-slate-100"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
