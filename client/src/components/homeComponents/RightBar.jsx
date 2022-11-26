import { Users } from "../../Data.js";
import Online from "../rightbarComponents/Online.jsx";

function RightBar() {
  return (
    <div className="w-1/4">
      <div className="p-5">
        <div className="flex mb-2">
          <img className="w-9 mr-2" src="/gift.png" alt="birthday" />
          <span>
            <b>Frew Befekadu</b> and <b>and 3 other friends</b> have a birthday.
          </span>
        </div>
        <img className="rounded" src="/ad.jpg" alt="ad" />
        <p className="m-2">Online Friends</p>
        <ul>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
