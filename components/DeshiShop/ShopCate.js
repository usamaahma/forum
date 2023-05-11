import React from "react";
import Styles from "../../styles/ShopCate.module.css";
import ProductCard from "./ProductCard";
function ShopCate() {
  return (
    <div>
      <div>
        <h3>Shop by Category</h3>
        <div
          style={{
            backgroundColor: "#42b00f",
            borderWidth: 1,
            width: "9rem",
            border: "#42b00f 1px solid",
            position: "absolute",
          }}
        ></div>
        <hr />
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default ShopCate;
