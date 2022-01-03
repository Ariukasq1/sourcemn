import React from "react";
import { __, getData } from "../../utils";
import Slider from "react-slick";
import Link from "next/link";

const Relations = ({ brands, post }) => {
  const relbrands = brands.filter((el) => post.acf.brands.includes(el.id));
  const showBrands = relbrands.length > 3 ? 3 : relbrands.length;
  const break992 = relbrands.length > 3 ? 2 : relbrands.length;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: showBrands,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: break992,
          slidesToScroll: 1,
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

  const renderBrands = () => {
    if (showBrands === 0) {
      return null;
    }

    return (
      <>
        <div className="gold-title">{__("Brands")}</div>
        <Slider {...settings} className="relBrands">
          {relbrands.map((brnd, ind) => {
            return (
              <div key={ind}>
                <div
                  dangerouslySetInnerHTML={{ __html: brnd.title.rendered }}
                />
                <Link href={`/brands/${brnd.slug}`}>
                  <div className="relations-image">
                    <img src={getData(brnd._embedded, "image")} />
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </>
    );
  };

  return (
    <div className="relations">
      <div className="blue-title">{__("Relations")}</div>
      {renderBrands()}
    </div>
  );
};

export default Relations;
