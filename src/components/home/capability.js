import React from "react";
import { getData, __ } from "../../utils";
import Link from "next/link";
import { Col, Row } from "antd";
import { generateLink } from "../../config";
import Image from "next/image";

const HomeCapabilty = ({ capability }) => {
  const { content, _embedded } = capability;
  const image = getData(_embedded, "image");

  return (
    <Row className="homeCapability top">
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="simple-half-image"
      >
        <Image
          loader={() => image}
          src={image}
          alt="image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Col>
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        md={24}
        sm={24}
        xs={24}
        className="simple-half-text"
        data-aos="fade-up"
      >
        <div className="half-text-container">
          <div className="gold-title">{__("Capabilities")}</div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content.rendered }}
          />
          <Link href={generateLink("/capabilities")}>
            <a className="read-more-button">{__("Read more")}</a>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default HomeCapabilty;
