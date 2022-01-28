import React from "react";
import { getData, __ } from "../../utils";
import Link from "next/link";
import { Col, Row } from "antd";

const HomeCapabilty = ({ capability }) => {
  const { content, _embedded } = capability;

  return (
    <Row className="homeCapability">
      <Col span={12} className="simple-half-image">
        <img src={getData(_embedded, "image")} />
      </Col>
      <Col
        span={12}
        className="capability-home-text"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="0"
      >
        <div>
          <div className="gold-title">{__("Capabilities")}</div>
          <div
            className="text-md"
            dangerouslySetInnerHTML={{ __html: content.rendered }}
          />
          <Link href="/capabilities">
            <div className="read-more-button">{__("Read more")}</div>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default HomeCapabilty;
