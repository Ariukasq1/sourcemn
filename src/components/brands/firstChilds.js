import React, { useState } from "react";
import { getData, __ } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons";
import { Row } from "antd";

const FirstChilds = ({ post, cat, childCats, childCats_child }) => {
  const { title } = post || {};
  const { acf } = cat || {};
  const { pdf_file } = acf || {};

  return (
    <>
      {childCats.length > 0 ? (
        <div className="brand-details">
          <div className="blue-title">
            {(title || {}).rendered} {__("Products")}
            {pdf_file && (
              <a className="download" href={pdf_file} target="_blank" download>
                <DownloadOutlined />
                <span className="tooltip">{__("Download brochure")}</span>
              </a>
            )}
          </div>

          <div className="brochures">
            {childCats.map((item, ind) => {
              const { acf, name } = item || {};
              const { bg_image, pdf_file } = acf || {};

              return (
                <div
                  key={ind}
                  className="one-brochure"
                  style={{
                    backgroundImage: `url(${bg_image})`,
                  }}
                >
                  <div
                    className="broch-overlay"
                    style={{
                      opacity: bg_image ? "0.6" : "1",
                    }}
                  />
                  <p>{name}</p>
                  {pdf_file && (
                    <a
                      className="download"
                      href={pdf_file}
                      target="_blank"
                      download
                    >
                      {__("Download")} <ArrowRightOutlined />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FirstChilds;
