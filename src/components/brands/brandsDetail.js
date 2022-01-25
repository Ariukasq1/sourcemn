import React from "react";
import { getData, __ } from "../../utils";

const Brand = ({ post }) => {
  const { _embedded, title, acf } = post || {};

  const { about, certificate, advantage, logo, slogan, country, founded_year } =
    acf || {};

  return (
    <div className="brand">
      <div
        className="brand-detail-image"
        style={{ backgroundImage: `url(${getData(_embedded, "image")})` }}
      >
        <div className="about-brand" data-aos="flip-down">
          <div className="gold-title">{__("Brands")}</div>
          <div className="logo-brand">
            <img src={logo} />
          </div>
          <div className="slogan">
            <div className="blockquote">
              <p dangerouslySetInnerHTML={{ __html: slogan }} />
              <div className="location">
                <span>
                  {__("Country:")} {country}
                </span>
                <span>
                  {__("Founded Year:")} {founded_year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="brand-detail-and-about"
        data-aos="fade-down"
        data-aos-delay={200}
        data-aos-easing="ease"
        data-aos-duration="2000"
        data-aos-offset="300"
      >
        <div className="blue-title">
          {__("About")}{" "}
          <span dangerouslySetInnerHTML={{ __html: (title || {}).rendered }} />
        </div>
        <div
          className="brand-detail-text"
          dangerouslySetInnerHTML={{ __html: about }}
        />

        <div className="blue-title">
          <span dangerouslySetInnerHTML={{ __html: (title || {}).rendered }} />{" "}
          {__("Detail")}
        </div>
        <div
          className="brand-detail-text"
          dangerouslySetInnerHTML={{ __html: advantage }}
        />
        {certificate && (
          <div className="certificate">
            <div className="blue-title">
              {__("Certification & Accreditations:")}
            </div>
            <img src={certificate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
