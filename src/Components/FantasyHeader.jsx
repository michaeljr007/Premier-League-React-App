import React from "react";
import pLogo from "../img/Premier-League-Logo.png";
import { BsArrowRightShort } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import pLogoW from "../img/Premier-League-Logo-White-png.png";
import SlideCard from "./SlideCard";
const FantasyHeader = () => {
  return (
    <div className="fantasyTop py-6 pb-[6rem]">
      <div>
        <div className="flex ml-[-3.7rem]">
          <span className="ml-[4rem] mb-[0.3rem]">
            <img
              src={pLogo}
              alt="pLogo"
              className="w-[90px] h-[53px] md:w-[90px] md:h-[50px]"
            />
          </span>
          <h6 className="text-white ml-[-1rem] mt-1 text-[1.7rem] font-bold">
            Fantasy
          </h6>
        </div>
        <div className="mt-3 pt-[2rem]">
          <span className="text-white flex font-bold text-[1.2rem]">
            <h6 className="text-center ml-[5rem] mt-[-1rem]">
              ReturnOurMandateFc
            </h6>
            <span className="text-[1.9rem] mt-[-0.8rem]">
              <BsArrowRightShort />
            </span>
          </span>
          <div className="bg-slate-50 mx-1 mb-[-0.3rem] bg-opacity-60 rounded">
            <span>
              <h6 className="text-center text-[0.8rem] rounded-b-lg mx-[7rem] text-white font-semibold my-2 py-[0.4rem] bg-gradient-to-r from-purple-800 to-purple-950">
                Gameweek 3
              </h6>
            </span>
            <div className="flex pb-1 my-3 mt-3 ml-[1.6rem] mr-[0.5rem] text-white text-center justify-evenly">
              <span className="py-3 text-black">
                <h6 className="text-[1.4rem] font-bold">44</h6>
                <p className="text-[1rem]">Average</p>
              </span>
              <span className="py-3 px-3 ml-2 rounded-lg text-black bg-slate-50 bg-opacity-90 text-center">
                <h6 className="text-[1.4rem] font-bold">32</h6>
                <p className="flex">
                  <span className="ml-[0.3rem] text-[1rem] ">Points</span>
                  <span className="text-[1.3rem] self-center">
                    <BsArrowRightShort />
                  </span>
                </p>
              </span>
              <span className="py-3 text-black">
                <h6 className="text-[1.4rem] font-bold">112</h6>
                <p className="flex">
                  <span className="ml-2">Highest</span>
                  <span className="text-[1.5rem] self-center">
                    <BsArrowRightShort />
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 bg-opacity-60 rounded mx-1 py-2 my-3">
        <div>
          <h6 className="text-center text-[0.8rem] rounded-b-lg mx-[7rem] text-white font-semibold my-2 py-[0.4rem] bg-gradient-to-r from-purple-800 to-purple-950">
            Gameweek 4
          </h6>
        </div>
        <div className="text-center text-[1rem]">
          <p>
            Gameweek 4 Deadline:{" "}
            <span className="font-bold">Friday 01 Sep, 18:30</span>
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="py-3 flex bg-gradient-to-r from-slate-50 to-slate-200 text-center mx-3 rounded-md my-2 mr-[-2px] p-2">
            <span>
              <FaTshirt className="font-bold w-[40px] h-[21px] ml-3 md:w-[60px] md:h-[40px] text-purple-950" />
            </span>
            <span className="text-[0.8rem]">Pick Team</span>
          </div>
          <div className="bg-slate-50 flex bg-gradient-to-r from-slate-50 to-slate-200 text-center mx-3 rounded-md my-2 py-2 p-2">
            <span className="mt-[5px] ml-[-2px]">
              <BiTransferAlt className="text-2xl font-bold w-[41px] h-[23px] ml-3 md:w-[60px] md:h-[40px] text-purple-950" />
            </span>
            <span className="mt-1 text-[0.8rem]">Transfers</span>
          </div>
          <div className="bg-slate-50 text-center mx-3 rounded-md my-2 p-2 mt-[-1px] mr-[-2px]">
            <span className="text-[0.8rem]">Fixtures</span>
          </div>
          <div className="bg-slate-50 text-center mx-3 rounded-md my-2 mt-[-1px] p-2">
            <span className="text-[0.8rem]">Fixture Difficulty</span>
          </div>
          <div className="bg-slate-50 text-center mx-3 rounded-md my-2 mr-[-2px] mt-[-1px] p-2">
            <span className="text-[0.8rem]">Player Statistics</span>
          </div>
          <div className="bg-slate-50 text-center mx-3 rounded-md my-2 mt-[-1px] p-2">
            <span className="text-[0.8rem]">Set Piece Takers</span>
          </div>
        </div>
      </div>
      <div className="bg-white pt-[1rem] pb-6 mt-1">
        <div className="py-[-1rem] p-1 rounded-lg text-center text-white mx-3 bg-gradient-to-r hover:bg-gradient-to-l from-purple-950 to-blue-600">
          <span className="flex ml-[6.7rem]">
            <img
              src={pLogoW}
              alt="pLogo"
              className="w-[60px] h-[35px] md:w-[90px] md:h-[50px]"
            />
            <h6 className="ml-[-0.8rem] mt-[0.1rem] text-[1.2rem]">Fantasy</h6>
          </span>
          <h6 className="text-[2rem] mt-[-0.7rem] font-bold">Draft</h6>
          <span className="flex ml-[8.2rem] mt-[-0.3rem]">
            <p>Play Now</p>
            <span className="text-[1.7rem]">
              <BsArrowRightShort />
            </span>
          </span>
        </div>
        <div class="flex flex-col ml-[-1.6rem] bg-white m-auto p-auto">
          <h1 className="flex my-2 justify-between py-2  lg:px-20 md:px-10 px-2 lg:mx-40 md:mx-20 mx-5 font-bold text-[1.1rem]">
            <h6 className="ml-[1.5rem]">News & Video</h6>
            <span className="flex">
              <p className="text-[0.9rem] mt-[5px]">View all</p>
              <span className="mt-[4.9px] mr-[-14px] ml-[-1px] self-center text-[1.5rem]">
                <BsArrowRightShort />
              </span>
            </span>
          </h1>
          <div className="flex overflow-x-scroll pb-5 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/29/6852e0da-1e6c-418e-a396-cfd7e0077120/Castagne-Fulham.png?width=451&height=268"
                title="Fulham signs Castagne from leicester"
              />
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/29/1d34d8cf-451b-480a-9a73-2375d47247a8/370240213_840073847472810_7863752165060147012_n.jpg?width=451&height=268"
                title="Premier League kits revealed for 2023/2024"
              />
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/28/d012482a-cbbb-4c3f-a11f-a0712ff41121/Off-the-bench-MW3.jpg?width=451&height=268"
                title="Of The Bench: Consider Chelsea triple-up"
              />
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/29/c6716360-aebd-4b6e-8873-2c9e83e23c89/Moises-Caicedo-CHE.jpg?width=451&height=268"
                title="Transfer Deadline Day: All you need to know"
              />
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/28/8fe8b97b-585f-49db-a561-30db75f2306b/James-Maddison.jpg?width=451&height=268"
                title="FPL Lessons: Why five-man midfields are the way to go for managers"
              />
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/29/54a859e6-7503-4612-8f9b-b422595b23e1/Anthony-Taylor.jpg?width=451&height=268"
                title="Match officials for Matchweek 4"
              />
              <SlideCard
                img="https://resources.premierleague.com/photos/2023/08/29/dc419bf5-32c6-4332-90b9-1b527d1aa44a/Beto-Everton.png?width=451&height=268"
                title="Everton sign Beto from Udinese"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 bg-opacity-90 rounded py-4 my-2">
        <div className="text-left mb-6 ml-7 text-[1.17rem]">
          <span className="font-bold">League & Cups</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="py-3 bg-gradient-to-r from-slate-50 to-slate-200 text-center mx-3 rounded-md my-2 mr-[-2px] p-2">
            <span className="text-[0.85rem]">Leagues</span>
          </div>
          <div className="bg-slate-50 bg-gradient-to-r from-slate-50 to-slate-200 text-center mx-3 rounded-md my-2 py-3 p-2">
            <span className="mt-1 text-[0.85rem]">Cups</span>
          </div>
          <div className="bg-slate-50 flex self-center text-center items-center mx-3 rounded-md my-2 p-2 mt-[-1px] mr-[-2px]">
            <span className="ml-[1.4rem]">
              <GrAdd />
            </span>
            <span className="ml-1 text-[0.85rem]">Join leagues</span>
          </div>
          <div className="bg-slate-50 self-center items-center flex text-center mx-3 rounded-md my-2 mt-[-1px] p-2">
            <span className="mr-1">
              <BsFillGearFill />
            </span>
            <span className="ml-1 text-[0.85rem]">Configure leagues</span>
          </div>
        </div>
      </div>
      <h6 className="text-center font-bold text-lg text-white py-5">
        Michael Isih Dev
      </h6>
    </div>
  );
};

export default FantasyHeader;
