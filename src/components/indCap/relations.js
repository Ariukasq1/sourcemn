import React from "react";
import { __, getData } from "../../utils";
import Slider from "react-slick";
import Link from "next/link";

const Relations = ({ brandData, post, relPosts, relations }) => {
  const { acf } = post || {};

  const { capabilities, industries, brands } = acf || {};

  const indCap = relations === "capabilities" ? capabilities : industries;

  const relbrands = brandData.filter((el) => (brands || []).includes(el.id));

  const relIndCap = relPosts.filter((el) => (indCap || []).includes(el.id));

  const showBrands = relbrands.length > 4 ? 4 : relbrands.length;

  const showInd = relIndCap.length > 4 ? 4 : relIndCap.length;

  const break992brands = relbrands.length > 3 ? 2 : relbrands.length;

  const break992Ind = relIndCap.length > 3 ? 2 : relIndCap.length;

  const renderBrands = (items, slug, show, showRes) => {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: show,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: showRes,
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

    if (show === 0) {
      return null;
    }

    return (
      <>
        <div className="gold-title">{__(`${slug}`)}</div>
        <Slider {...settings} className="relBrands">
          {items.map((brnd, ind) => {
            return (
              <div key={ind}>
                <p dangerouslySetInnerHTML={{ __html: brnd.title.rendered }} />
                <Link
                  href={
                    slug === "brands"
                      ? `/${slug}/${brnd.slug}`
                      : `/${slug}/${brnd.slug}#section2`
                  }
                >
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
      {renderBrands(relbrands, "brands", showBrands, break992brands)}
      {renderBrands(relIndCap, relations, showInd, break992Ind)}
    </div>
  );
};

export default Relations;
