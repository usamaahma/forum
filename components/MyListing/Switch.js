import React, { useState } from "react";

const Switch = ({ defaultChecked }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <span
        style={{
          display: "inline-block",
          width: "50px",
          height: "30px",
          borderRadius: "15px",
          backgroundColor: isChecked ? "green" : "red",
          transition: "background-color 0.3s ease",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "26px",
            height: "26px",
            borderRadius: "13px",
            backgroundColor: "white",
            margin: "2px",
            transition: "transform 0.3s ease",
            transform: isChecked ? "translateX(20px)" : "translateX(0)",
          }}
        />
      </span>
    </label>
  );
};

export default Switch;
