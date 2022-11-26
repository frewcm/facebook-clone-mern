import React from "react";

function Online({ user }) {
  return (
    <li className="flex items-center mb-2">
      <div className="flex -space-x-3 mr-2">
        <img
          className="w-10 rounded-full"
          src={user.profilePicture}
          alt="profile picture"
        />
        <span className="w-3 h-3 bg-green-500 rounded-full border border-white"></span>
      </div>
      <span>{user.userName}</span>
    </li>
  );
}

export default Online;
