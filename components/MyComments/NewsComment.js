import React from "react";
import Styles from "../../styles/NewsComment.module.css";
import { Button, Dropdown, Space, Tooltip, message } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "edit",
    key: "1",
  },
  {
    label: "delete",
    key: "2",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const data = [
  {
    key: "1",
    post: "Siam Post",
    time: "2 Hours ago",
    image: <img alt="abc" src="../images/newsimg.png" />,
    comments: "News Comment Here",
  },
  {
    key: "2",
    post: "Siam Post",
    time: "2 Hours ago",
    image: <img alt="abc" src="../images/newsimg.png" />,
    comments: "News Comment Here",
  },
  {
    key: "3",
    post: "Siam Post",
    time: "2 Hours ago",
    image: <img alt="abc" src="../images/newsimg.png" />,
    comments: "News Comment Here",
  },
];

function NewsComment() {
  return (
    <div className={Styles.mainnewsdiv}>
      {data.map((data, index) => (
        <div key={index} className={Styles.gaptwop}>
          <div>
            <div className={Styles.dispbetw}>
              <div>
                {" "}
                {data.post}
                <br />
                <p className={Styles.txttime}>{data.time}</p>
              </div>
              <Dropdown menu={menuProps}>
                <Button className={Styles.buttons}>
                  <Space>
                    <EllipsisOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </div>
          <div className={Styles.datainterv}>
            {data.image}
            <div>
              {" "}
              <p className={Styles.txtint}>
                Interview Question: Why Dont You
                <br /> Have a Degree?
              </p>
              <p className={Styles.fontw}>{data.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsComment;
