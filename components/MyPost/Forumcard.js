import React from "react";
import PostCard from "./Postcard";

const data = [
  {
    key: "1",
    card: <PostCard />,
  },
  {
    key: "2",
    card: <PostCard />,
  },
  {
    key: "3",
    card: <PostCard />,
  },
];

function Forumcard() {
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

export default Forumcard;
