import React, { useState } from "react";
import { __, getData } from "../../utils";
import Link from "next/link";

const HomeIndustries = ({ data }) => {
  const lastContent = data[data.length - 1];

  const [img, setImg] = useState(lastContent._embedded);

  const [slug, setSlug] = useState(lastContent.slug);

  const [content, setContent] = useState(lastContent.content.rendered);

  const renderIndustry = (slug, img, content, color) => {
    setSlug(slug);
    setImg(img);
    setContent(content);
  };

  return (
    <div className="homeIndustries">
      <div className="tab-button">
        <Link href={`/industries/${slug}`}>
          <div className="read-more-button">Read more</div>
        </Link>
        {data.map((item, ind) => {
          return (
            <div
              key={ind}
              onClick={() => {
                renderIndustry(
                  item.slug,
                  item._embedded,
                  item.content.rendered
                );
              }}
            >
              {item.title.rendered}
            </div>
          );
        })}
      </div>
      <div
        className="half-back-image-with-text"
        style={{ backgroundImage: `url(${getData(img, "image")})` }}
      >
        <div
          className="overlayText"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default HomeIndustries;
