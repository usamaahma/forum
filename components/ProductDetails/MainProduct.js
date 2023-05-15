import React from "react";
import Styles from "../../styles/MainProduct.module.css";
import { Col, Row, Rate, Select } from "antd";
import Image from "next/image";
import Shoes from "../../public/images/image 134.png";
import SmallShoes from "../../public/images/Rectangle 4513.png";

function MainProduct() {
  return (
    <div>
      <div>
        <div>
          <p>Home</p>
          <p>Men Shoe’s</p>
          <p>Shoe</p>
        </div>
        <Row justify="center">
          <Col>
            <div className={Styles.centerpro}>
              <div>
                <Image src={Shoes} alt="" />
                <div>
                  <Image src={SmallShoes} alt="" />
                  <Image src={SmallShoes} alt="" />
                  <Image src={SmallShoes} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={Styles.centerpro}>
              <div>
                <h1> Notebook BIgscreen Z51-70</h1>
                <div>
                  <Rate allowHalf defaultValue={2.5} />
                  <p>5 Reviews</p>
                </div>
                <div>
                  <p>$3.99 </p>
                  <p>$5.33 </p>
                </div>
                <div>
                  <button>In Stock</button>
                </div>
                <p>
                  It is a long established fact that a reader will be
                  <br /> distracted by the readable there content of a page when
                  <br /> looking at its layout.
                </p>
                <p>Color:</p>
                <div>
                  <div>green</div>
                  <div>yellow</div>
                  <div>blue</div>
                  <div>brown</div>
                </div>
                <div>
                  <div>
                    <p>Size:</p>
                    <Select />
                  </div>
                  <div>
                    <p>Quantity:</p>
                    <div></div>
                  </div>
                </div>
                <div>
                  <button>BUY NOW</button>
                  <button>ADD TO CART</button>
                </div>
                <div>
                  <div>
                    <p>Add to Wishlist</p>
                  </div>
                  <div>
                    <p>Size Guide</p>
                  </div>
                </div>
                <hr />
                <div>
                  <p>Category : Menshoe</p>
                  <p>Tags : Men, Shoe</p>
                </div>
                <div>
                  <p>Share:</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainProduct;
