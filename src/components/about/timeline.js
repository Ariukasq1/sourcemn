import React from "react";
import Slider from "react-slick";
import { __ } from "../../utils";

const TimeLine = ({ timeline }) => {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="timeline">
      <div className="sub-title">{__("Our History")}</div>
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
