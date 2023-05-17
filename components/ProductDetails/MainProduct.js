import React from "react";
import Styles from "../../styles/MainProduct.module.css";
import { Col, Row, Rate, Select } from "antd";
import Image from "next/image";
import Shoes from "../../public/images/image 134.png";
import SmallShoes from "../../public/images/Rectangle 4513.png";
import Heart from "../../public/images/Heart.png";
import Vector from "../../public/images/Vector (9).png";
import Facebook from "../../public/images/Group 133.png";
import Twitter from "../../public/images/Group 134.png";
import Instgram from "../../public/images/Group 132.png";
import Linkdin from "../../public/images/Group 131.png";
import { RightOutlined } from "@ant-design/icons";
import TabsOfProducts from "./TabsOfProducts";
import SimilarProducts from "./SimilarProduct";
import Products from "./Products";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function MainProduct() {
  return (
    <div>
      <div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerpro}>
              <div>
                <div className={Styles.flex}>
                  <p>Home</p>
                  <RightOutlined className={Styles.icon} />
                  <p>Men Shoe’s</p>
                  <RightOutlined className={Styles.icon} />
                  <p>Shoe</p>
                  <RightOutlined className={Styles.icon} />
                </div>
                <Image src={Shoes} alt="abc" className={Styles.bigshoe} />
                <div>
                  <Image
                    src={SmallShoes}
                    alt="abc"
                    className={Styles.smallshoe}
                  />
                  <Image
                    src={SmallShoes}
                    alt="abc"
                    className={Styles.smallshoe}
                  />
                  <Image
                    src={SmallShoes}
                    alt="abc"
                    className={Styles.smallshoe}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.centerpro12}>
              <div>
                <h1 className={Styles.bigtext}> Notebook BIgscreen Z51-70</h1>
                <div className={Styles.stardiv}>
                  <Rate allowHalf defaultValue={2.5} className={Styles.size} />
                  <p className={Styles.retext}>5 Reviews</p>
                  <p className={Styles.retext}>SKU #1234</p>
                </div>
                <div className={Styles.stardiv}>
                  <p className={Styles.pritext}>$3.99 </p>
                  <p className={Styles.textpri}>$5.33 </p>
                </div>
                <div>
                  <button className={Styles.btnstock}>In Stock</button>
                </div>
                <p className={Styles.prhtext}>
                  It is a long established fact that a reader will be
                  <br /> distracted by the readable there content of a page when
                  <br /> looking at its layout.
                </p>
                <p>Color:</p>
                <div className={Styles.stardiv}>
                  <div className={Styles.greendiv}></div>
                  <div className={Styles.yellowdiv}></div>
                  <div className={Styles.bluediv}></div>
                  <div className={Styles.browndiv}></div>
                </div>
                <div className={Styles.flexdivtwo}>
                  <div>
                    <p>Size:</p>
                    <br />
                    <Select
                      defaultValue="Small  40 x 36"
                      style={{
                        width: 150,
                        color: "#737373",
                        fontSize: ".7rem",
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "Small   40 x 36",
                          label: "Small   40 x 36",
                        },
                        {
                          value: "Small   40 x 36",
                          label: "Small   40 x 36",
                        },
                      ]}
                    />
                  </div>
                  <div>
                    <p>Quantity:</p>
                    <br />
                    <div className={Styles.flexdiv}>
                      <button className={Styles.minus}>-</button>
                      <div className={Styles.textdivone}>1</div>
                      <button className={Styles.plus}>+</button>
                    </div>
                  </div>
                </div>
                <div className={Styles.btndiv}>
                  <button className={Styles.buybtn}>BUY NOW</button>
                  <button className={Styles.addbtn}>ADD TO CART</button>
                </div>
                <div className={Styles.divicon}>
                  <div className={Styles.heartdiv}>
                    <Image src={Heart} alt="abc" />
                    <p className={Styles.whishtext}>Add to Wishlist</p>
                  </div>
                  <div className={Styles.heartdiv}>
                    <Image src={Vector} alt="abc" />
                    <p className={Styles.whishtext}>Size Guide</p>
                  </div>
                </div>
                <hr className={Styles.line} />
                <div>
                  <p className={Styles.metext}>
                    <a className={Styles.cattext}>Category :</a> Menshoe
                  </p>
                  <p className={Styles.metext}>
                    <a className={Styles.cattext}>Tags :</a> Men, Shoe
                  </p>
                </div>
                <div className={Styles.flexdiver}>
                  <p className={Styles.metext}>Share:</p>
                  <div className={Styles.flexrow}>
                    <Image src={Twitter} alt="abc" />
                    <Image src={Facebook} alt="abc" />
                    <Image src={Linkdin} alt="abc" />
                    <Image src={Instgram} alt="abc" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <TabsOfProducts />
      <SimilarProducts />
      <Products />
    </div>
  );
}

export default MainProduct;
