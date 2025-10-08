import React, { useState } from "react";
import useAppData from "../Hook/useAppData";
import AppCards from "../Components/AppCards";

const Apps = () => {
  const { apps } = useAppData();
  const [search,setSearch]=useState('')
  const term =search.trim().toLocaleLowerCase()
  const searchedApps=term?apps.filter(app=>app.title.toLocaleLowerCase().includes(term)):apps
  console.log(searchedApps)
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-12">
        Our All Applications
      </h1>
      <p className="text-center text-gray-400 mt-6 mb-20">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-0 lg:px-20 my-10 gap-4 lg:gap-0">
        <p className="font-bold text-2xl">({searchedApps.length}) Apps Found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e)=>setSearch(e.target.value)} type="search" value={search} required placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-5 lg:px-20">
        {searchedApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
    </div>
  );
};

export default Apps;
