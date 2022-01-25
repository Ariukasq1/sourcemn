import React from "react";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Slider from "react-slick";

const SecondPart = ({ post }) => {
  const { title, content, acf, _embedded } = post || {};

  const { supports } = acf || {};

  const { desc } = supports || {};

  const datas = (desc || "").split("<li>");

  return (
    <div className="secondPart">
      <div className="product-cards">
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: (supports || {}).title }}
        />
        <div className="little-cards">
          {datas.map((data, ind) => {
            if (
              data.includes("<ul") ||
              data.includes("<p><!-- /wp:list --></p>")
            ) {
              return null;
            }

            return (
              <div
                key={ind}
                className="card"
                data-aos="fade-down"
                data-aos-delay={ind * 100}
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-offset="300"
                dangerouslySetInnerHTML={{ __html: data }}
              />
            );
          })}
        </div>
      </div>
      <div
        className="half-back-image-with-text"
        style={{ backgroundImage: `url(${getData(_embedded, "image")})` }}
      >
        <div className="overlayText">
          <h2
            dangerouslySetInnerHTML={{
              __html: (title || {}).rendered,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: (content || {}).rendered,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
