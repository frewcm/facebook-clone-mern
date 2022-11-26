import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../axios/Axios";
import ClipLoader from "react-spinners/ClipLoader";
import { atom, useAtom } from "jotai";

const userToken = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : undefined;
export const tokenAtom = atom(userToken);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useAtom(tokenAtom);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(loginUser, {
    onError: (error) => {
      console.log(error.message);
    },
    onSuccess: (data) => {
      localStorage.setItem("currentUser", JSON.stringify(data.token));
      setToken();
      navigate("/");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };
  console.log(email);
  console.log(password);

  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="w-96 flex flex-col m-5">
          <p className="text-5xl text-blue-500 font-bold mb-2">Facebook</p>
          <span>Connect with friends and the world around you on Facebook</span>
        </div>
        <div className="w-96 bg-white flex items-center justify-center rounded shadow-lg m-5">
          {isLoading && <ClipLoader size={60} />}

          <form className="flex flex-col justify-center items-center p-4">
            <input
              className="w-80 h-10 border border-gray-500 bg-blue-100 rounded mb-4 pl-2 focus:outline-blue-500"
              type="text"
              placeholder="email..."
              name="email"
              onChange={onChangeEmail}
            />
            <input
              className="w-80 h-10 border border-gray-500 bg-blue-100 rounded mb-4 pl-2 focus:outline-blue-500"
              type="password"
              placeholder="password..."
              name="password"
              onChange={onChangePassword}
            />
            <button
              onClick={handleLogin}
              type="submit"
              className="w-80 h-10 border border-gray-500 bg-blue-500 text-white rounded mb-4 pl-2"
            >
              Log In
            </button>

            <span className="text-blue-500 text-sm mb-2">Forgot Password</span>
            <hr className="w-80 mb-7 mt-3 text-black" />
            <Link to="/register">
              <button className="w-48 text-white h-10  bg-green-500  rounded mb-4 pl-2">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
