import React from "react";
import Styles from "../../styles/RightJobDetail.module.css";
import Image from "next/image";
import Laptop from "../../public/images/Rectangle 4573.png";
import Laptop1 from "../../public/images/Rectangle 4574.png";
import Logo from "../../public/images/Rectangle 65.png";
import Map from "../../public/images/Rectangle 79.png";
import Calling from "../../public/images/Calling.png";
import messa from "../../public/images/messa.png";
import Web from "../../public/images/web.png";

function RightJobDetail({ data }) {
  return (
    <div>
      <div className={Styles.colmbox}>
        <Image src={Laptop} alt="" className={Styles.sizelapimg} />
        <Image src={Laptop1} alt="" className={Styles.sizelapimg} />
      </div>
      <div className={Styles.borderbox}>
        <div className={Styles.imgbox}>
          <Image src={Logo} alt="" />
          <div className={Styles.left}>
            <p className={Styles.comp}>{data.name}</p>
            <p className={Styles.mem}>Member Since 2023</p>
          </div>
        </div>
        <div className={Styles.colmbox}>
          <button className={Styles.btngreen}>
            <Image src={Calling} alt="" />
            <p style={{ marginLeft: ".5rem" }}>{data.contactNumber}</p>
          </button>
          <button className={Styles.btnwhite}>
            <Image src={messa} alt="" />
            <p style={{ marginLeft: ".5rem" }}>{data.email}</p>
          </button>
          <button className={Styles.btnwhite}>
            <Image src={Web} alt="" />
            <p style={{ marginLeft: ".5rem" }}>{data.website}</p>
          </button>
        </div>
        <Image src={Map} alt="" className={Styles.mapimg} />
        <p className={Styles.north}>{data.address}</p>
      </div>
    </div>
  );
}

export default RightJobDetail;
