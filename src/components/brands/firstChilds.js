import React, { useState } from "react";
import { __ } from "../../utils";
import Link from "next/link";
import { DownloadOutlined, PictureOutlined } from "@ant-design/icons";

const FirstChilds = ({ cats, post, childCats, childCats_child }) => {
  const { title } = post || {};

  const [product, setProduct] = useState();
  const [parents, setParents] = useState();
  const [productTwo, setProductTwo] = useState();
  const [child, setChild] = useState();

  const renderItems = (name, id, checker, child) => {
    if (!checker) {
      setProduct(name);
    }

    setProductTwo(name);

    const test = childCats.filter((el) => {
      if (!el[0] || el[0].parent !== id) {
        return null;
      }
      return el[0];
    });

    setParents(test);

    if (child) {
      const test_child = childCats_child.map((el) => {
        const result = el.filter((item) => {
          if (!item[0] || item[0].parent !== child) {
            return null;
          }
          return item;
        });
        return result;
      });

      test_child.filter((el) => {
        if (el.length > 0) {
          setChild(el[0]);
        }
      });
    }
  };

  return (
    <>
      <div className="brand-first-child">
        <div className="blue-title">
          {(title || {}).rendered} {__("Products")}
        </div>
        <div className="child-grid">
          {cats.map((item, ind) => {
            const { bg_image, pdf_file, logo } = item.acf || {};
            return (
              <div
                key={ind}
                className="brand-child-list"
                data-aos="fade-down"
                data-aos-delay={200}
                data-aos-easing="ease"
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                <p>
                  {item.name}
                  {pdf_file && (
                    <a href={pdf_file} target="_blank" download>
                      <DownloadOutlined />
                    </a>
                  )}
                </p>
                <Link href="#section3">
                  <div
                    className="image-wrapper"
                    onClick={() => renderItems(item.name, item.id)}
                  >
                    {bg_image ? (
                      <img src={bg_image} />
                    ) : (
                      <div className="blue-circle">
                        <PictureOutlined />
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {parents && (
        <div id="section3">
          <div className="brand-second-child">
            <div className="blue-title">
              {product} {__("Products")}
            </div>

            {parents.map((items, ind) => {
              return (
                <div key={ind} className="child-grid">
                  {items.map((item, ind) => {
                    const { bg_image, pdf_file, logo } = item.acf || {};
                    return (
                      <div
                        key={ind}
                        className="brand-child-list"
                        data-aos="fade-down"
                        data-aos-delay={200}
                        data-aos-easing="ease"
                        data-aos-duration="2000"
                        data-aos-offset="300"
                      >
                        <p>
                          {item.name}
                          {pdf_file && (
                            <a href={pdf_file} target="_blank" download>
                              <DownloadOutlined />
                            </a>
                          )}
                        </p>
                        <Link href="#section4">
                          <div
                            className="image-wrapper"
                            onClick={() =>
                              renderItems(
                                item.name,
                                item.parent,
                                "four",
                                item.id
                              )
                            }
                          >
                            {bg_image ? (
                              <img src={bg_image} />
                            ) : (
                              <div className="blue-circle">
                                <PictureOutlined />
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {child && (
        <div id="section4">
          <div className="brand-second-child">
            <div className="blue-title">
              {productTwo} {__("Products")}
            </div>
            <div className="child-grid">
              {child.map((item, ind) => {
                const { bg_image, pdf_file, logo } = item.acf || {};
                return (
                  <div
                    key={ind}
                    className="brand-child-list"
                    data-aos="fade-down"
                    data-aos-delay={200}
                    data-aos-easing="ease"
                    data-aos-duration="2000"
                    data-aos-offset="300"
                  >
                    <p>
                      {item.name}
                      {pdf_file && (
                        <a href={pdf_file} target="_blank" download>
                          <DownloadOutlined />
                        </a>
                      )}
                    </p>
                    <div className="image-wrapper">
                      {bg_image ? (
                        <img src={bg_image} />
                      ) : (
                        <div className="blue-circle">
                          <PictureOutlined />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstChilds;
