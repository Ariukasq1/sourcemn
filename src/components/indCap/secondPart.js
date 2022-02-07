import React from "react";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Slider from "react-slick";
import { Col, Row } from "antd";

const SecondPart = ({ post }) => {
  const { title, content, acf, _embedded } = post || {};

  const { supports } = acf || {};

  const { desc } = supports || {};

  const datas = (desc || "").split("<li>");

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
      </Col>
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="half-back-image-with-text"
        style={{ backgroundImage: `url(${getData(_embedded, "image")})` }}
      >
        <div className="overlayText">
          <h2
            dangerouslySetInnerHTML={{
              __html: (title || {}).rendered,
            }}
          />
          <div
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
