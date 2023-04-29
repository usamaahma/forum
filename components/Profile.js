import React from "react";
import Styles from "../styles/Profile.module.css";
import { Col, Row } from "antd";

function Profile() {
  return (
    <div className={Styles.bigboxpro}>
      <div style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
        <div className={Styles.basicbox}>
          <p className={Styles.bigtext}>Basic Information</p>
        </div>
        <hr className={Styles.linee} />
        <div>
          <Row>
            <Col lg={8}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext}>First Name</p>
                <p className={Styles.protext}>Last Name</p>
                <p className={Styles.protext}>Date of Birth</p>
                <p className={Styles.protext}>Email</p>
                <p className={Styles.protext}>Address</p>
                <p className={Styles.protext}>Phone</p>
              </div>
            </Col>
            <Col lg={10}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext1}>Istiaq</p>
                <p className={Styles.protext1}>Firoz</p>
                <p className={Styles.protex1t}>09/02/2023</p>
                <p className={Styles.protext1}>efat@gmail.com</p>
                <p className={Styles.protext1}>
                  1329 Saint Lawrence Ave, Bronx, NY
                </p>
                <p className={Styles.protext1}>+1 (929) 303 0303</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div className={Styles.basicbox}>
          <p className={Styles.bigtext}>Education</p>
        </div>
        <hr className={Styles.linee} />
        <div>
          <Row>
            <Col lg={8}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext}>Institution</p>
                <p className={Styles.protext}>Highest Degree</p>
                <p className={Styles.protext}>Certification</p>
              </div>
            </Col>
            <Col lg={10}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext1}>University of Dhaka</p>
                <p className={Styles.protext1}>Masters in Social Science</p>
                <p className={Styles.protext1}>Amazon Cloud Practitioner</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div className={Styles.basicbox}>
          <p className={Styles.bigtext}>Business Info</p>
        </div>
        <hr className={Styles.linee} />
        <div>
          <Row>
            <Col lg={8}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext}>Business Name</p>
                <p className={Styles.protext}>Address</p>
                <p className={Styles.protext}>Contact Number</p>
                <p className={Styles.protext}>Email</p>
              </div>
            </Col>
            <Col lg={10}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext1}>Technovee</p>
                <p className={Styles.protext1}>
                  1329 Saint Lawrence Ave, Bronx, NY
                </p>
                <p className={Styles.protext1}>+1 (929) 303 0303</p>
                <p className={Styles.protext1}>efat@gmail.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div className={Styles.basicbox}>
          <p className={Styles.bigtext}>Social Network</p>
        </div>
        <hr className={Styles.linee} />
        <div>
          <Row>
            <Col lg={8}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext}>Facebook</p>
                <p className={Styles.protext}>Instagram</p>
                <p className={Styles.protext}>Twitter</p>
                <p className={Styles.protext}>Youtube</p>
                <p className={Styles.protext}>LinkedIn</p>
                <p className={Styles.protext}>GitHub</p>
              </div>
            </Col>
            <Col lg={10}>
              <div className={Styles.prodiv}>
                <p className={Styles.protext1}>Technovee</p>
                <p className={Styles.protext1}>istiaq_firoz</p>
                <p className={Styles.protext1}>istiaq_firoz</p>
                <p className={Styles.protext1}>istiaq_firoz</p>
                <p className={Styles.protext1}>istiaq_firoz</p>
                <p className={Styles.protext1}>istiaq_firoz</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Profile;
