import React from "react";

const LatestBlog = () => {
  return (
    <div className="p-2 bg-purple-950 text-white">
      <img
        src="https://resources.premierleague.com/photos/premierleague/photo/2023/08/27/e03b83e2-2e50-4474-ad2b-0e2ecaf60e0d/2023-08-27T135000Z_898075382_UP1EJ8R12FADO_RTRMADP_3_SOCCER-ENGLAND-SHU-MCI-REPORT.JPG?width=451&height=268"
        alt="img"
        className="rounded-[0.5rem] my-1"
      />
      <p className="py-1 font-bold text-gray-400">Live blog</p>
      <h1 className="font-bold text-[1.2rem]">
        LIVE: Haaland misses another big chance
      </h1>
      <p className="py-2">
        Follow the action and get FPL insight as Burnley host Aston Villa and
        Man City travel to Sheff Utd
      </p>
      <div className="flex justify-evenly gap-1 py-3 pb-3 my-1">
        <div className="p-1">
          <img
            src="https://resources.premierleague.com/photos/2023/08/23/0f6113f3-d4e8-41ac-8090-3edd0bb1487a/MicrosoftTeams-image-1-.png?width=451&height=268"
            alt="img"
            className="rounded-[0.4rem]"
          />
          <h6 className="py-1 font-bold text-gray-400 text-sm">
            Talking Tactics
          </h6>
          <h1 className="font-bold text-[0.9rem]">
            Will Klopp tweak his midfield ahead of stern Newcastle test?
          </h1>
        </div>
        <div className="p-1">
          <img
            src="https://resources.premierleague.com/photos/2023/08/27/49b5598a-1caf-4ba8-9bef-f1607d116725/GettyImages-1640895211.jpg?width=451&height=268"
            alt="img"
            className="rounded-[0.4rem]"
          />
          <h6 className="py-1 font-bold text-gray-400 text-sm">
            Fantasy Premier League
          </h6>
          <h1 className="font-bold text-[0.9rem]">
            FPL team news: Ten Hag update on Varane
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
