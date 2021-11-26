import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const data = {
  labels: ["Dec", "Jan", "Feb", " March", "April", "June"],
  datasets: [
    {
      lable: "#of votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(255, 25, 86)",
        "rgb(255, 205, 206)",
        "rgb(25, 205, 86)",
      ],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export default function Card2(props) {
  return (
    <div className="mt-5 mr-0 rounded-xl w-80 h-96 bg-gray-200 shadow-lg">
      <div className="flex border-b-2 border-gray-300 justify-between">
        <div className="font-bold   cursor-default p-2">{props.Heading}</div>
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
      <div className=" w-80 h-52">
        <Doughnut
          data={data}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    </div>
  );
}
