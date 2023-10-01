import React from "react";
import pLogo from "../img/Premier-League-Logo.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import manunited from "../img/man_united-removebg-preview.png";
import everton from "../img/everton-removebg-preview.png";
import fulham from "../img/Fulham-removebg-preview.png";
import wolves from "../img/Wolverhampton_Wanderers-removebg-preview.png";
import arsenal from "../img/Arsenal-removebg-preview mm.png";

const LatestBottom = () => {
  return (
    <div>
      <div className="rounded-[0.4rem] text-center text-purple-950 bg-gradient-to-r hover:bg-gradient-to-l from-green-600 to-teal-500 py-4 mx-2 my-6 p-3">
        <img
          src={pLogo}
          alt="pLogo"
          className="w-[90px] h-[55px] md:w-[90px] md:h-[50px] ml-[4rem] mb-[0.3rem]"
        />
        <h1 className="text-[1.7rem] ml-[2.8rem] font-bold md:text-[4rem] mt-[-3.6rem]">
          Fantasy
        </h1>
        <h6 className="mt-[1rem] font-semibold text-[1.1rem]">
          GW 4 Transfer Deadlline:
        </h6>
        <h1 className="text-[2rem] font-bold md:text-[6rem] mt-[-0.4rem]">
          05 : 02 : 31
        </h1>
        <h1 className="flex ml-[4rem] mt-[-0.1rem]">
          <span className="days mr-[2rem] ml-[-0.5rem]">DAYS</span>{" "}
          <span className="hours days mr-[1rem] ml-[1.1rem]">HOURS</span>{" "}
          <span className="mins ml-[1.9rem]">MINS</span>
        </h1>
        <Link to={"/fantasy"}>
          <div className="text-center my-4 items-center px-16 py-3 mx-2 bg-slate-100 bg-gradient-to-r hover:bg-gradient-to-l from-purple-300 to-red-300">
            <p className="text-center text-[1rem] items-center font-bold">
              Pick Your Team
            </p>
          </div>
        </Link>
      </div>

      <h1 className="text-center text-[1.5rem] font-bold text-white rounded-t-lg items-center self-center mt-[3rem] mx-3 py-6 px-13 bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-violet-900">
        League Table
      </h1>
      <table className="table-auto text-center ml-3 border-x-2 w-full rounded-b-lg">
        <thead>
          <tr className=" bg-slate-50">
            <th className="py-1">Pos</th>
            <th>Club</th>
            <th>PL</th>
            <th>GD</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td>1</td>
            <td className="py-3">
              <img
                src={manunited}
                alt="img"
                className="w-[33px] h-[30px] md:w-[70px] md:h-[50px] ml-[-5px] mb-[-1.7rem]"
              />
              Man Utd
            </td>
            <td>3</td>
            <td>+5</td>
            <td>9</td>
          </tr>
          <tr className="border-b-2">
            <td>2</td>
            <td className="py-3">
              <img
                src={everton}
                alt="img"
                className="w-[53px] h-[30px] md:w-[70px] md:h-[50px] mb-[-1.7rem] ml-[-13px]"
              />{" "}
              Everton
            </td>
            <td>3</td>
            <td>+4</td>
            <td>7</td>
          </tr>
          <tr className="border-b-2">
            <td>3</td>
            <td className="py-3">
              <img
                src={fulham}
                alt="img"
                className="w-[30px] h-[30px] md:w-[70px] md:h-[50px] mb-[-1.7rem]"
              />{" "}
              Fulham
            </td>
            <td>3</td>
            <td>+4</td>
            <td>7</td>
          </tr>
          <tr className="border-b-2 row">
            <td>4</td>
            <td className="py-3">
              <img
                src={wolves}
                alt="img"
                className="w-[30px] h-[30px] md:w-[70px] md:h-[50px] mb-[-1.7rem]"
              />{" "}
              Wolves
            </td>
            <td>3</td>
            <td>+3</td>
            <td>7</td>
          </tr>
          <tr className="border-b-2">
            <td>5</td>
            <td className="py-3">
              <img
                src={arsenal}
                alt="img"
                className="w-[56px] ml-[-15px] h-[30px] md:w-[70px] md:h-[50px] mb-[-1.7rem]"
              />{" "}
              Arsenal
            </td>
            <td>3</td>
            <td>+2</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
      <div className="flex text-center items-center px-10 my-5 py-4 ml-2 mr-1 mb-[8rem] rounded-md border-2">
        <p className="text-center items-center font-semibold ml-[5rem] md:ml-[8rem]">
          View Full Table{" "}
        </p>
        <span>
          <BsArrowRightShort />
        </span>
      </div>
      <div className="pb-[7rem] mt-[-2rem] text-center text-purple-950 font-bold">
        <h6>Michael Isih Dev</h6>
      </div>
    </div>
  );
};

export default LatestBottom;
