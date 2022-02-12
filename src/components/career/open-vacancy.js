import React from "react";
import { getData } from "../../utils";
import { Row, Col } from "antd";
import Image from "next/image";
import Fullpage from "../FullPage";
import Culture from "./culture";
import Footer from "../layouts/footer";

const OpenVacany = ({ posts, data, contact }) => {
  const image = posts[posts.length - 2];
  const picture = getData(image._embedded, "image");

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
            <Row className="open-vacancy">
              <Col
                xxl={14}
                xl={14}
                lg={14}
                md={24}
                sm={24}
                xs={24}
                className="vacancy-content"
              >
                <div className="half-text-container">
                  <div
                    className="gold-title"
                    dangerouslySetInnerHTML={{
                      __html: image.title.rendered,
                    }}
                  />

                  {posts.slice(0, -2).map((post, ind) => {
                    const vac_image = getData(post._embedded, "image");

                    return (
                      <div key={ind} className="vacancy-posts">
                        <Image
                          loader={() => vac_image}
                          src={vac_image}
                          alt="image"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col
                xxl={10}
                xl={10}
                lg={10}
                md={24}
                sm={24}
                xs={24}
                className="overlay-half-image"
              >
                <Image
                  loader={() => picture}
                  src={picture}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />

                <div className="overlay-half-text">
                  <div
                    className="overlay-title"
                    dangerouslySetInnerHTML={{
                      __html: posts[posts.length - 1].title.rendered,
                    }}
                  />
                  <div
                    className="overlay-content"
                    dangerouslySetInnerHTML={{
                      __html: image.content.rendered,
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

export default OpenVacany;
