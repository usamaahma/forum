import { deshiOneForm } from "@/helper/axios";
import { message } from "antd";
import React, { useState } from "react";

const Switch = ({ defaultChecked, data, id }) => {
  const [loading, setloading] = useState(defaultChecked);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onChanges = (id, available) => {
    console.log(available, "jani");

    handleUpdate(id, available);
  };
  const handleUpdate = (id, available) => {
    setloading(true);

    // let token = localStorage.getItem("talbeilm-token");

    let data = {
      available: available,
    };

    deshiOneForm(`/${id}`, {
      method: "patch",
      data: data,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      .then(() => {
        setloading(false);
        message.success("Updated!");
        // deleteImage();
      })

      .catch(() => {
        setloading(false);
        message.error("something went wrong, please try again!");
      })
      .finally(() => {
        setloading(false);
      });
  };
  console.log(data, "av");
  return (
    <label>
      <input
        type="checkbox"
        checked={data}
        onChange={() => onChanges(id, !data)}
        style={{ display: "none" }}
      />
      <span
        style={{
          display: "inline-block",
          width: "50px",
          height: "30px",
          borderRadius: "15px",
          backgroundColor: data ? "green" : "red",
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
            transform: data ? "translateX(20px)" : "translateX(0)",
          }}
        />
      </span>
    </label>
  );
};

export default Switch;
