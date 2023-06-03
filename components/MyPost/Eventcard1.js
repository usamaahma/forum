import React from "react";
import EventCard from "./Eventcard";

const data = [
  {
    key: "1",
    card: <EventCard />,
  },
  {
    key: "2",
    card: <EventCard />,
  },
  {
    key: "3",
    card: <EventCard />,
  },
];

function Eventcard() {
  return (
    <div>
      {data.map((data, index) => (
        <div key={index} style={{ marginTop: "20px" }}>
          {data.card}
        </div>
      ))}
    </div>
  );
}

export default Eventcard;
