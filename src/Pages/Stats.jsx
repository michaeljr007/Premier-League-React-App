import React from "react";
import ArrowRowRight from "../Components/ArrowRowRight";

const Stats = () => {
  return (
    <>
      <div>
        <div className="py-[1rem] pt-[2.5rem] bg-purple-950">
          <div className="ml-[0.1rem] p-2 flex items-center justify-between">
            <span className="text-white text-[1.4rem] font-bold">
              Match Stats
            </span>
            <span className="mr-[1rem] text-white">Oracle</span>
          </div>
          <span className="text-white ml-[0.3rem] text-[1.4rem] font-bold">
            2023/24 Top Statistics
          </span>
          <div className="grid grid-cols-2 gap-1 mx-[0.3rem] my-5">
            <div className="mx-1 mb-2 rounded-lg">
              <div className=" bg-gradient-to-r from-red-800 to bg-red-400">
                <img
                  src="https://resources.premierleague.com/premierleague/photos/players/110x140/p210156.png"
                  alt="img"
                />
              </div>
              <div className="bg-white text-center font-bold text-purple-950 py-3 px-6">
                <p>Goals</p>
                <h6>3</h6>
              </div>
            </div>
            <div className="mx-1 mb-2 rounded-lg">
              <div className=" bg-gradient-to-r from-blue-700 to bg-blue-300">
                <img
                  src="https://resources.premierleague.com/premierleague/photos/players/110x140/p220566.png"
                  alt=""
                />
              </div>

              <div className="bg-white text-center font-bold text-purple-950 py-3 px-6">
                <p>Passes</p>
                <h6>361</h6>
              </div>
            </div>
            <div className="mx-1 mb-2 rounded-lg">
              <div className="bg-gradient-to-r from-purple-900 to-pink-300">
                <img
                  src="https://resources.premierleague.com/premierleague/badges/rb/t36.svg"
                  alt="img"
                  className="ml-11"
                />
              </div>

              <div className="bg-white text-center font-bold text-purple-950 py-3 px-6">
                <p>Goals</p>
                <h6>9</h6>
              </div>
            </div>
            <div className="mx-1 rounded-lg">
              <div className="bg-gradient-to-r from-blue-900 to-orange-100">
                <img
                  src="https://resources.premierleague.com/premierleague/badges/rb/t43.svg"
                  alt="img"
                  className="ml-11"
                />
              </div>
              <div className="bg-white text-center font-bold text-purple-950 py-3 px-6">
                <p>Wins</p>
                <h6>3</h6>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 mt-[1rem] py-6 pb-[5rem]">
          <div className="mb-7 text-lg">
            <ArrowRowRight title="Season Stats" />
            <ArrowRowRight title="All-time Stats" />
            <ArrowRowRight title="Records" />
            <ArrowRowRight title="Player Comparison" />
          </div>
          <div className="mb-8 text-lg">
            <ArrowRowRight title="PL2 Stats" />
            <ArrowRowRight title="U18 Stats" />
          </div>
          <h6 className="text-center font-bold text-lg text-purple-900 py-5 pb-[3rem]">
            Michael Isih Dev
          </h6>
        </div>
      </div>
    </>
  );
};

export default Stats;
