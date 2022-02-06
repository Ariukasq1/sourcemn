import { Row, Col } from "antd";
import React from "react";
import { getData } from "../../utils";

const ProjectsDetail = ({ post }) => {
  const { title, content, _embedded } = post || {};

  return (
    <Row className="project-detail">
      <Col
        span={12}
        className="long-half-text"
        data-aos="fade-down"
        data-aos-easing="ease"
      >
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: (content || {}).rendered }} />
      </Col>
      <Col span={12} className="long-half-image">
        <img src={getData(_embedded, "image")} />
      </Col>
    </Row>
  );
};

export default ProjectsDetail;
