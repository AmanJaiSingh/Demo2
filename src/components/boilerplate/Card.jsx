import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function Card(props) {
  return (
    <div className="m-5  mr-0 rounded-xl w-96 h-72 bg-gray-200 shadow-lg">
      <div className="flex border-b-2 border-gray-300 justify-between">
        <div className=" font-bold cursor-default  p-2">{props.Heading}</div>
        <div className="bg-transparent text-sm p-3">
          Show:
          <select className="bg-transparent text-blue-500">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className=" w-80 h-52">
        <Line
          data={{
            labels: ["Dec", "Jan", "Feb", " March", "April", "June"],
            datasets: [
              {
                lable: "#of votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: "rgb(122, 22, 199)",
                borderColor: `${props.color}`,
                tension: 0.1,
              },
            ],
          }}
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
