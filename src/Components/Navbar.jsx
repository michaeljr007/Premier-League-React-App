import React from "react";
import { Link } from "react-router-dom";
import { BiNews } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import pLogo from "../img/Premier-League-Logo.png";

const Navbar = () => {
  function latest(target) {
    const pl = document.querySelector(".pl");
    pl.classList.remove("active");
    const fantasy = document.querySelector(".fantasy");
    fantasy.classList.remove("active");
    const stats = document.querySelector(".stats");
    stats.classList.remove("active");
    const more = document.querySelector(".more");
    more.classList.remove("active");

    if (target.classList.contains("active") === false) {
      target.classList.add("active");
    }
  }

  function pl(target) {
    const latest = document.querySelector(".latest");
    latest.classList.remove("active");
    const fantasy = document.querySelector(".fantasy");
    fantasy.classList.remove("active");
    const stats = document.querySelector(".stats");
    stats.classList.remove("active");
    const more = document.querySelector(".more");
    more.classList.remove("active");

    if (target.classList.contains("active") === false) {
      target.classList.add("active");
    }
  }

  function fantasy(target) {
    const pl = document.querySelector(".pl");
    pl.classList.remove("active");
    const latest = document.querySelector(".latest");
    latest.classList.remove("active");
    const stats = document.querySelector(".stats");
    stats.classList.remove("active");
    const more = document.querySelector(".more");
    more.classList.remove("active");

    if (target.classList.contains("active") === false) {
      target.classList.add("active");
    }
  }

  function stats(target) {
    const pl = document.querySelector(".pl");
    pl.classList.remove("active");
    const fantasy = document.querySelector(".fantasy");
    fantasy.classList.remove("active");
    const latest = document.querySelector(".latest");
    latest.classList.remove("active");
    const more = document.querySelector(".more");
    more.classList.remove("active");

    if (target.classList.contains("active") === false) {
      target.classList.add("active");
    }
  }

  function more(target) {
    const pl = document.querySelector(".pl");
    pl.classList.remove("active");
    const fantasy = document.querySelector(".fantasy");
    fantasy.classList.remove("active");
    const latest = document.querySelector(".latest");
    latest.classList.remove("active");
    const stats = document.querySelector(".stats");
    stats.classList.remove("active");

    if (target.classList.contains("active") === false) {
      target.classList.add("active");
    }
  }

  return (
    <>
      <div className="flex justify-evenly items-center p-2 pb-[1.18rem] mb-1 w-full z-[100] text-center bg-white fixed bottom-[0.3rem] md:bottom-8 lg:bottom-4 left-0 sm:h-[60px]">
        <Link to={"/"}>
          <div>
            <BiNews
              onClick={(e) => latest(e.target)}
              className="font-bold latest active w-[50px] h-[30px] md:w-[60px] md:h-[40px] text-purple-950"
            />
            <h6 className="text-purple-950 text-[1rem] md:text-[1.2rem]">
              Latest
            </h6>
          </div>
        </Link>
        <Link to={"/pl"}>
          <div>
            <img
              onClick={(e) => pl(e.target)}
              src={pLogo}
              alt="pLogo"
              className="font-bold pl w-[60px] h-[35px] md:w-[80px] md:h-[40px]"
            />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              PL
            </h6>
          </div>
        </Link>
        <Link to={"/fantasy"}>
          <div>
            <FaTshirt
              onClick={(e) => fantasy(e.target)}
              className="font-bold fantasy w-[50px] h-[28px] md:w-[60px] md:h-[40px] text-purple-950"
            />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              Fantasy
            </h6>
          </div>
        </Link>
        <Link to={"/stats"}>
          <div>
            <BiSolidBarChartAlt2
              onClick={(e) => stats(e.target)}
              className="font-bold stats w-[50px] h-[28px] md:w-[60px] md:h-[40px] text-purple-950"
            />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              Stats
            </h6>
          </div>
        </Link>
        <Link to={"/more"}>
          <div>
            <SlOptionsVertical
              onClick={(e) => more(e.target)}
              className="text-2xl more font-bold w-[50px] h-[28px] md:w-[60px] md:h-[40px] text-purple-950"
            />
            <h6 className="text-purple-950 text-[0.9rem] md:text-[1.2rem]">
              More
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
