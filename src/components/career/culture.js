import React from "react";
import { __, getData } from "../../utils";
import Link from "next/link";
import { Row, Col } from "antd";
import Image from "next/image";

const Culture = ({ data }) => {
  return (
    <div className="career-culture">
      <div className="gold-title">{__("Human Resource")}</div>
      <div className="sub-title">{__("We put company culture first")}</div>
      <Row className="big-cards-list">
        {data
          .slice(0)
          .reverse()
          .map((card, ind) => {
            const image = getData(card._embedded, "image");

            return (
              <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} key={ind}>
                <Link href={`/careers/${card.slug}`}>
                  <div className="big-card">
                    <div className="big-card-image">
                      <Image
                        loader={() => image}
                        src={image}
                        alt="card"
                        width="200px"
                        height="150px"
                      />
                    </div>
                    <div className="big-card-content">
                      <div
                        className="blue-title"
                        dangerouslySetInnerHTML={{
                          __html: card.title.rendered,
                        }}
                      />
                      <div
                        className="card-content"
                        dangerouslySetInnerHTML={{
                          __html: card.content.rendered,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Culture;
