import React from "react";
import { Row, Col } from "antd";
import { getData, __ } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const FirstPart = ({ data, clas }) => {
  return (
    <div className="firstPart">
      <div className="page-title">{__(`${clas}`)}</div>
      <Row className="industries">
        {data
          .slice(0)
          .reverse()
          .map((post, ind) => {
            const { title, excerpt, slug, _embedded } = post || {};
            const image = getData(_embedded, "image");
            return (
              <Col
                xxl={6}
                xl={6}
                lg={6}
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

                <Link href={`/${clas}/${slug}#section2`}>
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
