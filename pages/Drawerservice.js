import React from "react";
import Styles from "../styles/LeftSectionDeshi.module.css";
import { Slider, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";

const onChange = (value) => {
  console.log("onChange: ", value);
};
const onAfterChange = (value) => {
  console.log("onAfterChange: ", value);
};

function Drawerservice() {
  return (
    <div>
      <div className={Styles.greybox}>
        <div>
          {/* <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Filter</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          {/* <Dropdown
            menu={{
              items: items1,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Category</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          {/* <Dropdown
            menu={{
              items: items2,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Location</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
        </div>
        <hr style={{ border: "1px solid #E8E8E8" }} />
        <div>
          {/* <Dropdown
            menu={{
              items: items3,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          > */}
          <div className={Styles.greysmll}>
            <p className={Styles.text}>Price range</p>
            <RightOutlined className={Styles.text1} />
          </div>
          {/* </Dropdown> */}
          <div className={Styles.rangdiv}>
            <Slider
              range
              step={10}
              defaultValue={[20, 50]}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
          </div>
          <div className={Styles.indv}>
            <div>
              <p>Min</p>
              <div>
                <Input placeholder="$" className={Styles.input} />
              </div>
            </div>
            <div>
              <p>Max</p>
              <div>
                <Input placeholder="$399" className={Styles.input} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.rangdiv}>
          <button className={Styles.btn}>Apply Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Drawerservice;
