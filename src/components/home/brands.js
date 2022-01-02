import React, { useState } from "react";
import Slider from "react-slick";
import { getData, SampleNextArrow, SamplePrevArrow, __ } from "../../utils";
import Link from "next/link";

const HomeBrands = ({ brandCats, brands, page }) => {
  const parent = brandCats[0].parent;
  const [brandsId, setCatID] = useState(parent);

  const filteredBrands = brands.filter((el) =>
    el.categories.includes(brandsId)
  );

  const showBrands = filteredBrands.length > 4 ? 4 : filteredBrands.length;
  const break992 = filteredBrands.length > 4 ? 3 : filteredBrands.length;

  const settings_slider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showBrands,
    slidesToScroll: 1,
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

  const brandsList = () => {
    return (
      <Slider {...settings_slider} className="brandList">
        {filteredBrands.map((brand, ind) => {
          return (
            <div key={ind}>
              <div className="brand-logo">
                <img src={brand.acf.logo} />
              </div>
              <Link
                href={"/[categories]/[detail]"}
                as={`/${page}/${brand.slug}`}
              >
                <div className="read-more-detail">{__("Read more")}</div>
              </Link>
              <Link
                href={"/[categories]/[detail]"}
                as={`/${page}/${brand.slug}`}
              >
                <div className="brand-image">
                  <img src={getData(brand._embedded, "image")} />
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    );
  };

  return (
    <div className="homeBrands">
      <div className="gold-title">Brands</div>
      <div className="sub-title">Our products</div>
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
      {brandsList()}
    </div>
  );
};

export default HomeBrands;
