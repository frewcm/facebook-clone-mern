import React from "react";
import Post from "../feedComponents/Post";
import Share from "../feedComponents/Share";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";

function Feed({ id }) {
  console.log(id);
  const { data, isLoading, isError, error } = useQuery(
    ["timeline"],
    async () => {
      const response = id
        ? await axios.get(`http://localhost:5000/api/profile/?id={id}`)
        : await axios.get(
            "http://localhost:5000/api/timeline/6374e1666cd1d939c371c84f"
          );

      return response.data;
    }
  );

  return (
    <div className="w-1/2">
      <div className="">
        <Share />
        {isLoading && <ClipLoader className="mt-28 ml-96" size={50} />}
        {isError && <div>{error.message}</div>}
        {data?.map((p, index) => {
          return <Post key={index} post={p} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
