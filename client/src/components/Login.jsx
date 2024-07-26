import React, { useState } from "react";
import loginImg from "../assets/loginImg.jpg";
import google from "../assets/search.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

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

    if (!hasError) {
      axios
        .post("http://localhost:3001/login", { email, password })
        .then((result) => {
          console.log("Server response:", result.data);
          if (result.data === "Success") {
            navigate("/");
          } else if (result.data === "The password is incorrect") {
            setPasswordError(result.data);
          } else if (result.data === "No record existed") {
            setEmailError(result.data);
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  };

  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="bg-white mx-5 w-[450px] py-10 px-10 rounded-lg font-Poppins">
          <h1 className="text-center mb-10 text-3xl font-medium">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                id="email"
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
                className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p className="text-red-500 text-xs pb-1 ml-3">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#DA4444] text-sm w-full rounded-md hover:bg-red-700 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline"
              >
                SIGN IN
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
          </form>
          <div className="font-Poppins flex flex-col gap-2">
            <div className="w-full border border-slate-300 py-2 rounded-md relative flex items-center cursor-pointer hover:bg-slate-100">
              <i className="fa-brands fa-facebook text-xl text-[#398fd0] absolute left-3"></i>
              <h1 className="flex-grow text-center text-sm text-slate-900">
                SIGN IN WITH FACEBOOK
              </h1>
            </div>
            <div className="w-full border border-slate-300 py-2 rounded-md relative flex items-center cursor-pointer hover:bg-slate-100">
              <img
                src={google}
                alt=""
                className=" text-xl text-[#398fd0] absolute left-3 w-5"
              />
              <h1 className="flex-grow text-center text-sm text-slate-900">
                SIGN IN WITH GOOGLE
              </h1>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-sm">Not a member yet?</h1>
            <Link
              to="/signup"
              className="text-sm w-full border border-slate-300 py-2 rounded-md relative flex items-center justify-center cursor-pointer hover:bg-slate-100"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
