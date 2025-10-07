import React from "react";
import { Link } from "react-router";
import playStore from "../assets/playstore.webp"
import hero from "../assets/hero.png"
const Hero = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-5xl font-semibold text-center lg:leading-14">We Build <br /> <span className="text-[#632ee3] font-bold">Productive</span> Apps</h1>
      <p className="text-center text-gray-500 my-5 hidden lg:block">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn <br />  your ideas into digital experiences that truly make an impact.</p>
      <p className="text-center text-gray-500 my-5 block lg:hidden">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex justify-center gap-4 my-10">
        <Link to={'https://play.google.com/store/apps?hl=en'} target="/" className="btn btn-outline bg-white "><img className="w-6" src={playStore} alt="" />  Google Play</Link>
        <Link to={'https://www.apple.com/app-store/'} target="/" className="btn btn-outline bg-white"><i className="fa-brands fa-app-store-ios text-[#47BCFF]"></i> App Store</Link>
      </div>
      <div className="flex justify-center">
        <img src={hero} alt="" />
      </div>
      <div className="bg-linear-to-bl from-[#632ee3] to-[#9f62f2] py-30">
         <h1 className="text-center font-bold text-xl lg:text-4xl text-white">Trusted by Millions, Built for You</h1>
         <div className="flex flex-col lg:flex-row lg:justify-center mt-8 gap-4 lg:gap-16">
            <div className="space-y-2">
              <p className="text-gray-300 text-center">Total Downloads</p> 
              <h1 className="font-semibold text-white text-center lg:text-4xl">29.6M</h1>
              <p className="text-gray-300 text-center">21% more than last month</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-center">Total Reviews</p> 
              <h1 className="font-semibold text-white text-center lg:text-4xl">906K</h1>
              <p className="text-gray-300 text-center">46% more than last month</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 text-center">Active Apps</p> 
              <h1 className="font-semibold text-white text-center lg:text-4xl">132+</h1>
              <p className="text-gray-300 text-center">31 more will Launch</p>
            </div>
         </div>
         
      </div>
    </div>
  );
};

export default Hero;

