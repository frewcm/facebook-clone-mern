import Feed from "../components/homeComponents/Feed";
import LeftBar from "../components/homeComponents/LeftBar";
import NavBar from "../components/homeComponents/NavBar";
import RightBar from "../components/homeComponents/RightBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default Home;
