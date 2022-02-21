import React from "react";
import { __, getData } from "../../utils";
import Link from "next/link";
import Image from "next/image";

const Relations = ({ brandData, post, relPosts, relations }) => {
  const { acf } = post || {};

  const { capabilities, industries, brands } = acf || {};

  const indCap = relations === "capabilities" ? capabilities : industries;

  const relbrands = brandData.filter((el) => (brands || []).includes(el.id));

  const relIndCap = relPosts.filter((el) => (indCap || []).includes(el.id));

  return (
    <div className="relations">
      <div className="container">
        <div className="blue-title">{__("Relations")}</div>
        <div className="relations-list">
          <div className="gold-title">{__("Brands")}</div>
          <div className="list-of-relations">
            {relbrands.map((item, ind) => {
              const image = getData(item._embedded, "image");
              return (
                <Link
                  key={ind}
                  href={`/brands/[brands]`}
                  as={`/brands/${item.slug}`}
                >
                  <div className="one-brochure">
                    <Image
                      loader={() => image}
                      src={image}
                      layout="fill"
                      alt="broch"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="broch-overlay" />
                    <div
                      className="broch-title"
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
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
              const image = getData(item._embedded, "image");

              return (
                <Link
                  key={ind}
                  href={`/${relations}/[${relations}]`}
                  as={`/${relations}/${item.slug}`}
                >
                  <div className="one-brochure">
                    <Image
                      loader={() => image}
                      src={image}
                      layout="fill"
                      alt="broch"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    <div className="broch-overlay" />
                    <div
                      className="broch-title"
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relations;
