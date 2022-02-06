import React from "react";
import { getData, __ } from "../../utils";

const Materials = ({ materials }) => {
  return (
    <div className="materials">
      <div className="gold-title">{__("Products")}</div>
      <div className="mater">
        {materials.map((item, ind) => {
          return (
            <div
              key={ind}
              data-aos="zoom-in-down"
              data-aos-delay={ind * 150}
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <img src={getData(item._embedded, "image")} />
              <p dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Materials;
