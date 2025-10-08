import React from "react";

const Skeleton = ({Count=8}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-5 lg:px-20 my-10">
      {Array.from({ length:Count }).map((_, i) => (
        <div key={i} className="flex  flex-col gap-4">
          <div  className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
