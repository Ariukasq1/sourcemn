import React from "react";
import { __, getData } from "../../utils";
import Slider from "react-slick";
import Link from "next/link";

const Relations = ({ brandData, post, relPosts, relations }) => {
  const { acf } = post || {};

  const { capabilities, industries, brands } = acf || {};

  const indCap = relations === "capabilities" ? capabilities : industries;

  const relbrands = brandData.filter((el) => (brands || []).includes(el.id));

  const relIndCap = relPosts.filter((el) => (indCap || []).includes(el.id));

  return (
    <div className="relations">
      <div className="blue-title">{__("Relations")}</div>
      <div className="relations-list">
        <div className="gold-title">{__("Brands")}</div>
        <div className="list-of-relations">
          {relbrands.map((item, ind) => {
            return (
              <div
                key={ind}
                className="one-brochure"
                style={{
                  backgroundImage: `url(${getData(item._embedded, "image")})`,
                }}
              >
                <div
                  className="broch-overlay"
                  style={{
                    opacity: "0.6",
                  }}
                />
                <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="relations-list">
        <div className="gold-title">{relations}</div>
        <div className="list-of-relations">
          {relIndCap.map((item, ind) => {
            return (
              <div
                key={ind}
                className="one-brochure"
                style={{
                  backgroundImage: `url(${getData(item._embedded, "image")})`,
                }}
              >
                <div
                  className="broch-overlay"
                  style={{
                    opacity: "0.6",
                  }}
                />
                <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Relations;
