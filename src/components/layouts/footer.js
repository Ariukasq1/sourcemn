// @ts-nocheck
import React from "react";
import {
  PhoneOutlined,
  PrinterOutlined,
  MailOutlined,
  HomeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { __ } from "../../utils";
import { Row, Col } from "antd";

function Footer({ contact }) {
  const { acf } = contact || {};
  const { address, email, fax, tel, social } = acf || {};
  const { office } = address || {};

  return (
    <footer>
      <Row className="footer">
        <Col xxl={7} xl={6} lg={7} md={24} sm={24} xs={24} className="contacts">
          <h2>{__("Contacts")}</h2>
          <p>
            <PhoneOutlined /> Tel: {tel}
          </p>
          <p>
            <PrinterOutlined /> Fax: {fax}
          </p>
          <p>
            <MailOutlined /> Email: {email}
          </p>
          <p>
            <a href={(social || {}).facebook}>
              <FacebookOutlined />
            </a>
            <a href={(social || {}).instagram}>
              <InstagramOutlined />
            </a>
            <a href={(social || {}).linkedin}>
              <LinkedinOutlined />
            </a>
            <a href={(social || {}).youtube}>
              <YoutubeOutlined />
            </a>
            <a href={(social || {}).twitter}>
              <TwitterOutlined />
            </a>
          </p>
        </Col>
        <Col
          xxl={7}
          xl={6}
          lg={6}
          md={24}
          sm={24}
          xs={24}
          className="headOffice"
        >
          <h2>{(office || {}).name}</h2>
          <p>
            <HomeOutlined /> {(office || {}).address}
          </p>
        </Col>
        <Col
          xxl={9}
          xl={10}
          lg={10}
          md={24}
          sm={24}
          xs={24}
          className="contactUs"
        >
          <h2>{__("Please contact us")}</h2>
          <div>
            <label>{__("Full name")}</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder={__("Enter full name")}
              required
            />
          </div>
          <div>
            <label>{__("Contact Email")}</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={__("Enter email")}
              required
            />
          </div>
          <div>
            <label>{__("Message")}</label>
            <textarea
              id="Message"
              name="message"
              placeholder={__("Enter text")}
              required
            />
          </div>

          <input type="submit" value={__("Send")} />
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
