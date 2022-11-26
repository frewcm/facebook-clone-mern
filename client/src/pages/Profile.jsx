import React from "react";
import Feed from "../components/homeComponents/Feed";
import LeftBar from "../components/homeComponents/LeftBar";
import NavBar from "../components/homeComponents/NavBar";
import Info from "../components/profileComponents/Info";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Profile() {
  const params = useParams();
  const { id } = params;
  const { data } = useQuery(["user"], async () => {
    const response = await axios.get(
      `http://localhost:5000/api/users?id=${id}`
    );
    return response.data;
  });
  console.log(params?.id);

  return (
    <>
      <NavBar />
      <div className="flex">
        <LeftBar />
        <div className="w-3/4 place-content-center">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <img
                className="h-80 w-full object-cover relative"
                src={data?.coverPicture || "/cover.jpg"}
                alt="cover picture"
              />
              <img
                className="w-40 h-40 rounded-full object-cover absolute border-4 border-white top-[300px]"
                src={data?.profilePicture || "/noavatar.jpg"}
                alt="profile picture"
              />
            </div>
            <div className="flex flex-col items-center mt-24">
              <p className="text-2xl font-bold">{data?.name}</p>
              <span className="text-gray-500">{data?.desc}</span>
            </div>
          </div>
          <div className="flex">
            <Feed id={id} />
            <Info />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
