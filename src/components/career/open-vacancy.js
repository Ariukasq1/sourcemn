import React from "react";
import { getData } from "../../utils";

const OpenVacany = ({ posts }) => {
  const image = posts[posts.length - 2];

  return (
    <div className="section">
      <div className="open-vacancy">
        <div className="long-half-text">
          <div
            className="gold-title"
            dangerouslySetInnerHTML={{
              __html: image.title.rendered,
            }}
          />
          {posts.slice(0, -2).map((post, ind) => {
            return (
              <div
                key={ind}
                className="vacancy-posts"
                style={{
                  backgroundImage: `url(${getData(post._embedded, "image")})`,
                }}
              >
                <p
                  className="vacancy-text"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </div>
            );
          })}
        </div>
        <div
          className="half-back-image-with-text"
          style={{
            backgroundImage: `url(${getData(image._embedded, "image")})`,
          }}
        >
          <div className="overlayText">
            <h2
              dangerouslySetInnerHTML={{
                __html: posts[posts.length - 1].title.rendered,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: image.content.rendered,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenVacany;
