import React from "react";
import Slider from "react-slick";

const TimeLine = ({ timeline }) => {
  console.log(timeline, "-----------");
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };

  return (
    <div className="timeline">
      <Slider {...settings} className="slider-time">
        {timeline.map((item, ind) => {
          return (
            <div key={ind} className="time">
              <h1>{item.acf.year}</h1>
              <div
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
