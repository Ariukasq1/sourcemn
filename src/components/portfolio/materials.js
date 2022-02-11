import React from "react";
import { getData, __ } from "../../utils";
import Image from "next/image";

const Materials = ({ materials }) => {
  return (
    <div className="materials">
      <div className="absolute">
        <div className="container">
          <div className="gold-title">{__("Products")}</div>
          <div className="mater">
            {materials.map((item, ind) => {
              const image = getData(item._embedded, "image");

              return (
                <div
                  key={ind}
                  /* data-aos="zoom-in-down"
                data-aos-delay={ind * 150}
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-offset="300" */
                >
                  <Image
                    loader={() => image}
                    src={image}
                    alt="mater"
                    width="80px"
                    height="80px"
                  />
                  <p
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
