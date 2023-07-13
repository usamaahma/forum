import React from "react";
import Styles from "../../styles/taxpayer.module.css";
import { Button, Radio, Input, Checkbox, Form, message } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function TermsConditions() {
  return (
    <div className={Styles.mrtoptax}>
      <div className={Styles.paddingall}>
        <h2> Terms and conditions</h2>
        <hr style={{ border: "solid 1px  #D0D0D0", marginBottom: "2rem" }} />
        <br />
        <Checkbox onChange={onChange}>
          {" "}
          <h4 style={{ fontWeight: "600" }}>
            I consent to Bongodeshi terms and condition.
          </h4>
        </Checkbox>
        <br />
        <br />
        <p style={{ lineHeight: "1.5" }}>
          Under penalties of perjury, I certify that:
          <br /> 1.The number shown on this form is my correct taxpayer
          identification number (or I am waiting for a number to be issued to
          me), and
          <br /> 2.I am not subject to backup withholding because: (a) I am
          exempt from backup withholding, or (b) I have not been notified by the
          <br /> Internal Revenue Service (IRS) that I am subject to backup
          withholding as a result of a failure to report all interest or
          dividends, or (c)
          <br /> the IRS has notified me that I am no longer subject to backup
          withholding, and
          <br /> 3.I am a U.S. citizen or other U.S. person (defined in the
          instructions), and
          <br /> 4.The FATCA code(s) entered on this form (if any) indicating
          that I am exempt from FATCA reporting is correct.
          <br /> Certification Instructions: You must cross out item 2 above if
          you have been notified by the IRS that you are currently subject to
          backup
          <br /> withholding. You will need to print out your hard copy form at
          the end of the interview and cross out item 2 before signing and
          mailing to
          <br /> the address provided. The Internal Revenue Service does not
          require your consent to any provision of this document other than the
          certifications required to
          <br /> avoid backup withholding.
        </p>
        <br /> <br />
        <Form
          className={Styles.formcenter}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="signature"
            rules={[
              {
                message: "Please input your Registered Business Name!",
              },
            ]}
          >
            <h4>Signature</h4>
            <Input
              placeholder="Signature (Type Your Full name)"
              className={Styles.spaces}
            />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[
              {
                message: "Please input your Registered Business Name!",
              },
            ]}
          >
            <h4>
              By typing my name on the given date, I acknowledge I’m
              <br /> signing the tax form under penalties of perjury.
            </h4>
            <Input placeholder="Date" className={Styles.spaces} />
          </Form.Item>
          <Form.Item>
            <div className={Styles.leftside}>
              {" "}
              <button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Business Sign up Completed")}
                style={{ marginTop: "5rem" }}
                className={Styles.btn}
              >
                Finish
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default TermsConditions;
