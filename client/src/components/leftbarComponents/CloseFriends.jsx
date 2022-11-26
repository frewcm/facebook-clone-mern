import React from "react";

function CloseFriends({ user }) {
  return (
    <li className="flex mb-2 items-center">
      <img
        className="w-10 rounded-full"
        src={user.profilePicture}
        alt="profile picture"
      />
      <span className="ml-2">{user.userName}</span>
    </li>
  );
}

export default CloseFriends;
