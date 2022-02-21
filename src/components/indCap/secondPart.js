import React from "react";
import { getData } from "../../utils";
import { Col, Row } from "antd";
import Image from "next/image";

const SecondPart = ({ post }) => {
  const { title, content, acf, _embedded } = post || {};

  const { supports } = acf || {};

  const { desc } = supports || {};

  const datas = (desc || "").split("<li>");

  const image = getData(_embedded, "image");

  return (
    <Row className="secondPart">
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="product-cards"
      >
        <div className="half-text-container">
          <div
            className="blue-title"
            dangerouslySetInnerHTML={{ __html: (supports || {}).title }}
          />
          <div className="little-cards">
            {datas.map((data, ind) => {
              if (
                data.includes("<ul") ||
                data.includes("<p><!-- /wp:list --></p>")
              ) {
                return null;
              }

              return (
                <div
                  key={ind}
                  data-aos="fade-down"
                  data-aos-delay={ind * 200}
                  data-aos-easing="ease"
                  data-aos-duration="2000"
                  data-aos-offset="300"
                  className="card"
                  dangerouslySetInnerHTML={{ __html: data }}
                />
              );
            })}
          </div>
        </div>
      </Col>
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="overlay-half-image"
      >
        <Image
          loader={() => image}
          src={image}
          alt="image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="overlay-half-text">
          <div
            className="overlay-title"
            dangerouslySetInnerHTML={{
              __html: (title || {}).rendered,
            }}
          />
          <div
            className="overlay-content"
            dangerouslySetInnerHTML={{
              __html: (content || {}).rendered,
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default SecondPart;
