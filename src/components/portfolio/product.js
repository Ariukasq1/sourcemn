import React from "react";
import { getData } from "../../utils";
import { Row, Col } from "antd";
import Image from "next/image";

const Product = ({ post }) => {
  const { title, content, _embedded } = post || {};
  const image = getData(_embedded, "image");
  return (
    <Row className="portfolio-product top">
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="simple-half-text"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="0"
      >
        <div className="half-text-container">
          <div
            className="blue-title"
            dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
          />
          <p dangerouslySetInnerHTML={{ __html: (content || {}).rendered }} />
        </div>
      </Col>
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
    </Row>
  );
};

export default Product;
