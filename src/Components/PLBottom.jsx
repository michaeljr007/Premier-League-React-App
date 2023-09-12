import React from "react";
import manchester from "../img/man_united-removebg-preview.png";
import { BsArrowUpRightSquare } from "react-icons/bs";
import ArrowRowUp from "./ArrowRowUp";

const PLBottom = () => {
  return (
    <div className="py-6 bg-gray-100">
      <div className=" mx-2 mb-8 pt-[3rem] pb-[1rem] rounded-lg bg-gradient-to-r hover:bg-gradient-to-l from-red-600 to-red-900">
        <div className="flex">
          <span className="ml-[1.6rem] mt-[-3.8rem]">
            <img
              src={manchester}
              alt="img"
              className="w-[52px] h-[48px] md:w-[70px] md:h-[50px] ml-[0.8rem] mt-[1.7rem]"
            />
          </span>
          <span className="text-[1.7rem] mt-[-2.2rem] ml-[1rem] text-white font-bold">
            Man Utd
          </span>
        </div>
        <div className="flex ml-[0.4rem] justify-evenly">
          <div className="py-3 mt-5 px-[0.6rem] mx-1 bg-slate-50 rounded-md flex justify-between">
            <span className="text-[0.9rem]">Official Website</span>
            <span className="ml-3 mt-1 text-[1.2rem]">
              <BsArrowUpRightSquare />
            </span>
          </div>
          <div className="py-3 mt-5 px-[1.5rem] mx-[0.6rem] bg-slate-50 rounded-md flex justify-between">
            <span className="text-[0.9rem]">Official App</span>
            <span className="ml-3 mt-1 text-[1.2rem]">
              <BsArrowUpRightSquare />
            </span>
          </div>
        </div>
      </div>
      <div className="pb-[2rem]">
        <ArrowRowUp title="Club Ticketing Information" />
        <ArrowRowUp title="Digital Membership" />
        <ArrowRowUp title="Club Shop" />
        <ArrowRowUp title="MUTV GO" />
      </div>
      <div className="pb-[5rem] my-1 text-center text-purple-950 font-bold">
        <h6>Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default PLBottom;
