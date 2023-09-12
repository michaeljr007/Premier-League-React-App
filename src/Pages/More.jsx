import React from "react";
import ArrowRowRight from "../Components/ArrowRowRight";
import manchester from "../img/man_united-removebg-preview.png";
import ArrowRowUp from "../Components/ArrowRowUp";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";

const More = () => {
  return (
    <>
      <div>
        <div className="bg-purple-900 font-bold text-white text-[1.2rem] text-center py-4">
          <h6>More</h6>
        </div>
        <div className="bg-slate-100 py-6 pb-[4rem]">
          <div className="flex py-[0.5rem] my-1 mx-2 px-3 justify-between text-white rounded-md bg-gradient-to-r from-blue-700 to-purple-700 mb-6">
            <h6 className="text-[0.9rem] self-center">Sign Out</h6>

            <span className="text-[1.7rem]">
              <BsArrowRightShort />
            </span>
          </div>
          <div>
            <h6 className="font-bold ml-3 text-[1.32rem] text-purple-950">
              Settings
            </h6>
            <div className="mb-7 text-lg">
              <ArrowRowRight title="Manage Accounts" />
              <ArrowRowRight title="Notifications" />
            </div>
          </div>
          <div>
            <h6 className="font-bold mb-5 ml-3 text-[1.32rem] text-purple-950">
              Favourite Team
            </h6>
            <div className="mb-7 text-[1rem]">
              <div className="bg-white py-3 rounded-md mx-2 flex justify-between items-center self-center px-2 my-3">
                <div className="flex">
                  <img
                    src={manchester}
                    alt="img"
                    className="w-[33px] h-[30px] md:w-[70px] md:h-[50px] ml-[0.5rem] mt-[0.1rem]"
                  />
                  <span className="ml-2 self-center">Man Utd</span>
                </div>
                <div>
                  <h5 className="mr-1">Edit</h5>
                </div>
              </div>
              <ArrowRowUp title="Official App" />
              <ArrowRowUp title="Official Website" />
              <ArrowRowUp title="Club Ticketing Information" />
              <ArrowRowUp title="Digital Membership" />
              <ArrowRowUp title="Club Shop" />
              <ArrowRowUp title="LFCTV GO" />
            </div>
          </div>
          <h6 className=" text-[1.34rem] text-purple-950 ml-3 font-bold mb-4">
            Shirt & Badge Scanner
          </h6>
          <div className="flex py-[0.6rem] my-1 mx-2 px-3 justify-between text-white rounded-md bg-gradient-to-r from-blue-700 to-purple-700 mb-9">
            <span className="flex items-center">
              <AiFillCamera className="text-[1.46rem]" />
              <h6 className="text-[0.94rem] ml-2">Shirt & Badge Scanner</h6>
            </span>

            <span className="text-[1.6rem]">
              <BsArrowRightShort />
            </span>
          </div>
          <div className="mb-10">
            <h6 className="font-bold mb-5 ml-3 text-[1.34rem] text-purple-950">
              Football & Community
            </h6>
            <div className="mb-7 text-lg">
              <ArrowRowRight title="Wider Football" />
              <ArrowRowRight title="PL Charitable Fund" />
              <ArrowRowRight title="Community" />
              <ArrowRowRight title="Youth Development" />
              <ArrowRowRight title="No Room For Racism" />
              <ArrowRowRight title="Mental Health" />
              <ArrowRowRight title="Rainbow Laces" />
              <ArrowRowRight title="Poppy" />
            </div>
          </div>
          <div className="mb-10">
            <h6 className="font-bold mb-5 ml-3 text-[1.34rem] text-purple-950">
              About
            </h6>
            <div className="mb-7 text-lg">
              <ArrowRowRight title="Overview" />
              <ArrowRowRight title="What we do" />
              <ArrowRowRight title="Governance" />
              <ArrowRowRight title="Statement of Principles" />
              <ArrowRowRight title="Inclusion" />
              <ArrowRowRight title="Publications" />
              <ArrowRowRight title="Partners" />
              <ArrowRowRight title="Legal" />
              <ArrowRowRight title="Safeguarding" />
              <ArrowRowRight title="Carreers" />
              <ArrowRowRight title="Media" />
            </div>
          </div>
          <div className="mb-10">
            <h6 className="font-bold mb-5 ml-3 text-[1.34rem] text-purple-950">
              Other
            </h6>
            <div className="mb-[3rem] text-lg">
              <ArrowRowRight title="Partners" />
              <ArrowRowRight title="Legal" />
              <ArrowRowRight title="Contact Us" />
              <ArrowRowRight title="FAQs" />
              <ArrowRowRight title="Terms & Conditions" />
              <ArrowRowRight title="Privacy Policy" />
              <ArrowRowRight title="Cookie Policy" />
              <ArrowRowRight title="Legal" />
            </div>
            <div className="text-center text-purple-950 font-bold">
              <h6>Michael Isih Dev</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
