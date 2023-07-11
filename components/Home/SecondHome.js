import React from "react";
import Styles from "../../styles/SecondHome.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
import Poster1 from "../../public/images/Rectangle 4717.png";
import Poster2 from "../../public/images/Rectangle 4718.png";
import Poster3 from "../../public/images/Rectangle 4720.png";
import Poster4 from "../../public/images/Frame 48096145 1.png";
import Google from "../../public/images/googlelogo.png";
import Apple from "../../public/images/applelogo.png";
function SecondHome() {
  return (
    <>
      <div className={Styles.boxbig}>
        <div>
          <Row justify="center">
            <Col>
              <div className={Styles.centercol}>
                <Image src={Poster1} alt="" className={Styles.imgposter} />
              </div>
            </Col>
            <Col>
              <div className={Styles.centercol}>
                <Image src={Poster2} alt="" className={Styles.imgposter} />
              </div>
            </Col>
            <Col>
              <div className={Styles.centercol}>
                <Image src={Poster3} alt="" className={Styles.imgposter} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* <div className={Styles.bgimg}></div> */}
      <div className={Styles.boxwhite}>
        <p className={Styles.downtext}>Download Now</p>
        <div className={Styles.btngoogle}>
          <div>
            <Image src={Google} alt="" className={Styles.Google} />
          </div>
          <div>
            <p className={Styles.gettext}>GET ON IT</p>
            <p>Google Play</p>
          </div>
        </div>
        <div className={Styles.btngoogle}>
          <div>
            <Image src={Apple} alt="" className={Styles.Google} />
          </div>
          <div>
            <p className={Styles.gettext}>Download on the</p>
            <p>App Store</p>
          </div>
        </div>
      </div>
      <Image src={Poster4} alt="" className={Styles.imgsize} />
    </>
  );
}

export default SecondHome;
