import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installed"));
    if (saveList) {
      setInstalled(saveList);
    }
  }, []);

  const sortItem=()=>{
    if(sortOrder==="asc"){
        return [...installed].sort((a,b)=>a.downloads-b.downloads)
    }else if(sortOrder==="desc"){
        return [...installed].sort((a,b)=>b.downloads-a.downloads)
    }else{
       return installed 
    }
  }
  const handleUninstall=(id)=>{
     const existingList=JSON.parse(localStorage.getItem('installed'))
     let updateList=existingList.filter(el=>el.id !==id)
     setInstalled(updateList)
     localStorage.setItem('installed',JSON.stringify(updateList))
     toast("UnInstall Successful!!!")
  }
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
        <label className="form-control w-full max-w-xs">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="none">Sort By Download</option>
            <option value="asc">Low -&gt;High</option>
            <option value="desc">High -&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortItem().map((el) => (
          <div
            key={el.id}
            className="card flex flex-col lg:flex-row card-side bg-base-100 shadow-sm mx-2 lg:mx-30 p-4"
          >
            <div></div>
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
                  <p>{el.size} MB</p>
                </div>
              </div>
            </div>
            <div className="flex   justify-end items-center">
              <button onClick={()=>handleUninstall(el.id)} className="btn bg-[#00d390] text-white">Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;

