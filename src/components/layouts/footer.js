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

function Footer({ contact }) {
  const { address, email, fax, tel, social } = contact.acf;
  const { office } = address;
  return (
    <footer>
      <div className="footer">
        <div className="contacts">
          <p>{__("Contacts")}</p>
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
            <a href={social.facebook}>
              <FacebookOutlined />
            </a>
            <a href={social.instagram}>
              <InstagramOutlined />
            </a>
            <a href={social.linkedin}>
              <LinkedinOutlined />
            </a>
            <a href={social.youtube}>
              <YoutubeOutlined />
            </a>
            <a href={social.twitter}>
              <TwitterOutlined />
            </a>
          </p>
        </div>
        <div className="headOffice">
          <p>{office.name}</p>
          <p>
            <HomeOutlined /> {office.address}
          </p>
        </div>
        <div className="contactUs">
          <p>Please contact us</p>
          <div>
            <label>{__("Full name")}</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter full name"
              required
            />
          </div>
          <div>
            <label>{__("Contact Email")}</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label>{__("Message")}</label>
            <textarea
              id="Message"
              name="message"
              placeholder="Enter text"
              required
            />
          </div>

          <input type="submit" value="Send" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
