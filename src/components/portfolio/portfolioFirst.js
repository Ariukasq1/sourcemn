import React from "react";
import { __, getData } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { generateLink } from "../../config";

const PortfolioFirst = ({ clas, data }) => {
  return (
    <div className="firstPart">
      <div className="sub-title">{__(`Portfolio`)}</div>
      <div className={clas}>
        {data
          .slice(0)
          .reverse()
          .map((post, ind) => {
            const { title, excerpt, slug, _embedded, id } = post || {};

            return (
              <div
                key={ind}
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay={ind * 300}
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                <h2
                  className="continue-title"
                  dangerouslySetInnerHTML={{ __html: title.rendered }}
                />
                <div
                  className="continue-text"
                  dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                />
                <Link
                  href={`/portfolio/[portfolio]`}
                  as={`${generateLink(`/portfolio/${slug}`)}#section2`}
                >
                  <div className="read-more-detail">
                    {__("Read more")} <ArrowRightOutlined />
                  </div>
                </Link>
                <Link
                  href={`/portfolio/[portfolio]`}
                  as={`${generateLink(`/portfolio/${slug}`)}#section2`}
                >
                  <div className="squad-image">
                    <img src={getData(_embedded, "image")} />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PortfolioFirst;
