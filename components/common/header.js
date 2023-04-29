import React, { useState } from "react";
import Styles from "../../styles/Header.module.css";
import { Layout, Menu } from "antd";
const { Header } = Layout;

function Header1() {
  const [selectedLang, setSelectedLang] = useState("english");
  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    color: selectedLang === "english" ? "#42B00F" : "#000000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    marginRight: "10px",
  };
  return (
    <div className={Styles.remove}>
      {" "}
      <Layout>
        <Header style={{ backgroundColor: "white" }} className={Styles.headerr}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]} bordered="false">
            <div className={Styles.menudiv}>
              <div className={Styles.menudiv1}>
                {" "}
                <img src="../images/phone.png" /> 123-456-789
              </div>
              <div className={Styles.menudiv1}>
                {" "}
                <img src="../images/Email.png" /> bon@gmail.com
              </div>
            </div>
          </Menu>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]} bordered="false">
            <div className={Styles.menudiv3}>
              <div className={Styles.buttons}>
                <button
                  style={
                    selectedLang === "english"
                      ? {
                          ...buttonStyle,
                          backgroundColor: "#42B00F",
                          color: "#FFFFFF",
                        }
                      : buttonStyle
                  }
                  onClick={() => handleLangChange("english")}
                >
                  English
                </button>
                <button
                  style={
                    selectedLang === "hindi"
                      ? {
                          ...buttonStyle,
                          backgroundColor: "#42B00F",
                          color: "#FFFFFF",
                        }
                      : buttonStyle
                  }
                  onClick={() => handleLangChange("hindi")}
                >
                  বাংলা
                </button>
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
