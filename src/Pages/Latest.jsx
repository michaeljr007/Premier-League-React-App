import React from "react";
import LatestHeader from "../Components/LatestHeader";
import LatestBlog from "../Components/LatestBlog";
import LatestBottom from "../Components/LatestBottom";

const Latest = () => {
  return (
    <div>
      <LatestHeader />
      <LatestBlog />
      <LatestBottom />
    </div>
  );
};

export default Latest;
