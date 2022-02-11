import React from "react";
import { getData, __ } from "../../utils";
import Image from "next/image";

const NewsDetail = ({ post }) => {
  const { title, content, _embedded } = post || {};

  const image = getData(_embedded, "image");

  return (
    <div className="news-detail">
      <div className="container">
        <div className="news-tag">{__("#News")}</div>
        {image && (
          <div className="news-image">
            <Image
              loader={() => image}
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}

        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
        />

        <div
          className="news-content"
          dangerouslySetInnerHTML={{ __html: (content || {}).rendered }}
        />
      </div>
    </div>
  );
};

export default NewsDetail;
