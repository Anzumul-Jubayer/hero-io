import React from 'react';
import Hero from '../Components/Hero';
import useAppData from '../Hook/useAppData';
import AppCards from '../Components/AppCards';
import { Link } from 'react-router';
import Skeleton from '../Components/Skeleton';

const Home = () => {
    const {apps,loading}=useAppData()
    const trendingApps=apps.slice(0,8)
    return (
        <div>
            <Hero></Hero>
            
            <div>
                <h1 className='font-bold text-4xl text-center mt-12'>Trending Apps</h1>
                <p className='text-center text-gray-400 mt-6 mb-20'>Explore All Trending Apps on the Market developed by us</p>
                
                {
                    loading? <Skeleton></Skeleton>  :  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-5 lg:px-20'>
                    {
                        trendingApps.map(app=><AppCards key={app.id} app={app}></AppCards>)
                    }
                </div>
                }
                <div className='flex justify-center my-10'>
                    <Link to={'/apps'} className="btn text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2] px-8">Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
