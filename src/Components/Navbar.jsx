import React from "react";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import pLogo from "../img/Premier-League-Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly items-center p-2 pb-[0.3rem] w-full z-[100] text-center bg-white fixed bottom-[0.1px] md:bottom-8 lg:bottom-4 left-0 sm:h-[60px]">
        <Link to={"/"}>
          <div>
            <BiNews className="font-bold latest hover:border-t-[2px] hover:border-purple-900 active:border-t-[2px] active:border-purple-900 w-[50px] h-[30px] md:w-[60px] md:h-[40px] text-purple-950" />
            <h6 className="text-purple-950 text-[1rem] md:text-[1.2rem]">
              Latest
            </h6>
          </div>
        </Link>
        <Link to={"/pl"}>
          <div>
            <img
              src={pLogo}
              alt="pLogo"
              className="font-bold pl hover:border-t-[2px] hover:border-purple-900 active:border-t-[2px] active:border-purple-900 w-[60px] h-[35px] md:w-[80px] md:h-[40px]"
            />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              PL
            </h6>
          </div>
        </Link>
        <Link to={"/fantasy"}>
          <div>
            <FaTshirt className="font-bold hover:border-t-[2px] hover:border-purple-900 active:border-t-[2px] active:border-purple-900 fantasy w-[50px] h-[28px] md:w-[60px] md:h-[40px] text-purple-950" />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              Fantasy
            </h6>
          </div>
        </Link>
        <Link to={"/stats"}>
          <div>
            <BiSolidBarChartAlt2 className="font-bold hover:border-t-[2px] hover:border-purple-900 active:border-t-[2px] active:border-purple-900 stats w-[50px] h-[28px] md:w-[60px] md:h-[40px] text-purple-950" />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              Stats
            </h6>
          </div>
        </Link>
        <Link to={"/more"}>
          <div>
            <SlOptionsVertical className="text-2xl more hover:border-t-[2px] hover:border-purple-900 active:border-t-[2px]  active:border-purple-900 font-bold w-[50px] h-[28px] md:w-[60px] md:h-[40px] text-purple-950" />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              More
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
