import React from 'react';
import errorImg from "../assets/error-404.png"
import { Link } from 'react-router';
const Errorpage = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <img src={errorImg} alt="" />
            <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
            <p className='text-gray-400'>The page you are looking for is not available.</p>
         <Link
          to="/home"
          className="btn text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2]"
          
        >
           Go Back
        </Link>
        </div>

    );
};

export default Errorpage;
