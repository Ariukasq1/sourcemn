import { Row, Col } from "antd";
import React from "react";
import { getData } from "../../utils";
import Image from "next/image";
import Fullpage from "../FullPage";
import Culture from "./culture";
import Footer from "../layouts/footer";

const SelectionProcess = ({ posts, data, contact }) => {
  const image = getData(posts[1]._embedded, "image");

  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="page">
              <Culture data={data} />
            </div>
          </div>

          <div className="section">
            <Row className="selection-process">
              <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <div className="half-text-container">
                  <div
                    className="gold-title"
                    dangerouslySetInnerHTML={{
                      __html: posts[posts.length - 1].title.rendered,
                    }}
                  />
                  <div
                    className="sub-title"
                    dangerouslySetInnerHTML={{
                      __html: posts[0].title.rendered,
                    }}
                  />
                  <div className="process">
                    {Object.values(posts[0].acf).map((data, index) => (
                      <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-easing="ease"
                        data-aos-duration="2000"
                        data-aos-offset="300"
                        className="process-part"
                      >
                        <h1>{index + 1}.</h1>
                        <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
                        <p dangerouslySetInnerHTML={{ __html: data.desc }} />
                      </div>
                    ))}
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
                      __html: posts[1].title.rendered,
                    }}
                  />
                  <div
                    className="overlay-content"
                    dangerouslySetInnerHTML={{
                      __html: posts[1].content.rendered,
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div className="section">
            <Footer contact={contact} />
          </div>
        </div>
      }
    />
  );
};

export default SelectionProcess;
