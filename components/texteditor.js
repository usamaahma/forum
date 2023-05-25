import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Styles1 from "../styles/DeshiServiceForm.module.css";

const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <DynamicReactQuill value={text} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
