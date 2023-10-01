import React from "react";
import pLogo from "../img/Premier-League-Logo-White-png.png";
import Row from "./Row";
import { BsArrowRightShort } from "react-icons/bs";
import bournemouth from "../img/AFC_Bournemouth__2013_-removebg-preview (1).png";
import spurs from "../img/Tottenham_Hotspur.svg-removebg-preview.png";
import arsenal from "../img/Arsenal-removebg-preview mm.png";
import fulham from "../img/Fulham-removebg-preview.png";
import brentford from "../img/Brentford-removebg-preview.png";
import crystal from "../img/Crystal_palace-removebg-preview.png";
import everton from "../img/everton-removebg-preview.png";
import wolves from "../img/Wolverhampton_Wanderers-removebg-preview.png";
import manchester from "../img/man_united-removebg-preview.png";
import nottingham from "../img/Nottingham_Forest_F.C._logo-removebg-preview.png";

const LatestHeader = () => {
  return (
    <div className=" bg-gradient-to-r from-pink-600 to-orange-600 pb-3">
      <div className="flex text-center items-center ml-[7.65rem] md:ml-[21rem] lg:ml-[34rem]">
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
      <h1 className="text-white text-[1.3rem] md:text-[2rem] mt-[-7px] pb-2 ml-4 md:ml-[3rem] lg:ml-[1.3rem] text-center items-center">
        Matchday Live
      </h1>
      <h1 className="text-white text-[0.8rem] md:text-[1.5rem] mt-[-8px] pb-1 ml-3 md:ml-[3rem] lg:ml-[1.3rem] text-center items-center">
        Saturday 26 August
      </h1>
      <Row
        home="Bournemouth"
        homeImg={bournemouth}
        away="Spurs"
        awayImg={spurs}
        homeScore="0"
        awayScore="2"
        ml="ml-4"
        mr="mr-4"
      />
      <Row
        home="Arsenal"
        homeImg={arsenal}
        away="Fulham"
        awayImg={fulham}
        homeScore="2"
        awayScore="2"
        unique="100px"
        badgeMargin="1rem"
        margin="1rem"
        ml="ml-[4px]"
        mr="mr-[-3px]"
      />
      <Row
        home="Brentford"
        homeImg={brentford}
        away="Crystal Palace"
        awayImg={crystal}
        homeScore="1"
        awayScore="1"
        unique="100px"
        brent="ml-5"
      />
      <Row
        home="Everton"
        homeImg={everton}
        away="Wolves"
        awayImg={wolves}
        homeScore="0"
        awayScore="1"
        margin="1rem"
        badgeMargin="1rem"
        unique="100px"
        ml="ml-[1px]"
        mr="mr-[-5px]"
      />
      <Row
        home="Man Utd"
        homeImg={manchester}
        away="Nottingham Forest"
        awayImg={nottingham}
        homeScore="3"
        awayScore="2"
        margin="1rem"
        ml="ml-3"
        mr="mr-3"
      />
      <div className="flex text-center items-center px-10 my-1 py-3 mx-2 bg-slate-100 rounded-md">
        <p className="text-center text-[0.9rem] items-center font-semibold ml-[5rem] md:ml-[8rem]">
          Matchday Live{" "}
        </p>
        <span>
          <BsArrowRightShort />
        </span>
      </div>
    </div>
  );
};

export default LatestHeader;
