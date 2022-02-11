import React from "react";
import { getData } from "../../utils";
import { Row, Col } from "antd";
import Image from "next/image";

const AboutUs = ({ data }) => {
  const image = getData(data._embedded, "image");

  return (
    <Row className="about-us">
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="about-image" /*  data-aos="fade-right" */
      >
        <Image
          loader={() => image}
          src={image}
          layout="fill"
          objectFit="contain"
        />
      </Col>
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="about-us-text" /* data-aos="fade-left" */
      >
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: data.title.rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </Col>
    </Row>
  );
};

export default AboutUs;
