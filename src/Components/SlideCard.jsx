import React from "react";

const SlideCard = ({ img, title }) => {
  return (
    <>
      <div className="inline-block px-3">
        <div className="w-64 h-63 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img src={img} className=" w-[260px] h-[200px]" alt="img" />
          <h6 className="font-bold px-1 py-1 bg-gradient-to-br hover:bg-gradient-to-l from-slate-50 to-blue-200">
            {title}
          </h6>
        </div>
      </div>
    </>
  );
};

export default SlideCard;
