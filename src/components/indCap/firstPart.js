import React from "react";
import { __, getData, DisplayArr } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const FirstPart = ({ clas, data }) => {
  return (
    <div className="firstPart">
      <div className="sub-title">{__(`${clas}`)}</div>
      <div className={clas}>
        {data
          .slice(0)
          .reverse()
          .map((post, ind) => {
            const { title, excerpt, slug, _embedded } = post || {};

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
                  href={`/${
                    clas === "portfolio" ? "portfolio" : "[categories]"
                  }/[slug]`}
                  as={`/${clas}/${slug}#section2`}
                >
                  <div
                    className="read-more-detail"
                    onClick={() => (DisplayArr[0] = "none")}
                  >
                    {__("Read more")} <ArrowRightOutlined />
                  </div>
                </Link>
                <Link
                  href={`/${
                    clas === "portfolio" ? "portfolio" : "[categories]"
                  }/[slug]`}
                  as={`/${clas}/${slug}#section2`}
                >
                  <div
                    className="squad-image"
                    onClick={() => (DisplayArr[0] = "none")}
                  >
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

export default FirstPart;
