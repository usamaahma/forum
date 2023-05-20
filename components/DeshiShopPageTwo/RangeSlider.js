import { Col, InputNumber, Row, Slider, Space } from "antd";
import { useState } from "react";
const RangeSlider = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
      <Row style={{ display: "grid" }}>
        <Col>
          <Slider
            min={0}
            max={100000}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
            buttonStyle={{ backgroundColor: "green" }}
          />
        </Col>
        <Col>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col style={{ display: "flex", alignItems: "center" }}>
              {" "}
              Min
              <InputNumber
                style={{
                  margin: "0 16px",
                }}
                value={"0"}
                onChange={onChange}
              />
            </Col>
            <Col style={{ display: "flex", alignItems: "center" }}>
              {" "}
              Min
              <InputNumber
                style={{
                  margin: "0 16px",
                }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default RangeSlider;
