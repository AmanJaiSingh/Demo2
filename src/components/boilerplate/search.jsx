import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
export default function Search() {
  // const [class1,setClass] = useState("search");
  return (
    <div className="flex justify-between search_bar shadow-2xl bg-gray-200 ">
      <div className=" flex">
        <div className="p-2 pl-6">
          <SearchIcon />
        </div>
        <div className="p-2">
          <input
            className=" bg-transparent w-11/12 rounded-2xl focus:outline-none"
            type="text"
            placeholder="search"
          />
        </div>
      </div>
      <div className="p-2 text-gray-300 ">
        <button className=" hover:text-blue-500">
          <NotificationsNoneIcon />
        </button>
      </div>
    </div>
  );
}
