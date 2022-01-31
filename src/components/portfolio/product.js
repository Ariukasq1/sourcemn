import React from "react";
import { getData } from "../../utils";
import { Row, Col } from "antd";

const Product = ({ post }) => {
  const { title, content, _embedded } = post || {};

  return (
    <Row className="portfolio-product">
      <Col
        span={12}
        data-aos="fade-down"
        data-aos-easing="ease"
        className="half-text"
      >
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
        />
        <p dangerouslySetInnerHTML={{ __html: (content || {}).rendered }} />
      </Col>
      <Col span={12} className="half-image">
        <img src={getData(_embedded, "image")} />
      </Col>
    </Row>
  );
};

export default Product;
