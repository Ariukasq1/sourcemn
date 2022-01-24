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
  };

  return (
    <div className="timeline">
      <div className="sub-title">{__("Our History")}</div>
      <Slider {...settings} className="slider-time">
        {timeline.map((item, ind) => {
          return (
            <div key={ind} className="time">
              <h1>{item.acf.year}</h1>
              <div className="arrow-timeline">
                <img src="/images/timeline-arrow.png" />
              </div>
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
