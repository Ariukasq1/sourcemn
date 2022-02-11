import { Row, Col } from "antd";
import React from "react";
import { getData } from "../../utils";
import Image from "next/image";

const ProjectsDetail = ({ post }) => {
  const { title, content, _embedded } = post || {};

  const image = getData(_embedded, "image");

  return (
    <div className="page project-detail">
      <Row className="detail" data-aos="zoom-in">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="detail-content"
        >
          <div
            className="blue-title"
            data-aos="fade-right"
            dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
          />
          <div
            className="content"
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: (content || {}).rendered }}
          />
        </Col>
        <Col
          xxl={11}
          xl={11}
          lg={11}
          md={24}
          sm={24}
          xs={24}
          className="detail-image"
        >
          <Image
            loader={() => image}
            src={image}
            alt="back"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            data-aos="fade-down"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsDetail;
