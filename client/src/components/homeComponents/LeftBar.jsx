import {
  MdRssFeed,
  MdSlowMotionVideo,
  MdGroups,
  MdEvent,
} from "react-icons/md";
import {
  BsFillChatLeftTextFill,
  BsFillBookmarkFill,
  BsQuestionCircle,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { Users } from "../../Data";
import CloseFriends from "../leftbarComponents/CloseFriends";

function LeftBar() {
  return (
    <div className="w-1/4 h-full sticky top-[56px]">
      <div className="p-4">
        <ul>
          <li className="flex items-center mb-5">
            <MdRssFeed />
            <p className="ml-3.5">Feed</p>
          </li>
          <li className="flex items-center mb-5">
            <BsFillChatLeftTextFill />
            <p className="ml-3.5">Chat</p>
          </li>
          <li className="flex items-center mb-5">
            <MdSlowMotionVideo />
            <p className="ml-3.5">Videos</p>
          </li>
          <li className="flex items-center mb-5">
            <MdGroups />
            <p className="ml-3.5">Groups</p>
          </li>
          <li className="flex items-center mb-5">
            <BsFillBookmarkFill />
            <p className="ml-3.5">Bookmarks</p>
          </li>
          <li className="flex items-center mb-5">
            <BsQuestionCircle />
            <p className="ml-3.5">Questions</p>
          </li>
          <li className="flex items-center mb-5">
            <MdEvent />
            <p className="ml-3.5">Events</p>
          </li>
          <li className="flex items-center mb-5">
            <FaGraduationCap />
            <p className="ml-3.5">Courses</p>
          </li>
        </ul>
        <button className="w-24 bg-gray-200 p-2 text-sm">See more</button>
        <hr className="m-5 border-gray-400" />
        <ul>
          {Users.map((user) => (
            <CloseFriends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
