import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Row = (props) => {
  const shortenString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="flex items-center text-center bg-white py-[0.35rem] rounded-md mx-2 mt-1 mb-[0.7rem]">
      <p className="flex text-sm">
        <span className="ml-[0.6rem] text-[0.7rem] mx-1">FT</span>
        <span className="w-[60px] text-[0.7rem]">
          {shortenString(props.home, 7)}
        </span>
      </p>
      <img
        src={props.homeImg}
        alt="img"
        className={`w-[${props.unique}] ${props.ml} ${props.mr} h-[35px] md:w-[70px] md:h-[50px]`}
      />
      <div
        className={`flex mx-2 text-[0.8rem] text-center py-1 items-center justify-center self-center bg-slate-950 text-white ${props.brent} mr-[${props.margin}] px-[0.7rem] pb-2 rounded-md`}
      >
        <span className="mr-1">{props.homeScore}</span>-
        <span className="ml-1">{props.awayScore}</span>
      </div>
      <img
        src={props.awayImg}
        alt="img"
        className={`w-[${props.unique}] ${props.ml} ${props.mr} h-[35px] md:w-[70px] md:h-[50px]`}
      />
      <p className={`flex text-[0.7rem] ml-[${props.badgeMargin}] px-2`}>
        {shortenString(props.away, 7)}
      </p>
      <span>
        <BsArrowRightShort />
      </span>
    </div>
  );
};

export default Row;
