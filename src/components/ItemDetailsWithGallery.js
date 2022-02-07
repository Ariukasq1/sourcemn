import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ItemDetailsWithGallery = ({ images }) => {
  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: true,
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const renderImages = images.map((image, index) => {
    if (!image || !image.includes("/uploads/")) {
      return null;
    }

    return (
      <div key={index} className="slick-slide sliderBigImg">
        <img src={image} alt={index} />
      </div>
    );
  });

  const renderThumbnail = images.map((image, index) => {
    if (!image || !image.includes("/uploads/")) {
      return null;
    }

    return (
      <div key={index}>
        <img className="slick-slide-image" src={image} alt={index} />
      </div>
    );
  });

  return (
    <div className="itemDetailsImages">
      <Slider
        className="bigSlide"
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {renderImages}
      </Slider>

      <Slider
        {...settingsThumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="thumbnailSlide"
      >
        {renderThumbnail}
      </Slider>
    </div>
  );
};

export default ItemDetailsWithGallery;
