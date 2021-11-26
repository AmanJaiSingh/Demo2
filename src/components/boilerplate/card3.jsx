import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import FaceIcon from "@mui/icons-material/Face";

Chart.register(...registerables);

export default function Card3(props) {
  return (
    <div className="m-5 mr-0 rounded-xl w-6/12 h-6/12 bg-gray-200 shadow-lg">
      <div className="flex border-b-2 border-gray-300  justify-between">
        <div className="font-bold  cursor-default p-2">{props.Heading}</div>
        <div className="bg-transparent text-sm p-3">
          Show:
          <select
            name="cars"
            id="cars"
            className="bg-transparent text-blue-500"
          >
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className="  p-2 font-bold">23 December,Sunday</div>
      <div className="w-11/12 cursor-default h-28 shadow-2xl rounded-lg m-3 bg-gray-200 ">
        <div className="flex font-bold cursor-pointer p-1 text-gray-700 pl-2 justify-between">
          <h2>Sales review by jeff</h2>
          <h5 className="text-xs text-gray-400 p-1.5 font-bold ">Remainder</h5>
        </div>
        <div className="text-xs font-medium ml-2">
          <span className="text-gray-500">Due date:</span>
          <span className="text-gray-700">December 23,2021</span>
        </div>
        <div className="flex mt-6 ml-2 justify-between">
          <div className="flex cursor-default space-x-3 text-sm ">
            <FaceIcon />
            <h1>Aman jai singh</h1>
          </div>

          <div className="w-20  cursor-pointer mr-2 rounded-sm text-xs text-center text-gray-100 pt-0.5 h-5 bg-green-500">
            Completed
          </div>
        </div>
      </div>
      <div className="w-11/12 cursor-default h-28 shadow-2xl rounded-lg m-3 bg-gray-200 ">
        <div className="flex font-bold cursor-pointer p-1 text-gray-700 pl-2 justify-between">
          <h2>Sales review by jeff</h2>
          <h5 className="text-xs text-gray-400 p-1.5 font-bold ">Remainder</h5>
        </div>
        <div className="text-xs font-medium ml-2">
          <span className="text-gray-500">Due date:</span>
          <span className="text-gray-700">December 23,2021</span>
        </div>
        <div className="flex mt-6 ml-2 justify-between">
          <div className="flex cursor-default space-x-3 text-sm ">
            <FaceIcon />
            <h1>Aman jai singh</h1>
          </div>

          <div className="w-20  cursor-pointer mr-2 rounded-sm text-xs text-center text-gray-100 pt-0.5 h-5 bg-red-500">
            Ended
          </div>
        </div>
      </div>
      <div className="w-11/12 cursor-default h-28 shadow-2xl rounded-lg m-3 bg-gray-200 ">
        <div className="flex font-bold cursor-pointer p-1 text-gray-700 pl-2 justify-between">
          <h2>Sales review by jeff</h2>
          <h5 className="text-xs text-gray-400 p-1.5 font-bold ">Remainder</h5>
        </div>
        <div className="text-xs font-medium ml-2">
          <span className="text-gray-500">Due date:</span>
          <span className="text-gray-700">December 23,2021</span>
        </div>
        <div className="flex mt-6 ml-2 justify-between">
          <div className="flex cursor-default space-x-3 text-sm ">
            <FaceIcon />
            <h1>Aman jai singh</h1>
          </div>

          <div className="w-20  cursor-pointer mr-2 rounded-sm text-xs text-center text-gray-100 pt-0.5 h-5 bg-green-500">
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}
