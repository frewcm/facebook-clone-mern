function Info() {
  return (
    <div className="flex flex-col mt-4">
      <p className="text-lg font-bold">User information</p>
      <div className="p-2">
        <div className="flex">
          <span className="text-gray-500">City: </span>
          <span className="ml-2 text-gray-500">Addis Ababa</span>
        </div>
        <div className="flex">
          <span className="text-gray-500">From: </span>
          <span className="ml-2 text-gray-500">Hawassa</span>
        </div>
        <div className="flex">
          <span className="text-gray-500">Relationship: </span>
          <span className="ml-2 text-gray-500">Single </span>
        </div>
      </div>
      <p className="text-lg font-bold">User friends</p>
      <div className="flex flex-wrap p-2">
        <div className="flex flex-col items-center m-2">
          <img className="w-24 rounded" src="/pic2.jpg" alt="profile picture" />
          <span className="ml-2">Sami Mola</span>
        </div>
        <div className="flex flex-col  items-center m-2">
          <img className="w-24 rounded" src="/pic2.jpg" alt="profile picture" />
          <span className="ml-2">Sami Mola</span>
        </div>
        <div className="flex flex-col  items-center m-2">
          <img className="w-24 rounded" src="/pic2.jpg" alt="profile picture" />
          <span className="ml-2">Sami Mola</span>
        </div>
        <div className="flex flex-col items-center m-2">
          <img className="w-24 rounded" src="/pic2.jpg" alt="profile picture" />
          <span className="ml-2">Sami Mola</span>
        </div>
        <div className="flex flex-col  items-center m-2">
          <img className="w-24 rounded" src="/pic2.jpg" alt="profile picture" />
          <span className="ml-2">Sami Mola</span>
        </div>
        <div className="flex flex-col  items-center m-2">
          <img className="w-24 rounded" src="/pic2.jpg" alt="profile picture" />
          <span className="ml-2">Sami Mola</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
