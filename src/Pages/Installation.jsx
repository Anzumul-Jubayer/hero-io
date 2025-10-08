import React from "react";

const Installation = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-12">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-400 mt-6 mb-20">
        Explore All Apps on the Market developed by us.
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-0 lg:px-20 my-10 gap-4 lg:gap-0">
        <p className="font-bold text-2xl">() Apps Installed</p>
      </div>
    </div>
  );
};

export default Installation;
