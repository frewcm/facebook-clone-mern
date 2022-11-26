import { MdPermMedia } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsEmojiSmileFill } from "react-icons/bs";

function Share() {
  return (
    <div className=" w-full">
      <div className="shadow-xl p-2 m-4 flex flex-col rounded">
        <div className="flex items-center p-3">
          <img
            className="w-10 rounded-full"
            src="/pic3.jpg"
            alt="profile picture"
          />
          <input
            className="pl-2"
            type="text"
            placeholder="what's in your mind"
          />
        </div>
        <hr className="ml-6 border-gray-400 w-3/4 text-center" />
        <div className="mt-2 ml-4 flex p-3">
          <div className="flex items-center mr-3">
            <MdPermMedia className="text-red-500" />
            <span className="ml-1 text-sm">Photo or Video</span>
          </div>
          <div className="flex items-center mr-3">
            <AiFillTag className="text-blue-500" />
            <span className="ml-1 text-sm">Tag</span>
          </div>
          <div className="flex items-center mr-3">
            <MdLocationOn className="text-green-500" />
            <span className="ml-1 text-sm">Location</span>
          </div>
          <div className="flex items-center mr-3">
            <BsEmojiSmileFill className="text-yellow-500" />
            <span className="ml-1 text-sm">Emoji</span>
          </div>
          <button className="ml-16 bg-green-500 pl-2 pr-2 pt-1 pb-1 text-sm text-white rounded">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
