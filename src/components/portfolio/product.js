import React from "react";
import { getData } from "../../utils";

const Product = ({ post }) => {
  return (
    <div className="simple-text-image">
      <div className="simple-half-text">
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
      <div className="simple-half-image">
        <img src={getData(post._embedded, "image")} />
      </div>
    </div>
  );
};

export default Product;
