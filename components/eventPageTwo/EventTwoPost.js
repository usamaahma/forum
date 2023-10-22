import React, { useState } from 'react';
import Styles from "../../styles/NewsPost.module.css";
import Business from "../../public/images/karahi.png";
import { Col, Row, Input, Modal, Button, Checkbox, Form } from "antd";
import Image from "next/image";
import FeaturedPost from "../News/FeaturedPost";
import dataOne from "../../dataOne.json";
import Tiww from "../../public/images/Group 134.png";
import Fb from "../../public/images/Group 133.png";
import Ins from "../../public/images/Group 132.png";
import Lin from "../../public/images/Group 131.png";
import BlogCard from "../Blog/BlogCard";
import Carousel from "../eventpage/carousel";
import Link from "next/link";
const { TextArea } = Input;


const onFinish = (values) => {
  console.log('Success:', values);
  localStorage.setItem('Ticketvalues', JSON.stringify(values));
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function EventTwoPost({ data }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={Styles.css}>
        <div>
          <img className={Styles.imgstyle} src={data.image?.[0]} alt="abc" />
          <div className={Styles.boxpadding}>
            <p className={Styles.lookingtext}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              textever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy textever since the 1500s, <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy textever since the 1500s, Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy textever since the
              1500s,
            </p>
          </div>
        </div>
        <div className={Styles.mblview}>
          <div>
            <p className={Styles.share}>Share This Event</p>
            <div className={Styles.imgdivflex}>
              <Image src={Tiww} alt="abc" />
              <Image src={Fb} alt="abc" />
              <Image src={Ins} alt="abc" />
              <Image src={Lin} alt="abc" />
            </div>
          </div>
          <div className={Styles.bothtic}>
            <p className={Styles.share}>Ticket Price: ${data.ticketPrice}</p>
            <Button className={Styles.share11} onClick={showModal} >Ticket Spot</Button>
          </div>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                marginTop:50,
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div>
          <p className={Styles.share}>Leave a Comment </p>
          <hr
            style={{
              border: "solid 1px #D9D9D9",
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          />
          <p className={Styles.share}>Comment:</p>

          <TextArea
            style={{
              border: "solid 1px #D9D9D9",
              marginTop: ".5rem",
              marginBottom: "1rem",
              borderRadius: ".2rem",
            }}
            rows={9}
          />
          <Link href="/EventsPageForm">
            <button className={Styles.btncommt}>Post Comment</button>
          </Link>
        </div>
        <div>
          <p className={Styles.share}>Similar Events</p>
          <div
            style={{
              backgroundColor: "#42b00f",
              borderWidth: 1,
              width: "6.5rem",
              border: "#42b00f 1px solid",
              position: "absolute",
            }}
          ></div>
          <hr
            style={{
              border: "solid 1px #D9D9D9",
            }}
          />
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
    </div>
  );
}

export default EventTwoPost;
