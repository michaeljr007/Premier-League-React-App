import React from "react";
import ArrowRowRight from "./ArrowRowRight";

const PLMid = () => {
  return (
    <div className=" bg-gray-100 mt-[-1rem] py-6 pb-[0.1rem]">
      <div className="mb-9">
        <ArrowRowRight title="News" />
        <ArrowRowRight title="Videos" />
        <ArrowRowRight title="Watch Live" />
      </div>
      <div className="mb-9">
        <ArrowRowRight title="Clubs" />
        <ArrowRowRight title="Players" />
        <ArrowRowRight title="Managers" />
      </div>
      <div className="mb-9">
        <ArrowRowRight title="Awards" />
        <ArrowRowRight title="Man Of The Match" />
        <ArrowRowRight title="Transfers" />
      </div>
      <div className="mb-9">
        <ArrowRowRight title="Hall Of Fame" />
        <ArrowRowRight title="History" />
        <ArrowRowRight title="Referees" />
      </div>
    </div>
  );
};

export default PLMid;
