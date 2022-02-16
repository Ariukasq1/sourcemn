import { Row, Col } from "antd";
import React from "react";
import { getData } from "../../utils";
import Image from "next/image";

const ProjectsDetail = ({ post }) => {
  const { title, content, _embedded } = post || {};

  const image = getData(_embedded, "image");

  return (
    <Row className="project-detail">
      <Col
        xxl={12}
        xl={12}
        lg={12}
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
          objectFit="cover"
          objectPosition="center"
        />
      </Col>
      <Col
        xxl={12}
        xl={12}
        lg={12}
        md={24}
        sm={24}
        xs={24}
        className="detail-content"
      >
        <div className="half-text-container">
          <div
            className="blue-title"
            dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
          />
          <p dangerouslySetInnerHTML={{ __html: (content || {}).rendered }} />
        </div>
      </Col>
    </Row>
  );
};

export default ProjectsDetail;
