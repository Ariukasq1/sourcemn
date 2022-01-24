import React from "react";
import { getData } from "../../utils";

const WhyMMs = ({ posts }) => {
  const whymms = posts[posts.length - 1];
  const culture = posts[2];
  const benefits = posts[1];
  const tourOffice = posts[0];

  return (
    <div className="why-mms">
      <div
        className="culture over-image"
        style={{
          backgroundImage: `url(${getData(culture._embedded, "image")})`,
        }}
      >
        <div className="over-text">
          <div className="gold-title">{whymms.title.rendered}</div>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{ __html: culture.title.rendered }}
          />
          <p dangerouslySetInnerHTML={{ __html: culture.content.rendered }} />
        </div>
      </div>
      <div className="benefits">
        <div className="long-half-image">
          <img src={getData(benefits._embedded, "image")} />
        </div>
        <div className="long-half-text">
          <div className="gold-title">{whymms.title.rendered}</div>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{ __html: benefits.title.rendered }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: benefits.content.rendered }}
          />
          <div className="icons">
            {Object.values(benefits.acf).map((data, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-offset="300"
                className="icon-img"
              >
                <img src={data.icon} alt="icon" />
                {data.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tourOffice">
        <div className="long-half-text">
          <div className="gold-title">{whymms.title.rendered}</div>
          <div
            className="sub-title"
            dangerouslySetInnerHTML={{ __html: tourOffice.title.rendered }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: tourOffice.content.rendered }}
          />
        </div>
        <div className="long-half-image">
          <img src={getData(tourOffice._embedded, "image")} />
        </div>
      </div>
    </div>
  );
};

export default WhyMMs;
