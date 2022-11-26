import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../axios/Axios";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation(registerUser, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
    console.log(data);
  };

  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="w-96 flex flex-col m-5">
          <p className="text-5xl text-blue-500 font-bold mb-2">Facebook</p>
          <span>Connect with friends and the world around you on Facebook</span>
        </div>
        <div className="w-96 bg-white flex items-center justify-center rounded shadow-lg m-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center p-4"
          >
            <input
              className="w-80 h-10 border border-gray-500 bg-blue-100 rounded mb-4 pl-2 focus:outline-blue-500"
              type="text"
              placeholder="Username..."
              {...register("name")}
            />
            <input
              className="w-80 h-10 border border-gray-500 bg-blue-100 rounded mb-4 pl-2 focus:outline-blue-500"
              type="text"
              placeholder="Email..."
              {...register("email")}
            />
            <input
              className="w-80 h-10 border border-gray-500 bg-blue-100 rounded mb-4 pl-2 focus:outline-blue-500"
              type="password"
              placeholder="Password..."
              {...register("password")}
            />
            <input
              className="w-80 h-10 border border-gray-500 bg-blue-100 rounded mb-4 pl-2 focus:outline-blue-500"
              type="password"
              placeholder="Confirm Password..."
              {...register("confirmPassword")}
            />
            <input
              type="submit"
              className="w-80 h-10 border border-gray-500 bg-blue-500 text-white rounded mb-4 pl-2"
            />

            <hr className="w-80 mb-7 mt-3 text-black" />
            <Link to="/login">
              <button className="w-48 text-white h-10  bg-green-500  rounded mb-4 pl-2">
                Log Into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
