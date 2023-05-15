import React from "react";
import Styles from "../../styles/Reviews.module.css";
import { Input, Rate } from "antd";
import Image from "next/image";
import Ellipse from "../../public/images/Ellipse 247.png";
import Group from "../../public/images/Group 48095542.png";
const { TextArea } = Input;
function Reviews() {
  return (
    <div className={Styles.maindiv}>
      <div>
        <h1 className={Styles.center}>5.00</h1>
        <Rate allowHalf defaultValue={2.5} className={Styles.starcenter} />
        <p className={Styles.retext}>23 Reviews</p>
      </div>
      <hr className={Styles.line} />
      <div className={Styles.padddiv}>
        <p className={Styles.right}>1 day ago</p>
        <div className={Styles.ellidiv}>
          <div>
            <Image src={Ellipse} alt="" />
          </div>
          <div className={Styles.divside}>
            <p className={Styles.pname}>People name</p>
            <div className={Styles.ellidivone}>
              <Rate allowHalf defaultValue={2.5} className={Styles.startext} />
              <p className={Styles.rattext}>4.00</p>
            </div>
          </div>
        </div>
        <p className={Styles.notetext}>
          It is a long established fact that a reader will be distracted by the
          readable
          <br /> content of a page when looking at its layoIt is a long
          established
        </p>
      </div>
      <hr className={Styles.line} />
      <div className={Styles.padddiv}>
        <p className={Styles.right}>1 day ago</p>
        <div className={Styles.ellidiv}>
          <div>
            <Image src={Ellipse} alt="" />
          </div>
          <div className={Styles.divside}>
            <p className={Styles.pname}>People name</p>
            <div className={Styles.ellidivone}>
              <Rate allowHalf defaultValue={2.5} className={Styles.startext} />
              <p className={Styles.rattext}>4.00</p>
            </div>
          </div>
        </div>
        <p className={Styles.notetext}>
          It is a long established fact that a reader will be distracted by the
          readable
          <br /> content of a page when looking at its layoIt is a long
          established
        </p>
      </div>
      <hr className={Styles.line} />
      <div className={Styles.padddiv}>
        <div>
          <p>How would you rate it?</p>
          <Rate allowHalf className={Styles.startext} />
        </div>
        <div>
          <Input placeholder="Heading" className={Styles.input} />
        </div>

        <TextArea
          rows={2}
          placeholder="write a review"
          className={Styles.input}
        />
        <p className={Styles.upltext}>Upload Image</p>
        <div>
          <Image src={Group} alt="" />
          <Image src={Group} alt="" />
          <Image src={Group} alt="" />
        </div>
        <button className={Styles.subbtn}>Submit</button>
      </div>
    </div>
  );
}

export default Reviews;
