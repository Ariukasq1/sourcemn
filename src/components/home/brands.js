import React, { useState } from "react";
import Slider from "react-slick";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Link from "next/link";

const HomeBrands = ({ brandCats, brands, page }) => {
  const parent = brandCats[0].parent;
  const [brandsId, setCatID] = useState(parent);

  const settings_slider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  if (!page) {
    page = "brands";
  }

  const brandsList = (id) => {
    return (
      <Slider {...settings_slider} className="brandList">
        {brands.map((brand, ind) => {
          console.log(brand, "----------");
          return (
            <div key={ind}>
              <div className="brand-logo">
                <img src={brand.acf.logo} />
              </div>
              <Link
                href={"/[categories]/[detail]"}
                as={`/${page}/${brand.slug}`}
              >
                <a className="read-more">Read more</a>
              </Link>
              <Link
                href={"/[categories]/[detail]"}
                as={`/${page}/${brand.slug}`}
              >
                <a className="brand-image">
                  <img src={getData(brand._embedded, "image")} />
                </a>
              </Link>
            </div>
          );
        })}
      </Slider>
    );
  };

  return (
    <div className="homeBrands">
      <div className="heading-tag">Brands</div>
      <div className="heading-title">Our products</div>
      <div className="catList">
        <div onClick={() => setCatID(parent)}>All Brands</div>
        {brandCats.map((cat, ind) => {
          const { name, id } = cat;
          return (
            <div key={ind} onClick={() => setCatID(id)}>
              {name}
            </div>
          );
        })}
      </div>
      {brandsList(brandsId)}
    </div>
  );
};

export default HomeBrands;
