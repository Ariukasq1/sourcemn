import React from "react";
import { getData, SampleNextArrow, SamplePrevArrow, __ } from "../../utils";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";

const RelatedNews = ({ data, slug }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="newsRelated">
      <div className="container">
        <div className="blue-title">{__("News Related")}</div>
        <Slider {...settings} className="two-row-slider">
          {data.map((news, ind) => {
            const image = getData(news._embedded, "image");

            return (
              <Link key={ind} href={`/news/${news.slug}`}>
                <div className="slider-image-back">
                  {image && (
                    <Image
                      loader={() => image}
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  )}

                  <div
                    className="news-title"
                    dangerouslySetInnerHTML={{ __html: news.title.rendered }}
                  />
                  <div className="read-more-project">
                    {__("Read-more")} <ArrowRightOutlined />
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedNews;
