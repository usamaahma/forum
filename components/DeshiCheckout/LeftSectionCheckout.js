import React from "react";
import { Input, Radio } from "antd";

import Styles from "../../styles/leftcheckout.module.css";

function LeftSectionCheckout() {
  return (
    <div className={Styles.centermbl}>
      <div className={Styles.txtb}>Shopping Address</div>
      <div className={Styles.dispflx}>
        <div>
          {" "}
          <p>First Name</p>
          <br />
          <Input className={Styles.inputs} placeholder="First Name" />
        </div>
        <div className={Styles.mrmb}>
          <p>Last Name</p>
          <br />
          <Input className={Styles.inputs} placeholder="Last Name" />
        </div>
      </div>
      <div className={Styles.dispflx}>
        <div>
          {" "}
          <p>Company Name</p>
          <br />
          <Input className={Styles.inputs} placeholder="Company Name" />
        </div>
        <div className={Styles.mrmb}>
          <p>Country/ Region</p>
          <br />
          <Input
            className={Styles.inputs}
            placeholder="Country/ Region
"
          />
        </div>
      </div>
      <div className={Styles.dispflx}>
        <div>
          {" "}
          <p>Street Address</p>
          <br />
          <Input className={Styles.inputs} placeholder="Street Address" />
        </div>
        <div className={Styles.mrmb}>
          <p>Apartment, suite, etc. (optional)</p>
          <br />
          <Input
            className={Styles.inputs}
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>
      </div>
      <div className={Styles.dispflx}>
        <div>
          {" "}
          <p>City</p>
          <br />
          <Input className={Styles.inputs} placeholder="City" />
        </div>
        <div className={Styles.mrmb}>
          <p>Post Code</p>
          <br />
          <Input className={Styles.inputs} placeholder="Post Code" />
        </div>
      </div>
      <div className={Styles.dispflx}>
        <div>
          {" "}
          <p>Phone</p>
          <br />
          <Input className={Styles.inputs} placeholder="Phone" />
        </div>
        <div className={Styles.mrmb}>
          <p>Email</p>
          <br />
          <Input className={Styles.inputs} placeholder="Email" />
        </div>
      </div>
      <div>
        <p className={Styles.txtbo}>Billing Address</p>
        <p>
          Select the address that matches your card{" "}
          <span class="line-break"></span> or payment method.
        </p>
      </div>
      <div className={Styles.radiodiv}>
        <Radio>Same as shipping address</Radio>
        <br />
        <Radio>Use a different billing address</Radio>
      </div>
    </div>
  );
}

export default LeftSectionCheckout;
