import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";
import { Row, Col } from "antd";

const Additional = ({ post }) => {
  const { additional } = post.acf || {};

  const renderPost = (group, index) => {
    return (
      <Row className="texts">
        <Col span={4}>
          <img src={`/images/industry${index}.png`} />
        </Col>
        <Col
          span={19}
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration="2000"
          data-aos-offset="300"
          dangerouslySetInnerHTML={{
            __html: group,
          }}
        />
      </Row>
    );
  };

  return (
    <>
      <div className="section">
        <div className="odd">
          {additional && renderPost(additional.group, 1)}
        </div>
      </div>
      <div className="section">
        <div className="even">
          {additional && renderPost(additional.group_1, 2)}
        </div>
      </div>
      <div className="section">
        <div className="odd">
          {additional && renderPost(additional.group_2, 3)}
        </div>
      </div>
    </>
  );
};

export default Additional;
