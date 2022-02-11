import React, { useState } from "react";
import Slider from "react-slick";
import { getData, SampleNextArrow, SamplePrevArrow, __ } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { generateLink } from "../../config";
import Image from "next/image";

const HomeBrands = ({ brandCats, brands }) => {
  const parent = brandCats[0].parent;

  const [brandsId, setCatID] = useState(parent);

  const [index, setIndex] = useState(100);

  const renderCat = (id, ind) => {
    setCatID(id);
    setIndex(ind);
  };

  const filteredBrands = brands.filter((el) =>
    el.categories.includes(brandsId)
  );

  const showBrands = filteredBrands.length > 4 ? 4 : filteredBrands.length;
  const break992 = filteredBrands.length > 4 ? 3 : filteredBrands.length;

  const settings_slider = {
    dots: false,
    infinite: true,
    slidesToShow: showBrands,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: break992,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const brandsList = () => {
    return (
      <Slider {...settings_slider} className="brandList">
        {filteredBrands.map((brand, ind) => {
          const image = getData(brand._embedded, "image");
          return (
            <div key={ind}>
              <div className="brand-logo">
                <Image
                  loader={() => brand.acf.logo}
                  src={brand.acf.logo}
                  alt="logo"
                  objectFit="contain"
                  objectPosition="left"
                  layout="fill"
                />
              </div>

              <Link
                href={"/brands/[brands]"}
                as={generateLink(`/brands/${brand.slug}`)}
              >
                <a className="read-more-detail">
                  {__("Read more")} <ArrowRightOutlined />
                </a>
              </Link>

              <div className="brand-image">
                <Image
                  loader={() => image}
                  src={image}
                  alt="brand"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    );
  };

  return (
    <div className="homeBrands top" data-aos="zoom-in" data-aos-duration="300">
      <div className="container">
        <div className="gold-title">{__("Brands")}</div>
        <div className="sub-title">{__("Our products")}</div>
        <div className="catList">
          <div
            className={100 === index ? "active" : "inactive"}
            onClick={() => renderCat(parent, 100)}
          >
            {__("All brands")}
          </div>
          {brandCats.map((cat, ind) => {
            const { name, id } = cat;
            return (
              <div
                key={ind}
                onClick={() => renderCat(id, ind)}
                className={ind === index ? "active" : "inactive"}
              >
                {name}
              </div>
            );
          })}
        </div>
        {brandsList()}
      </div>
    </div>
  );
};

export default HomeBrands;
