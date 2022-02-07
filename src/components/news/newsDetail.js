import React from "react";
import { getData, __ } from "../../utils";

const NewsDetail = ({ post }) => {
  const { title, content, _embedded } = post || {};
  return (
    <div className="news-detail">
      <div className="container">
        <div className="news-tag">{__("#News")}</div>
        <div className="news-image">
          <img src={getData(_embedded, "image")} />
        </div>
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
