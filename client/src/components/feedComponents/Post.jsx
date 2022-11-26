import { useQuery } from "@tanstack/react-query";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const { data } = useQuery(["user"], async () => {
    const response = await axios.get(
      `http://localhost:5000/api/users/${post?.userId}`
    );
    return response.data;
  });
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="shadow-lg m-2">
        <div className="flex justify-between">
          <div className="flex items-center p-4">
            <Link to={`/profile/${data?._id}`}>
              <img
                className="w-10 rounded-full"
                src={data?.profilePicture || "/noavatar.jpg"}
                alt="profile picture"
              />
            </Link>
            <span className="ml-2">{data?.name}</span>
            <span className="ml-2 text-sm text-gray-500">
              {format(post.createdAt)}
            </span>
          </div>
          <div>
            <FiMoreVertical className="mr-5" size={20} />
          </div>
        </div>
        <div className="p-4">
          <span className=""> {post?.desc} </span>
          <img className="mt-2 w-full" src={post?.img} alt="new post" />
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            <img
              className="w-7"
              onClick={handleLike}
              src="/like.png"
              alt="like"
            />
            <img
              className="w-7"
              onClick={handleLike}
              src="/heart.png"
              alt="heart"
            />
            <span className="text-sm text-gray-800 ml-2 flex items-center">
              <p className="text-lg font-bold mr-1">{like}</p>
              <p>people like it</p>
            </span>
          </div>
          <div>
            <span className="text-sm text-gray-800">16 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
