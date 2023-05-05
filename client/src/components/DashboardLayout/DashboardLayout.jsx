import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxResume } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-start items-start ">
      {" "}
      <nav
        className={
          toggle
            ? "w-[10rem] h-screen bg-gray-800 p-10 text-white duration-500 "
            : "w-[26rem] h-screen bg-gray-800 p-10 text-white   duration-500"
        }
      >
        <div className="w-full ">
          <div className="text-white">
            {toggle ? (
              <RxResume className="text-white" size={35} />
            ) : (
              <div className="flex justify-start items-center gap-2">
                <RxResume className="text-white" size={35} />
                <h2 className="font-bold text-xl delay-500">ResumeCraft</h2>
              </div>
            )}
          </div>
          <div className="relative">
            {!toggle ? (
              <div
                className="absolute top-[-2.4rem] right-[-3.5rem] p-2 bg-white text-gray-800 rounded-xl cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineArrowLeft size={25} />
              </div>
            ) : (
              <div
                className="absolute top-[-2.4rem] right-[-3.5rem] p-2 bg-white text-gray-800 rounded-xl cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                <AiOutlineArrowRight size={25} />
              </div>
            )}
          </div>
        </div>

        <ul className="mt-20 flex flex-col gap-4 text-lg">
          <li>
            <NavLink to="/Dashboard/Preview">Preview</NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard">Create</NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
