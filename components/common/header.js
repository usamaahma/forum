import React, { useState } from "react";
import Styles from "../../styles/Header.module.css";

import { Layout, Menu } from "antd";
const { Header } = Layout;

function Header1() {
  const [isBangla, setIsBangla] = useState(false);

  const handleClick = () => {
    setIsBangla(!isBangla);
  };

  return (
    <div className={Styles.remove}>
      {" "}
      <Layout>
        <Header style={{ backgroundColor: "white" }} className={Styles.headerr}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            bordered="false"
          >
            <div className={Styles.menudiv}>
              <div className={Styles.menudiv1}>
                {" "}
                <img src="../images/Phone.png" alt="abc" /> 123-456-789
              </div>
              <div className={Styles.menudiv1}>
                {" "}
                <img src="../images/Email.png" alt="abc" /> bon@gmail.com
              </div>
            </div>
          </Menu>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            bordered="false"
          >
            <div className={Styles.menudiv3}>
              <div
                onClick={handleClick}
                style={{
                  marginTop:"1rem",
                  display: "inline-flex",
                  width: "70px",
                  height: "30px",
                  borderRadius: "3px",
                  overflow: "hidden",
                  backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    height: "100%",
                    borderRadius: "3px",
                    backgroundColor: isBangla ? "#FFFFFF" : "#42B00F",
                    color: isBangla ? "black" : "white",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  Eng
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    height: "100%",
                    borderRadius: "3px",
                    backgroundColor: isBangla ? "#42B00F" : "#FFFFFF",
                    color: isBangla ? "white" : "black",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                  }}
                >
                  বাংলা
                </div>
              </div>
              <div>
                {" "}
                <img src="../images/twitter.png" />
              </div>
              <div>
                {" "}
                <img src="../images/faceb.png" />
              </div>
              <div>
                {" "}
                <img src="../images/insta.png" />
              </div>
              <div>
                {" "}
                <img src="../images/linkdin.png" />
              </div>
            </div>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default Header1;
