import React from "react";
import Headder from "../boilerplate/headder";
import Search from "../boilerplate/search";
import Display from "../boilerplate/Display";

export default function Home() {
  return (
    <div className="bg-gray-300  flex-row md:flex">
      <Headder></Headder>
      <div className="flex ml-12 md:ml-64 flex-col md:w-52 ">
        <Search />
        <Display />
      </div>
    </div>
  );
}
