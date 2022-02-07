import React, { useState } from "react";
import { __ } from "../../utils";

const Service = ({ serviceCats, services }) => {
  const [id, setCatID] = useState(serviceCats[0].id);

  const [index, setIndex] = useState(0);

  const renderCat = (id, ind) => {
    setCatID(id);
    setIndex(ind);
  };

  const serviceList = (catId) => {
    return (
      <div className="serviceList">
        {services.map((item, ind) => {
          const products = Object.values(item.acf);
          if (catId !== item.categories[0]) {
            return null;
          }

          return (
            <div key={ind} className="products">
              {products.map((group, ind) => {
                return (
                  <div
                    key={ind}
                    data-aos="fade-down"
                    data-aos-delay={ind * 150}
                    data-aos-easing="ease"
                    data-aos-duration="2000"
                    data-aos-offset="300"
                  >
                    <div className="product-title">
                      <div className="serviceIcon">
                        <img src={group.icon} />
                      </div>
                      <h5>{group.name}</h5>
                    </div>
                    <div
                      className="product-desc"
                      dangerouslySetInnerHTML={{ __html: group.desc }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="about-service">
      <div className="gold-title">{__("What we do")}?</div>
      <div className="sub-title">{__("Our products")}</div>
      <div className="catList">
        {serviceCats.map((cat, ind) => {
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
      {serviceList(id)}
    </div>
  );
};

export default Service;
