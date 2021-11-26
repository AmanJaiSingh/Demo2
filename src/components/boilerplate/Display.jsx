import React from "react";
import Card from "./Card";
import Card2 from "./card2";
import Card3 from "./card3";

export default function Display() {
  return (
    <div className="flex flex-col md:flex-row w-screen data flex-wrap">
      <Card Heading={"Manufracture"} color={"rgb(255, 205, 86)"} />
      <Card Heading={"Shoping"} color={"rgb(54, 162, 235)"} />
      <Card2 Heading={"User"} />
      <Card3 Heading={"Progress"} />
      <Card Heading={"Sales"} color={"rgb(255, 25, 286)"} />

      <Card Heading={"Stocker"} color={"rgb(255, 25, 86)"} />
    </div>
  );
}
