import React from "react";
import BlogCard from "./BlogCard";
import Styles from "../../styles/RightFollowed.module.css";

const data = [
  {
    key: "1",
    card: <BlogCard />,
  },
  {
    key: "2",
    card: <BlogCard />,
  },
];

function Blogcard() {
  return (
    <div>
      {data.map((data, index) => (
        <div key={index} style={{ marginTop: "20px" }} className={Styles.dispcrd}>
          {data.card}
          {data.card}
        </div>
      ))}
    </div>
  );
}

export default Blogcard;
