import React from "react";
import { Link } from "react-router";

const AppCards = ({ app }) => {
    const {image,title,downloads,ratingAvg,id}=app
 
  return (
    <div>
      <Link to={`/appDetails/${id}`}>
      <div className="card bg-base-100  shadow-sm hover:scale-102 transition ease-in-out">
        <figure className=" bg-gray-100 m-6 p-8 rounded-lg">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-100 h-80"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <div className="bg-green-100 p-2 rounded-xl text-green-400">
                <p>
            <i className="fa-solid fa-download"></i> {downloads} M
          </p>
            </div>
            <div className="bg-orange-100 p-2 rounded-xl text-orange-400">
                <p>
           <i className="fa-solid fa-star"></i> {ratingAvg}
          </p>
            </div>
          </div>
          
        </div>
      </div>
      </Link>
    </div>
  );
};

export default AppCards;
