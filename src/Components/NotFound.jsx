import React from 'react';
import notFoundImg from "../assets/notfound.png"
import { Link } from 'react-router';
const NotFound = () => {
    return (
          <div className='flex flex-col gap-5 justify-center items-center'>
            <img src={notFoundImg} alt="" />
            <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
            
        <Link to={'/apps'} className="btn text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2] px-8">Go Back</Link>
        </div>
    );
};

export default NotFound;