import React from "react";
import pLogo from "../img/Premier-League-Logo-White-png.png";
import { BsArrowRightShort } from "react-icons/bs";
import { BiUpArrow } from "react-icons/bi";
import Row from "./Row";
import bournemouth from "../img/AFC_Bournemouth__2013_-removebg-preview (1).png";
import spurs from "../img/Tottenham_Hotspur.svg-removebg-preview.png";
import manchester from "../img/man_united-removebg-preview.png";
import nottingham from "../img/Nottingham_Forest_F.C._logo-removebg-preview.png";

const PLHeader = () => {
  return (
    <div className=" bg-purple-950 pb-3">
      <div className="flex text-center items-center ml-[7.6rem] md:ml-[21rem] py-2 pt-3 pb-3 lg:ml-[34rem]">
        <span className="text-white md:text-[1.6rem]">Premier</span>
        <span className="mx-[-13px] md:mx-[-21px]">
          <img
            src={pLogo}
            alt="pLogo"
            className="w-[60px] h-[35px] md:w-[90px] md:h-[50px]"
          />
        </span>
        <span className="text-white md:text-[1.6rem]">League</span>
      </div>
      <div className=" bg-white rounded-md mx-2 my-3 py-2">
        <div className="flex justify-between border-b-2 py-3">
          <span className="mt-[-0.7rem] ml-3 font-bold">Results</span>
          <span className="mt-[-0.7rem] mr-[0.8rem] text-[1.5rem]">
            <BsArrowRightShort />
          </span>
        </div>
        <div className="flex">
          <span className="mt-[1.2rem]">
            <Row
              home="Bournemouth"
              homeImg={bournemouth}
              away="Spurs"
              awayImg={spurs}
              homeScore="0"
              awayScore="2"
              ml="ml-2"
              mr="mr-1"
            />
          </span>
          <span>
            <p className="text-[10.1px]">Sun 3 Sep 2023</p>
          </span>
        </div>
      </div>
      <div className=" bg-white rounded-md mx-2 my-2 py-2">
        <div className="flex justify-between border-b-2 py-3">
          <span className="mt-[-0.7rem] ml-3 font-bold">Results</span>
          <span className="mt-[-0.7rem] mr-[0.8rem] text-[1.5rem]">
            <BsArrowRightShort />
          </span>
        </div>
        <div className="flex">
          <span className="mt-[1.2rem]">
            <Row
              home="Man Utd"
              homeImg={manchester}
              away="Nottingham Forest"
              awayImg={nottingham}
              homeScore="3"
              awayScore="2"
              ml="ml-1"
              mr="mr-1"
            />
          </span>
          <span>
            <p className="text-[10.1px]">Sun 3 Sep 2023</p>
          </span>
        </div>
      </div>
      <div className=" bg-white rounded-md mx-2 my-3 py-7">
        <div className="flex justify-between border-b-2 py-3">
          <span className="mt-[-1.3rem] ml-3 font-bold">Tables</span>
          <span className="mt-[-1.3rem] mr-[0.8rem] text-[1.5rem]">
            <BsArrowRightShort />
          </span>
        </div>
        <div className="flex justify-between">
          <span className="flex">
            <span className="mt-[1.5rem] ml-3 text-[1.3rem]">4</span>
            <span className="mt-[2rem] ml-2">
              <BiUpArrow className=" text-green-600" />
            </span>
            <img
              src={manchester}
              alt="img"
              className="w-[33px] h-[30px] md:w-[70px] md:h-[50px] ml-[0.8rem] mt-[1.7rem]"
            />{" "}
            <span className="ml-[0.8rem] mt-[1.8rem]">Man Utd</span>
          </span>
          <span>
            <p className="text-[1rem] mt-[1.7rem] mr-2">7 pts</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PLHeader;
