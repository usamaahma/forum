import React, { useEffect } from "react";
import Styles1 from "../../styles/EventPost.module.css";
import Kharai from "../../public/images/pehlikarahi.png";
import Calendar from "../../public/images/Calendar 2.png";
import Locatin from "../../public/images/Locatin (1).png";
import Image from "next/image";
function EventPost({ item }) {
  console.log(item, "eventdata");

  return (
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
        industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        <a> Read More..</a>
      </p>
    </div>
  );
}

export default EventPost;
