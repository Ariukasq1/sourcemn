import React from "react";
import { getData } from "../../utils";
import Materials from "./materials";

const ProjectsDetail = ({ post, materials, display }) => {
  const filteredMaterials = materials.filter((el) =>
    post.acf.products.includes(el.id)
  );

  const { title, content, _embedded } = post || {};

  return (
    <>
      <div
        className="project-detail"
        id="section3"
        style={{ display: `${display}` }}
      >
        <div className="long-text-with-image">
          <div
            className="long-half-text"
            data-aos="fade-down"
            data-aos-easing="ease"
          >
            <div
              className="blue-title"
              dangerouslySetInnerHTML={{ __html: (title || {}).rendered }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: (content || {}).rendered }}
            />
          </div>
          <div className="long-half-image">
            <img src={getData(_embedded, "image")} />
          </div>
        </div>
      </div>
      <Materials materials={filteredMaterials} />
    </>
  );
};

export default ProjectsDetail;
