import React from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";

const ArrowRowUp = (props) => {
  return (
    <div className="bg-white py-3 rounded-md mx-2 flex justify-between px-3 my-3">
      <span className="text-[0.85rem]">{props.title}</span>
      <span className="text-[1.26rem] self-center">
        <BsArrowUpRightSquare />
      </span>
    </div>
  );
};

export default ArrowRowUp;
