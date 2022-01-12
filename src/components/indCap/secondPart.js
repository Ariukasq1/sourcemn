import React from "react";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Slider from "react-slick";

const SecondPart = ({ post }) => {
  const { title, content, acf, _embedded } = post || {};

  const { supports } = acf || {};

  const { desc } = supports || {};

  const datas = (desc || {}).split("<li>");

  const showCards = datas.length > 8 ? 3 : 2;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showCards,
    rows: showCards,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
          rows: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="secondPart">
      <div className="product-cards">
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: supports.title }}
        />
        <Slider {...settings} className="little-cards">
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
                dangerouslySetInnerHTML={{ __html: data }}
              />
            );
          })}
        </Slider>
      </div>
      <div
        className="half-back-image-with-text"
        style={{ backgroundImage: `url(${getData(_embedded, "image")})` }}
      >
        <div className="overlayText">
          <h2
            dangerouslySetInnerHTML={{
              __html: title.rendered,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: content.rendered,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
