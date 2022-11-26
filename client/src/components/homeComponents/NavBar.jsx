import { BsSearch, BsPersonFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 items-center gap-5 bg-blue-600 pl-5 pr-5 h-14 w-full">
      <div className="flex items-center">
        <Link to="/">
          <p className="text-3xl font-bold text-white">Facebook</p>
        </Link>
      </div>
      <div className="flex items-center w-96 h-8 bg-white rounded-full pl-2">
        <BsSearch />
        <input
          className="ml-2 focus:outline-none"
          type="text"
          placeholder="search..."
        />
      </div>
      <div className="grid grid-cols-3 items-center">
        <div>
          <span className="text-white mr-2">Homepage</span>
          <span className="text-white">Timeline</span>
        </div>
        <div className="flex items-center ml-16">
          <div className="flex mr-2 -space-x-2 -space-y-2">
            <BsPersonFill className="text-white" size={20} />
            <span className=" bg-red-500 rounded-full h-4 w-4 text-white text-xs text-center">
              1
            </span>
          </div>
          <div className="flex mr-2 -space-x-2 -space-y-2">
            <BsFillChatLeftTextFill className="text-white " size={20} />
            <span className="bg-red-500 rounded-full p-0.75 h-4 w-4 text-white text-xs text-center ">
              1
            </span>
          </div>
          <div className="flex mr-2 -space-x-2 -space-y-2">
            <IoMdNotifications className="text-white" size={20} />
            <span className="bg-red-500 rounded-full p-0.75 h-4 w-4 text-white text-xs text-center">
              1
            </span>
          </div>
          <div className="flex ml-8">
            <Link to="/profile/:userId">
              <img
                className="w-10 rounded-full ml-10 "
                src="/pic3.jpg"
                alt="profile picture"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
