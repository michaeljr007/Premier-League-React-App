import React from "react";

const ScoreBox = (props) => {
  return (
    <div>
      <div
        className={`flex mx-2 text-[1.3rem] text-center items-center self-center bg-slate-950 text-white ${props.brent} px-[0.7rem] pb-2 rounded-md`}
      >
        <span className="mr-1">{props.homeScore}</span>-
        <span className="ml-1">{props.awayScore}</span>
      </div>
    </div>
  );
};

export default ScoreBox;
