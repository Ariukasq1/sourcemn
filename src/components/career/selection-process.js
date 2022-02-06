import React from "react";
import { getData } from "../../utils";

const SelectionProcess = ({ posts }) => {
  return (
    <div className="section">
      <div className="selection-process">
        <div className="long-half-text">
          <div
            className="gold-title"
            dangerouslySetInnerHTML={{
              __html: posts[posts.length - 1].title.rendered,
            }}
          />
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: posts[0].title.rendered,
            }}
          />
          <div className="process">
            {Object.values(posts[0].acf).map((data, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-offset="300"
                className="process-part"
              >
                <h1>{index + 1}.</h1>
                <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
                <p dangerouslySetInnerHTML={{ __html: data.desc }} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="half-back-image-with-text"
          style={{
            backgroundImage: `url(${getData(posts[1]._embedded, "image")})`,
          }}
        >
          <div className="overlayText">
            <h2
              dangerouslySetInnerHTML={{
                __html: posts[1].title.rendered,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: posts[1].content.rendered,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionProcess;
