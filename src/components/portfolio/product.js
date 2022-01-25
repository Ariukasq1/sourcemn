import React from "react";
import { getData } from "../../utils";

const Product = ({ post }) => {
  const { title, content, _embedded } = post || {};

  return (
    <div className="long-text-with-image">
      <div
        className="long-half-text"
        data-aos="fade-down"
        data-aos-easing="ease"
      >
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: (content || {}).rendered }} />
      </div>
      <div className="long-half-image">
        <img src={getData(_embedded, "image")} />
      </div>
    </div>
  );
};

export default Product;
