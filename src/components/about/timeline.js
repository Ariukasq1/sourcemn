import React from "react";
import Slider from "react-slick";
import { __ } from "../../utils";

const TimeLine = ({ timeline }) => {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,

    speed: 1000,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="timeline">
      <div className="sub-title">{__("Our history")}</div>
      <Slider {...settings} className="slider-time">
        {timeline.map((item, ind) => {
          return (
            <div key={ind} className="time">
              <h1>{item.acf.year}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TimeLine;
