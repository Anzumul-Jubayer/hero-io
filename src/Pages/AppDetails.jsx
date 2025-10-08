import React from "react";
import { useParams } from "react-router";
import useAppData from "../Hook/useAppData";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useAppData();
  const app = apps.find((el) => el.id === parseInt(id));

  if (loading) {
    return <p>Loading...</p>;
  }
  const {
    image,
    title,
    description,
    ratingAvg,
    reviews,
    downloads,
    companyName,
    size,
    ratings,
  } = app;

  return (
    <div>
      <div className="">
        <div className="card bg-base-100 shadow-sm mx-2 md:mx-10 lg:mx-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <figure className=" bg-gray-100 shadow-sm m-6 p-8 rounded-lg">
                <img src={image} alt={title} className="rounded-xl w-50 h-50" />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{title}</h2>
              <p className="text-gray-400 text-xl">
                Developed by:{" "}
                <span className="text-[#632EE3]">{companyName}</span>
              </p>
              <div className="divider divider-end"></div>
              <div className="flex gap-6">
                <div className="space-y-2">
                  <p className="text-green-500 text-center text-2xl">
                    <i className="fa-solid fa-download"></i>
                  </p>
                  <p className=" text-gray-400 text-center">Downloads</p>
                  <h1 className="font-bold text-center text-2xl">
                    {downloads} M
                  </h1>
                </div>
                <div className="space-y-2">
                  <p className="text-orange-500 text-center text-2xl">
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p className=" text-gray-400 text-center">Average Ratings</p>
                  <h1 className="font-bold text-center text-2xl">
                    {ratingAvg} M
                  </h1>
                </div>
                <div className="space-y-2">
                  <p className="text-[#632EE3] text-center text-2xl">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </p>
                  <p className=" text-gray-400 text-center">Total Reviews</p>
                  <h1 className="font-bold text-center text-2xl">{reviews}K</h1>
                </div>
              </div>
              <button className="btn lg:w-1/3 mt-4 bg-[#00d390] text-white">
                Install Now ({size}) MB
              </button>
            </div>
          </div>
        </div>
        <div className="divider divider-end mx-2 md:mx-10 lg:mx-20"></div>
      </div>
      {/* Chart */}
      <div className="space-y-3 mx-2 md:mx-10 lg:mx-20">
        <h1 className="text-xl font-semibold ">Ratings</h1>
        <div className="bg-base-100 h-80 p-8 rounded-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={ratings}
              layout="vertical"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="name" />
              <YAxis
              type="category"
              dataKey="name"
              reversed={true}
              />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="count"
                fill="#ff8811"
                
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="divider divider-end mx-2 md:mx-10 lg:mx-20"></div>
      {/* description */}
      <div className="mx-2 md:mx-10 lg:mx-20">
        <h1 className="font-bold my-6">Description</h1>
        <p className="text-justify text-gray-400">{description}</p>
      </div>
      
    </div>
  );
};

export default AppDetails;
