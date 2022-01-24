import React from "react";

const FactSection = ({ post }) => {
  const { bg_image } = post.acf;

  return (
    <div className="thirdPart" style={{ backgroundImage: `url(${bg_image})` }}>
      {Object.entries(post.acf).map(([key, value]) => {
        if (!key.includes("group")) {
          return null;
        }

        return (
          <div
            key={key}
            className="facts"
            data-aos="zoom-in"
            data-aos-easing="ease"
            data-aos-duration="2000"
            data-aos-offset="300"
          >
            <img src={value.icon} />
            <h2 dangerouslySetInnerHTML={{ __html: value.upper_text }} />
            <div className="numbers">
              <h1 dangerouslySetInnerHTML={{ __html: value.number }} />
              <h1 dangerouslySetInnerHTML={{ __html: value.number_format }} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: value.bottom_text }} />
          </div>
        );
      })}
    </div>
  );
};

export default FactSection;
