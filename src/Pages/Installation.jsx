import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installed"));
    if (saveList) {
      setInstalled(saveList);
    }
  }, []);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-12">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-400 mt-6 mb-20">
        Explore All Apps on the Market developed by us.
      </p>
      <div className="flex flex-col  lg:flex-row justify-between items-center mx-4 lg:mx-0 lg:px-20 my-10 gap-4 lg:gap-0">
        <p className="font-bold text-2xl">
          ({installed.length}) Apps Installed
        </p>
        <button>Sort</button>
      </div>
      <div className="space-y-3">
        {installed.map((el) => (
          <div className="card flex flex-col lg:flex-row card-side bg-base-100 shadow-sm mx-2 lg:mx-30 p-4">
            <div>
                
            </div>
            <figure>
              <img
                src={el.image}
                alt={el.name}
                className="lg:w-30 lg:h-30 object-cover rounded-sm"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-xl text-gray-600">{el.title}</h2>
              <div className="flex gap-3">
                <div className=" text-green-400">
                  <p>
                    <i className="fa-solid fa-download"></i> {el.downloads} M
                  </p>
                </div>
                <div className=" text-orange-400">
                  <p>
                    <i className="fa-solid fa-star"></i> {el.ratingAvg}
                  </p>
                </div>
                <div className=" text-gray-400">
                  <p>
                     {el.size} MB
                  </p>
                </div>
              </div>
              
            </div>
            <div className="flex   justify-end items-center">
                <button className="btn bg-[#00d390] text-white">Uninstall</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
