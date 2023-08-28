import React, { useState, useEffect } from "react";
import Styles from "../../styles/RightSectionOfMember.module.css";
import Styles1 from "../../styles/EventPost.module.css";
import Image from "next/image";
import Bottle from "../../public/images/Rectangle 45.png";
import Shoes from "../../public/images/Rectangle 46 (1).png";
import { Select, Row, Col, message } from "antd";
import Carousel from "./carousel";
import Kharai from "../../public/images/pehlikarahi.png";
import Calendar from "../../public/images/Calendar 2.png";
import Locatin from "../../public/images/Locatin (1).png";
import { eventForm } from "../../helper/axios";
import { useRouter } from "next/router"; // Import the useRouter hook
const { Option } = Select;

function RightSectionOfEvents() {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setloading] = useState();

  const getEventForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    eventForm({
      method: "get",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.results, "user");
        setData(res.data.results);
        setloading(false);
      })
      .catch(() => {
        message.error("an error occured please try later");
        setloading(false);
      });
  };
  useEffect(() => {
    getEventForm();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <div className={Styles.boxflex}>
        <Image className={Styles.imgsize} src={Bottle} alt="abc" />
        <Image className={Styles.imgsize} src={Shoes} alt="abc" />
      </div>
      <div className={Styles.paddingdiv}>
        <div className={Styles.flexbigbox}>
          <div className={Styles.flexbox}>
            <div className={Styles.selectdiv}>
              <p className={Styles.clr}>Top Events</p>
            </div>
            <div className={Styles.selectdiv}>
              <p className={Styles.filter}>Filter :</p>
              <Select
                defaultValue="Last Active"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="Topic">Last Active</Option>
                <Option value="lucy">Last Active</Option>
              </Select>
            </div>
          </div>
        </div>
        {data?.map((item, index) => (
          <div
            key={index}
            className={Styles.eventbox}
            onClick={() => router.push(`/EventsTwoPage?eventId=${item.id}`)}
          >
            <div className={Styles1.bigbox}>
              <div className={Styles1.flexbox}>
                <img src={item.image?.[0]} alt="abc" width={100} height={100} />
                <div>
                  <div className={Styles1.flexsmallbox}>
                    <Image src={Calendar} alt="" className={Styles1.cel} />
                    <p className={Styles1.text14}>{item.startDate} </p>
                    {/* <p className={Styles1.texta}>APR</p> */}
                  </div>
                  <hr className={Styles1.line} />
                  <p className={Styles1.textap}>
                    {item.startDate}- {item.endDate}
                  </p>
                  <p className={Styles1.text144}>{item.eventName}</p>
                  <div className={Styles1.flexsmallbox}>
                    <Image src={Locatin} alt="" />
                    <p className={Styles1.texth}>{item.location}</p>
                  </div>
                </div>
              </div>
              <p className={Styles1.textap}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&rsquo;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not
                <a> Read More..</a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "1rem" }}>
        <div>
          <p className={Styles.eventsss}>Others Events</p>
          <div
            style={{
              backgroundColor: "#42b00f",
              borderWidth: 2,
              width: "6.2rem",
              border: "#42b00f 1px solid",
              position: "absolute",
            }}
          ></div>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        >
          <div className={Styles.Carousel}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSectionOfEvents;
