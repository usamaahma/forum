import React from "react";
import Styles from "../../styles/LeftJobDetail.module.css";
import Image from "next/image";
import BigLap from "../../public/images/Rectangle 76.png";
import Watch from "../../public/images/watch.png";
import Like from "../../public/images/Like3.png";
import Location from "../../public/images/locationone.png";
import Eye from "../../public/images/Eye3.png";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import Mess from "../../public/images/Group 135.png";
import Laptop from "../../public/images/Rectangle 4573.png";
import Laptop1 from "../../public/images/Rectangle 4574.png";
import { HeartOutlined } from "@ant-design/icons";

function LeftJobDetail({ data }) {
  console.log(data, "job");
  return (
    <div>
      <div className={Styles.padding}>
        <div className={Styles.flexdivv}>
          <img src={data.image?.[0]} alt="" className={Styles.img} />
          <div className={Styles.heartdiv}>
            <HeartOutlined />
          </div>
          <div className={Styles.mblview}>
            <Image src={Laptop} alt="" className={Styles.sizelapimg} />
            <Image src={Laptop1} alt="" className={Styles.sizelapimg} />
          </div>
        </div>
        <div>
          <div className={Styles.btndiv}>
            <button className={Styles.btnuse}>{data.salaryType}</button>
            <p className={Styles.pricetext}>{data.salary}</p>
          </div>
          <h2 className={Styles.pricetext}>{data.title}</h2>
          <div className={Styles.watchdiv}>
            <Image src={Watch} alt="" />
            <p className={Styles.septext}>sep 8 </p>
          </div>
          <div className={Styles.spacediv}>
            <div className={Styles.watchdiv}>
              <Image src={Location} alt="" />
              <p className={Styles.septext}>New York</p>
            </div>
            <div className={Styles.watchdiv}>
              <Image src={Eye} alt="" />
              <p className={Styles.septext}>3 Views</p>
            </div>
            <div className={Styles.watchdiv}>
              <Image src={Like} alt="" />
              <p className={Styles.septext}>25 Likes</p>
            </div>
          </div>
          <div className={Styles.watchdiv}>
            <p className={Styles.share}>Share:</p>
            <div className={Styles.flexrow}>
              <Image src={Twitter} alt="abc" />
              <Image src={Facebook} alt="abc" />
              <Image src={Linkdin} alt="abc" />
              <Image src={Instgram} alt="abc" />
              <Image src={Mess} alt="abc" />
            </div>
          </div>
        </div>
        <div>{/* <TabOfJobDetail /> */}</div>
        <div className={Styles.btnsdiv}>
          <button className={Styles.btns}>Federal</button>
          <button className={Styles.btns}>Designer</button>
          <button className={Styles.btns}>Developer</button>
          <button className={Styles.btns}>SEO</button>
        </div>
        <div className={Styles.borderjob}>
          <h4 className={Styles.jotext}>Job Overview</h4>
          <hr className={Styles.line} />
          <div className={Styles.paddingdiv}>
            <div>
              <div className={Styles.textdiv}>
                <p className={Styles.textdes}>Industry:</p>
                <p className={Styles.textde1s}>{data.industry}</p>
              </div>
              <div className={Styles.textdiv}>
                <p className={Styles.textdes}>Job Type:</p>
                <p className={Styles.textde1s}>{data.jobType}</p>
              </div>
              <div className={Styles.textdiv1}>
                <p className={Styles.textdes}>Experience:</p>
                <p className={Styles.textde1s}>{data.experience}</p>
              </div>
              <div className={Styles.textdiv}>
                <p className={Styles.textdes}>Salary:</p>
                <p className={Styles.textde1s}>{data.salary}</p>
              </div>
            </div>
            <div>
              <div className={Styles.textdiv}>
                <p className={Styles.textdes}>Job Position:</p>
                <p className={Styles.textde1s}>{data.jobPosition}</p>
              </div>
              <div className={Styles.textdiv}>
                <p className={Styles.textdes}>Location:</p>
                <p className={Styles.textde1s}>{data.addressJob}</p>
              </div>
              <div className={Styles.textdiv1}>
                <p className={Styles.textdes}>Deadline:</p>
                <p className={Styles.textde1s}>{data.deadline}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Job Description</h3>
          <p className={Styles.destext}>
            {/* As a Product Designer, you will work within a Product Delivery Team
            fused with UX,
            <br /> engineering, product and data talent. You will help the team
            design beautiful interfaces that
            <br /> solve business challenges for our clients. We work with a
            number of banks on building web-
            <br />
            based applications for AML, KYC and Sanctions List management
            workflows. This role is
            <br /> ideal if you are looking to segue your career into the{" "} */}
            {data.jobDescription}
          </p>
        </div>
        <div>
          <h3>Key Responsibilities</h3>
          <ul style={{ marginLeft: "1rem" }}>
            <li className={Styles.destext}>
              Be involved in every step of the product design cycle from
              discovery to developer handoff
              <br /> and user acceptance testing.
            </li>
            <li className={Styles.destext}>
              Be involved in every step of the product design cycle from
              discovery to developer handoff
              <br /> and user acceptance testing.
            </li>
          </ul>
        </div>
        <div>
          <h3>Skill & Experience</h3>
          <div className={Styles.btnsdiv1}>
            <button className={Styles.btns1}>Photoshop</button>
            <button className={Styles.btns1}>Figma</button>
            <button className={Styles.btns1}>Illustrator</button>
            <button className={Styles.btns1}>UI/UX </button>
            <button className={Styles.btns1}>Graphic Design </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftJobDetail;
