import React from "react";
import { getData } from "../../utils";
import ItemDetailsWithGallery from "../ItemDetailsWithGallery";
import { Col, Row } from "antd";
import Image from "next/image";
import Fullpage from "../FullPage";
import Culture from "./culture";
import Footer from "../layouts/footer";

const WhyMMs = ({ posts, data, contact }) => {
  const whymms = posts[posts.length - 1];
  const culture = posts[2];
  const benefits = posts[1];
  const tourOffice = posts[0];
  const culture_image = getData(culture._embedded, "image");
  const ben_image = getData(benefits._embedded, "image");
  const off_image = getData(tourOffice._embedded, "image");

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
            <Col span={24} className="culture">
              <Image
                loader={() => culture_image}
                src={culture_image}
                alt="back"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="culture-text">
                <div className="gold-title">{whymms.title.rendered}</div>
                <div
                  className="sub-title"
                  dangerouslySetInnerHTML={{ __html: culture.title.rendered }}
                />
                <p
                  dangerouslySetInnerHTML={{ __html: culture.content.rendered }}
                />
              </div>
            </Col>
          </div>

          <div className="section">
            <Row className="benefits">
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="simple-half-image"
              >
                <Image
                  loader={() => ben_image}
                  src={ben_image}
                  alt="ben"
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
                className="benefits-content"
              >
                <div className="half-text-container">
                  <div className="gold-title">{whymms.title.rendered}</div>

                  <div
                    className="sub-title"
                    dangerouslySetInnerHTML={{
                      __html: benefits.title.rendered,
                    }}
                  />

                  <p
                    dangerouslySetInnerHTML={{
                      __html: benefits.content.rendered,
                    }}
                  />

                  <div className="benefits-icons">
                    {Object.values(benefits.acf).map((data, index) => (
                      <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-easing="ease"
                        data-aos-duration="2000"
                        data-aos-offset="300"
                        className="icon-img"
                      >
                        <Image
                          loader={() => data.icon}
                          src={data.icon}
                          alt="icon"
                          width="50px"
                          height="50px"
                          objectFit="contain"
                        />
                        {data.text}
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="section">
            <Row className="tourOffice">
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="tourOffice-content"
              >
                <div className="half-text-container">
                  <div className="gold-title">{whymms.title.rendered}</div>
                  <div
                    className="sub-title"
                    dangerouslySetInnerHTML={{
                      __html: tourOffice.title.rendered,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: tourOffice.content.rendered,
                    }}
                  />
                </div>
              </Col>
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={24}
                sm={24}
                xs={24}
                className="tourOffice-image"
              >
                {!tourOffice.acf.image_1 ? (
                  <Image
                    loader={() => off_image}
                    src={off_image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                ) : (
                  <ItemDetailsWithGallery
                    images={Object.entries(tourOffice.acf || {}).map(
                      ([key, value]) => {
                        if (key.includes("group")) {
                          return null;
                        }

                        return value;
                      }
                    )}
                  />
                )}
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

export default WhyMMs;
