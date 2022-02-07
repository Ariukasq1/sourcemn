import React from "react";
import { generateLink } from "../../config";
import { __, getData } from "../../utils";
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
              <Link key={ind} href={generateLink(`/brands/${item.slug}`)}>
                <div
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
                  <p
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="relations-list">
        <div className="gold-title">{__(`${relations}`)}</div>
        <div className="list-of-relations">
          {relIndCap.map((item, ind) => {
            return (
              <Link key={ind} href={generateLink(`/${relations}/${item.slug}`)}>
                <div
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
                  <p
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Relations;
