import React, { useState } from "react";
import { getData, SampleNextArrow, SamplePrevArrow, __ } from "../../utils";
import Slider from "react-slick";
import { ArrowRightOutlined } from "@ant-design/icons";
import ProjectDetail from "./projectDetail";
import Materials from "./materials";

const Projects = ({ projects, post, materials }) => {
  const { _embedded, title } = post || {};
  const rows = projects.length > 4 ? 2 : 1;
  const slideShow = rows > 1 ? 4 : projects.length;

  const [item, setItem] = useState(projects[0]);

  const filteredMaterials = materials.filter((el) =>
    item.acf.products.includes(el.id)
  );

  const clickFunc = (el) => {
    setItem(el);
    window.fullpage_api.moveTo(4, 0);
  };

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
        breakpoint: 1200,
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
    <>
      <div className="section">
        <div
          className="portfolio-projects"
          style={{
            backgroundImage: `url(${getData(_embedded, "image")})`,
          }}
        >
          <div className="blue-title">{(title || {}).rendered}</div>
          <Slider {...settings} className="two-row-slider">
            {projects.map((item, ind) => {
              return (
                <div key={ind} onClick={() => clickFunc(item)}>
                  <div
                    className="slider-image-back"
                    data-aos="flip-up"
                    style={{
                      backgroundImage: `url(${getData(
                        item._embedded,
                        "image"
                      )}})`,
                    }}
                  >
                    <h2
                      dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                    />

                    <div className="read-more-projects">
                      <h2>{__("Read more")}</h2> <ArrowRightOutlined />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="section">
        <ProjectDetail post={item} />
      </div>

      <div className="section">
        <Materials materials={filteredMaterials} />
      </div>
    </>
  );
};

export default Projects;
