import React, { useState } from "react";
import { getData, SampleNextArrow, SamplePrevArrow, __ } from "../../utils";
import Link from "next/link";
import Slider from "react-slick";
import { generateLink } from "../../config";

const NewsList = ({ data, cats }) => {
  const innerNews = cats[0].id;

  const [newsId, setCatID] = useState(innerNews);

  const [index, setIndex] = useState(0);

  const renderCat = (id, ind) => {
    setCatID(id);
    setIndex(ind);
  };

  const filteredNews = data.filter((el) => el.categories.includes(newsId));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
    <div className="newsList">
      <div className="sub-title">{__("Newsroom")}</div>
      <div className="catList">
        {cats.map((cat, ind) => {
          return (
            <div
              key={ind}
              onClick={() => renderCat(cat.id, ind)}
              className={ind === index ? "active" : "inactive"}
            >
              {cat.name}
            </div>
          );
        })}
      </div>
      <Slider {...settings} className="two-row-slider">
        {filteredNews.map((news, ind) => {
          return (
            <Link
              key={ind}
              href={"/news/[news]"}
              as={generateLink(`/news/${news.slug}`)}
            >
              <div
                className="slider-image-back"
                data-aos="flip-up"
                style={{
                  backgroundImage: `url(${getData(news._embedded, "image")}})`,
                }}
              >
                <h2 dangerouslySetInnerHTML={{ __html: news.title.rendered }} />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewsList;
