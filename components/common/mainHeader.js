import React from "react";
import Header2 from "./header1";
import Header1 from "./header";
import Header3 from "./header2";
import Newfile from "./newfile";
import HeaderCarousel from "./headercarousel";

function MainHeader() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Header3 />
      <Newfile />
      <HeaderCarousel />
    </div>
  );
}

export default MainHeader;
