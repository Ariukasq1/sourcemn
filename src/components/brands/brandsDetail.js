import React from "react";
import { getData, __ } from "../../utils";
import { Row, Col } from "antd";
import Image from "next/image";

const Brand = ({ post }) => {
  const { _embedded, title, acf } = post || {};

  const { about, certificate, advantage, logo, slogan, country, founded_year } =
    acf || {};

  const image = getData(_embedded, "image");

  return (
    <div className="brand">
      <div className="brand-banner">
        <Image
          loader={() => image}
          src={image}
          layout="fill"
          objectFit="cover"
        />
        <div className="container">
          <h1 dangerouslySetInnerHTML={{ __html: (title || {}).rendered }} />
        </div>
      </div>

      <div className="second-level-wrapper">
        <div className="container">
          <ul>
            <li>
              <span>
                {__("Country")}: {country}
              </span>
            </li>
            <li>
              <span>
                {__("Founded year")}: {founded_year}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-brand">
        <div className="container">
          <Row className="intro-content">
            <Col xxl={17} xl={17} lg={17} md={20} sm={20} xs={24}>
              <h1 dangerouslySetInnerHTML={{ __html: slogan }} />
              <p dangerouslySetInnerHTML={{ __html: about }} />
            </Col>
          </Row>
        </div>
      </div>

      <div className="detail-brand">
        <div className="container">
          <Row className="details">
            <Col xxl={17} xl={17} lg={17} md={20} sm={20} xs={24}>
              <div className="detail-text-title">
                <span
                  dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
                />{" "}
                {__("Detail")}
              </div>
              <div
                className="detail-text-ul"
                dangerouslySetInnerHTML={{ __html: advantage }}
              />
            </Col>
          </Row>
        </div>
      </div>
      {certificate && (
        <div className="cert-brand">
          <div className="container">
            <Row className="cert">
              <Col xxl={17} xl={17} lg={17} md={20} sm={20} xs={23}>
                <div className="blue-title">
                  {__("Certification & Accreditations")}:
                </div>
                <div className="cert-image">
                  <Image
                    loader={() => certificate}
                    src={certificate}
                    layout="fill"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brand;
