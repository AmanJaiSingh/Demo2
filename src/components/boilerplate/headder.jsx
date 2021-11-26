import React, { useEffect, useState } from "react";
import Aman from "../../images/Aman.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ChatIcon from "@mui/icons-material/Chat";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MenuIcon from "@mui/icons-material/Menu";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";

export default function Headder() {
  const [sidebar, setSidebar] = useState();
  const [sidebar2, setSidebar2] = useState();
  const [sidebar3, setSidebar3] = useState("hidden");
  const [profile, setProfile] = useState("text-6xl");

  const Hidden = () => {
    setSidebar("hidden");
    setSidebar2("css");
    setSidebar3("View_btn ");
    setProfile("text-3xl");
    console.log("u clicked");
  };
  const View = () => {
    setSidebar("");
    setSidebar2("css2");
    setSidebar3("hidden");
    setProfile("text-6xl");
  };

  return (
    <div className="fixed">
      <div className=" md:hidden duration-200 bg-gray-800 w-screen text-gray-100 flex justify-between">
        <a href="" className="block p-4 text-white font-bold">
          Better Dev
        </a>
        <button className="pr-5 -mt-2.5 text-2xl">
          <MenuIcon fontSize="inherit" />
        </button>
      </div>
      <div
        className={` bg-gray-100  transform -translate-x-full transition duration-200 ease-in-out md:translate-x-0 h-screen inset-y-0 left-0 ${sidebar2}`}
      >
        <div className="text-center h-12 text-lg pt-1 border-b-2 border-gray-400 -ml-20">
          Company Logo
        </div>
        {/* Img and email name */}
        <div className=" flex p-5">
          <div className={`${profile} -ml-2.5`}>
            <AccountCircleIcon fontSize="inherit" />

            {/* IMAge */}
          </div>
          <div className="pt-3.5 pl-2 font-mono">
            <div className={`${sidebar} font-bold`}>Aman Jai Singh</div>
            <div
              className={`${sidebar} text-sm text-gray-500 font-extralight transition duration-200`}
            >
              Amanjaisingh@gmail.com
            </div>
          </div>
        </div>
        {/* Dashboard */}
        <div className="flex mt-3 pl-3 cursor-pointer pr-5 font-mono text-gray-400  hover:text-indigo-400 hover:bg-red-100 duration-500 ">
          <div className="flex flex-row ">
            <div className=" text-2xl pb-2 duration-300">
              <DashboardIcon fontSize="inherit" />
            </div>
            <div className={`p-2 duration-300 ${sidebar}`}>Dashboard</div>
          </div>
        </div>
        <div className="flex mt-0 pl-3 cursor-pointer  pr-5 font-mono text-gray-400 hover:text-blue-500 hover:bg-red-100 duration-500 ">
          <div className="flex flex-row">
            <div className=" text-2xl pb-2  duration-300">
              <ViewAgendaIcon fontSize="inherit" />
            </div>
            <div className={`p-2 duration-300 ${sidebar}`}>Team</div>
          </div>
        </div>
        <div className="flex mt-0 pl-3 cursor-pointer  pr-5 font-mono text-gray-400 hover:text-blue-500 hover:bg-red-100 duration-500 ">
          <div className="flex flex-row">
            <div className=" text-2xl pb-2  duration-300">
              <FormatListBulletedIcon fontSize="inherit" />
            </div>
            <div className={`p-2 duration-300 ${sidebar}`}>Category</div>
          </div>
        </div>
        <div className="flex mt-0 cursor-pointer pl-3 pr-5 font-mono text-gray-400 hover:text-blue-500 hover:bg-red-100 duration-500 ">
          <div className="flex flex-row">
            <div className=" text-2xl pb-2  duration-300">
              <RecentActorsIcon fontSize="inherit" />
            </div>
            <div className={`p-2 duration-300 ${sidebar}`}>Contacts</div>
          </div>
        </div>
        <div className="flex mt-0 pl-3 cursor-pointer pr-5 font-mono text-gray-400 hover:text-blue-500 hover:bg-red-100 duration-500 ">
          <div className="flex flex-row">
            <div className=" text-2xl pb-2  duration-300">
              <ChatIcon fontSize="inherit" />
            </div>
            <div className={`p-2 duration-300 ${sidebar}`}>Chat</div>
          </div>
        </div>
        <div className="flex mt-0 pl-3 pr-5 cursor-pointer font-mono text-gray-400 hover:text-blue-500 hover:bg-red-100 duration-500 ">
          <div className="flex flex-row">
            <div className=" text-2xl pb-2  duration-300">
              <ReceiptIcon fontSize="inherit" />
            </div>
            <div className={`p-2 duration-300 ${sidebar}`}>Deals</div>
          </div>
        </div>
        <div
          onClick={Hidden}
          className={`${sidebar} cursor-pointer hover:text-blue-600 text-gray-500 mt-72 ml-5 flex`}
        >
          {" "}
          <div class>
            <FormatAlignLeftIcon />
          </div>
          <div className="ml-3">Toggle sidebar</div>
        </div>
        <div className={`${sidebar3}`}>
          <button onClick={View}>
            <FormatIndentIncreaseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
