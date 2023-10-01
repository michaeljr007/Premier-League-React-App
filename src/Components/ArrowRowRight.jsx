import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ArrowRowRight = (props) => {
  return (
    <div className="bg-white py-3 rounded-md mx-2 flex justify-between px-3 my-3">
      <span className="text-[0.85rem]">{props.title}</span>
      <span className="text-[1.25rem] self-center">
        <BsArrowRightShort />
      </span>
    </div>
  );
};

export default ArrowRowRight;
