import React from "react";
import { Row, Col, Card, Button } from "antd";
import Styles from "../../styles/DeshiStore.module.css";
import MemberCard from "./MemberCard";

const data = [
  {
    key: "1",
  },
  {
    key: "2",
  },
  {
    key: "3",
  },
];

function FollowedShopsCard() {
  return (
    <div>
      <div className={Styles.cardsstoree}>
        {data.map((data, index) => (
          <div key={index}>
            <MemberCard />
          </div>
        ))}
      </div>
      <div className={Styles.cardsstoree}>
        {data.map((data, index) => (
          <div key={index}>
            <MemberCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowedShopsCard;
