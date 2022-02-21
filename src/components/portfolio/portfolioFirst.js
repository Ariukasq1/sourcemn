import React from "react";
import { Row, Col } from "antd";
import { getData, __ } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const FirstPart = ({ data }) => {
  return (
    <div className="firstPart">
      <div className="page-title">{__(`portfolio`)}</div>
      <Row className="industries">
        {data
          .slice(0)
          .reverse()
          .map((post, ind) => {
            const { title, excerpt, slug, _embedded } = post || {};
            const image = getData(_embedded, "image");
            return (
              <Col
                xxl={8}
                xl={8}
                lg={8}
                md={24}
                sm={24}
                xs={24}
                key={ind}
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay={ind * 300}
                data-aos-duration="2000"
                data-aos-offset="300"
                className="industries-part"
              >
                <div
                  className="continue-title"
                  dangerouslySetInnerHTML={{ __html: title.rendered }}
                />

                <div
                  className="continue-text"
                  dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                />

                <Link
                  href={`/portfolio/${slug}`}
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <a className="read-more-detail">
                    {__("Read more")} <ArrowRightOutlined />
                  </a>
                </Link>

                <div className="industries-image">
                  <Image
                    loader={() => image}
                    src={image}
                    alt="pet"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default FirstPart;
