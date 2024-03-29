import React, { useState, useEffect } from "react";
import Styles from "../../styles/RightSectionJob.module.css";
import Styles1 from "../../styles/JobCard.module.css";
import { Col, Row, Card, message } from "antd";
import Image from "next/image";
import Pic from "../../public/images/image 77 (1).png";
import Ser from "../../public/images/Rectangle 4653 (1).png";
import Ser1 from "../../public/images/Rectangle 4654 (1).png";
import Ser2 from "../../public/images/Rectangle 4655 (1).png";
import CarouselJob from "./CarouselJob";
import Product from "../../public/images/Rectangle 76.png";
import User from "../../public/images/userpro.png";
import Location from "../../public/images/Locatinone.png";
import Phone from "../../public/images/greentick.png";
import Like from "../../public/images/Like3.png";
import Eye from "../../public/images/Eye3.png";
import Share from "../../public/images/Share3.png";
import Group from "../../public/images/Groupjob.png";
import { HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { jobForm } from "@/helper/axios";
import { useRouter } from "next/router";
// const data = [
//   { key: 1, name: "card" },
//   { key: 2, name: "card" },
//   { key: 3, name: "card" },
//   { key: 4, name: "card" },
//   { key: 5, name: "card" },
//   { key: 6, name: "card" },
//   { key: 7, name: "card" },
//   { key: 8, name: "card" },
//   { key: 9, name: "card" },
// ];
function RightSectionJob() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setloading] = useState();

  //////

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  ///////////////////////////api
  const getJobForm = () => {
    setloading(true);
    // let token = localStorage.getItem("talbeilm-token");

    jobForm({
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
    getJobForm();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div className={Styles.enddiv}>
        <p className={Styles.poptext}>Popular Job</p>
        {/* <Link href="./JobDetailPage"> */}
        <p className={Styles.vewtext}>View all</p>
        {/* </Link> */}
      </div>
      <div
        style={{
          backgroundColor: "#42b00f",
          borderWidth: 1,
          width: "10rem",
          border: "#42b00f 2px solid",
          position: "absolute",
        }}
      ></div>
      <hr />
      <div>
        <br />
        {loading ? (
          <LoadingOutlined
            style={{ fontSize: "5rem", textAlign: "center", color: "back" }}
          />
        ) : (
          <Row justify="center" className={Styles.colsize}>
            {data
              ?.filter((item) => item.status === true)
              .map((item, index) => (
                <Col key={index} xxl={8} xl={8} lg={8} md={8} xs={12}>
                  <div className={Styles.centercard}>
                    <Card
                      hoverable
                      className={Styles1.cardsize}
                      cover={
                        <img
                          src={item.image?.[0]}
                          alt="abc"
                          width={200}
                          height={200}
                        />
                      }
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={() =>
                        router.push(`/JobDetailPage?jobId=${item.id}`)
                      }
                    >
                      <Image src={Group} alt="" className={Styles1.tag} />
                      <div className={Styles1.heartdiv}>
                        <HeartOutlined />
                      </div>
                      <div className={Styles1.divbtn}>Federal</div>
                      <div className={Styles1.stardiv}>
                        <div className={Styles1.flexfive}>
                          <button className={Styles1.usedbtn}>
                            {" "}
                            {item.salaryType}
                          </button>
                        </div>
                        <p className={Styles1.doltext}>{item.salary}</p>
                      </div>
                      <p className={Styles1.mittext}>2min ago</p>
                      <p className={Styles1.saimtext}>{item.title}</p>
                      <div className={Styles1.userdiv}>
                        <Image src={User} alt="" />
                        <p className={Styles1.usertext}>{item.jobType}</p>
                      </div>
                      <div className={Styles1.userdiv}>
                        <Image src={Location} alt="" />
                        <p className={Styles1.usertext}>{item.address}</p>
                      </div>
                      <div className={Styles1.centerbtn}>
                        <button className={Styles1.calldiv}>
                          <Image src={Phone} alt="" />
                          <p style={{ marginLeft: ".2rem" }}>Apply Now</p>
                        </button>
                      </div>
                      <div className={Styles1.threediv}>
                        <div className={Styles1.nodiv}>
                          <Image src={Like} alt="" />
                          <p className={Styles1.thumtext}>25</p>
                        </div>
                        <div className={Styles1.nodiv}>
                          <Image src={Eye} alt="" />
                          <p className={Styles1.thumtext}>50</p>
                        </div>
                        <div className={Styles1.nodiv}>
                          <Image src={Share} alt="" />
                          <p className={Styles1.thumtext}>30</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              ))}
          </Row>
        )}
      </div>
      <div>
        <Image src={Pic} alt="" className={Styles.imsizebig} />
      </div>
      <div>
        <div className={Styles.enddiv}>
          <p className={Styles.poptext}>Recently Added</p>
          <p className={Styles.vewtext}>View all</p>
        </div>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "10rem",
            border: "#42b00f 2px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        <div>
          <br />
          {loading ? (
            <LoadingOutlined
              style={{ fontSize: "5rem", textAlign: "center", color: "back" }}
            />
          ) : (
            <Row justify="center" className={Styles.colsize}>
              {data
                ?.filter((item) => item.status === true)
                .map((item, index) => (
                  <Col key={index} xxl={8} xl={8} lg={8} md={8} xs={12}>
                    <div className={Styles.centercard}>
                      <Card
                        hoverable
                        className={Styles1.cardsize}
                        cover={
                          <img
                            src={item.image?.[0]}
                            alt="abc"
                            width={200}
                            height={200}
                          />
                        }
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() =>
                          router.push(`/JobDetailPage?jobId=${item.id}`)
                        }
                      >
                        <Image src={Group} alt="" className={Styles1.tag} />
                        <div className={Styles1.heartdiv}>
                          <HeartOutlined />
                        </div>
                        <div className={Styles1.divbtn}>Federal</div>
                        <div className={Styles1.stardiv}>
                          <div className={Styles1.flexfive}>
                            <button className={Styles1.usedbtn}>
                              {item.salaryType}
                            </button>
                          </div>
                          <p className={Styles1.doltext}>${data.salary}</p>
                        </div>
                        <p className={Styles1.mittext}>2min ago</p>
                        <p className={Styles1.saimtext}>{item.title}</p>
                        <div className={Styles1.userdiv}>
                          <Image src={User} alt="" />
                          <p className={Styles1.usertext}>Username</p>
                        </div>
                        <div className={Styles1.userdiv}>
                          <Image src={Location} alt="" />
                          <p className={Styles1.usertext}>
                            4517 Washington Ave.
                          </p>
                        </div>
                        <div className={Styles1.centerbtn}>
                          <button className={Styles1.calldiv}>
                            <Image src={Phone} alt="" />
                            <p style={{ marginLeft: ".2rem" }}>Apply Now</p>
                          </button>
                        </div>
                        <div className={Styles1.threediv}>
                          <div className={Styles1.nodiv}>
                            <Image src={Like} alt="" />
                            <p className={Styles1.thumtext}>25</p>
                          </div>
                          <div className={Styles1.nodiv}>
                            <Image src={Eye} alt="" />
                            <p className={Styles1.thumtext}>50</p>
                          </div>
                          <div className={Styles1.nodiv}>
                            <Image src={Share} alt="" />
                            <p className={Styles1.thumtext}>30</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </Col>
                ))}
            </Row>
          )}
        </div>
      </div>
      <br />
      <Row justify="center" className={Styles.row}>
        <Col>
          <div className={Styles.centercard}>
            <Image src={Ser} alt="" className={Styles.bigimgh} />
          </div>
        </Col>
        <Col>
          <div className={Styles.centercard12}>
            <Image src={Ser1} alt="" className={Styles.smallimgh} />
            <Image src={Ser2} alt="" className={Styles.smallimgh} />
          </div>
        </Col>
      </Row>
      <div>
        <div className={Styles.enddiv}>
          <p className={Styles.poptext}>Featured Job</p>
        </div>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "10rem",
            border: "#42b00f 2px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        <div className={Styles.centercar}>
          <div className={Styles.widthofcar}>
            <CarouselJob />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSectionJob;
