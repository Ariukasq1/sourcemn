import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const HomeSlider = ({ sliders }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-slider top">
      <Slider {...settings}>
        {sliders.map((item, ind) => {
          const { body, image, position_of_text } = item.acf;

          return (
            <div key={ind}>
              <div className="home-slide">
                <Image
                  loader={() => image}
                  src={image}
                  alt="slider"
                  layout="fill"
                />
                <div
                  className={
                    position_of_text === "center"
                      ? "slide-text-center"
                      : "slide-text-right"
                  }
                >
                  <h1 style={{ color: body.font_color }}>{body.text}</h1>
                  <h2 style={{ color: body.font_color }}>{body.description}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSlider;
