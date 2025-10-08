import React from 'react';
import appNotFound from "../assets/App-Error.png"
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
         <div className='flex flex-col gap-5 justify-center items-center'>
            <img src={appNotFound} alt="" />
            <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
        <Link to={'/apps'} className="btn text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2] px-8">Go Back</Link>
        </div>
    );
};

export default AppNotFound;