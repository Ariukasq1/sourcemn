import React, { useState } from "react";
import {
  getData,
  SampleNextArrow,
  SamplePrevArrow,
  DisplayArr,
} from "../../utils";
import Slider from "react-slick";
import Link from "next/link";
import ProjectsDetail from "./projectDetail";

const Projects = ({ projects, detail, background, materials }) => {
  const rows = projects.length > 4 ? 2 : 1;
  const slideShow = rows > 1 ? 4 : projects.length;

  const [post, setPost] = useState();

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

  const setState = (item, dis) => {
    setPost(item);
    DisplayArr[0] = dis;
  };

  return (
    <>
      <div
        className="portfolio-projects"
        style={{
          backgroundImage: `url(${getData(
            (background || {})._embedded,
            "image"
          )})`,
        }}
      >
        <Slider {...settings} className="two-row-slider">
          {projects.map((item, ind) => {
            return (
              <Link
                key={ind}
                href={`/portfolio/${detail}#section3#${item.slug}`}
              >
                <div
                  className="slider-image-back"
                  data-aos="flip-up"
                  style={{
                    backgroundImage: `url(${getData(
                      item._embedded,
                      "image"
                    )}})`,
                  }}
                  onClick={() => setState(item, "block")}
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
        <ProjectsDetail
          post={post}
          materials={materials}
          display={DisplayArr[0]}
        />
      )}
    </>
  );
};

export default Projects;
