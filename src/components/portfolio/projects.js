import React, { useState } from "react";
import { getData, SampleNextArrow, SamplePrevArrow } from "../../utils";
import Slider from "react-slick";
import Link from "next/link";

const Projects = ({ projects, detail }) => {
  const rows = projects.length > 4 ? 2 : 1;
  const slideShow = rows > 1 ? 4 : projects.length;

  const [post, setPost] = useState();
  console.log(post, "--------");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    rows: rows,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 992,
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
    <>
      <div className="portfolio-projects">
        <Slider {...settings} className="two-row-slider">
          {projects.map((item, ind) => {
            return (
              <Link key={ind} href={`/portfolio/${detail}#section3`}>
                <div
                  className="slider-image-back"
                  style={{
                    backgroundImage: `url(${getData(
                      item._embedded,
                      "image"
                    )}})`,
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
      {post && (
        <div className="simple-text-image" id="section3">
          <div className="simple-half-text">
            <div
              className="blue-title"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
          <div className="simple-half-image">
            <img src={getData(post._embedded, "image")} />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
