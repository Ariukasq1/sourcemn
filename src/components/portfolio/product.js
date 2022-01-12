import React from "react";
import { getData } from "../../utils";

const Product = ({ post }) => {
  const { title, content, _embedded } = post || {};

  return (
    <div className="simple-text-image">
      <div className="simple-half-text">
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: title.rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
      <div className="simple-half-image">
        <img src={getData(_embedded, "image")} />
      </div>
    </div>
  );
};

export default Product;
