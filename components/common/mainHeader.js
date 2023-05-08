import React from "react";
import Header3 from "./header2";
import Newfile from "./newfile";
import HeaderCarousel from "./headercarousel";
import FirstHeader from "./FirstHeader";
import Header2 from "./header1";

function MainHeader() {
  return (
    <div>
      <FirstHeader />
      <Header2 />
      <Header3 />
      <Newfile />
      <HeaderCarousel />
    </div>
  );
}

export default MainHeader;
