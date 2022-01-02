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

function Footer({ contact }) {
  const { address, email, fax, tel, social } = contact.acf;
  const { office } = address;
  return (
    <footer>
      <div className="footer">
        <div className="contacts">
          <h2>Contacts</h2>
          <h2>
            <PhoneOutlined /> Tel: {tel}
          </h2>
          <h2>
            <PrinterOutlined /> Fax: {fax}
          </h2>
          <h2>
            <MailOutlined /> Email: {email}
          </h2>
          <h2>
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
          </h2>
        </div>
        <div className="headOffice">
          <h2>{office.name}</h2>
          <h2>
            <HomeOutlined /> {office.address}
          </h2>
        </div>
        <div className="contactUs">
          <h2>Please contact us</h2>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Enter full name"
            required
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <textarea
            id="Message"
            name="message"
            placeholder="Enter text"
            required
          />
          <input type="submit" value="Send" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
