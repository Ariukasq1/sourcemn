import React from "react";
import { getData, __ } from "../../utils";

const Brand = ({ post }) => {
  const { _embedded, title, acf } = post || {};

  return (
    <div className="brand">
      <div className="brand-detail-image">
        <img src={getData(_embedded, "image")} />
      </div>
      <div className="brand-detail-and-about">
        <div className="blue-title">
          {__("About")}{" "}
          <span dangerouslySetInnerHTML={{ __html: title.rendered }} />
        </div>
        <div
          className="brand-detail-text"
          dangerouslySetInnerHTML={{ __html: acf.about }}
        />

        <div className="blue-title">
          <span dangerouslySetInnerHTML={{ __html: title.rendered }} />{" "}
          {__("Detail")}
        </div>
        <div
          className="brand-detail-text"
          dangerouslySetInnerHTML={{ __html: acf.advantage }}
        />
        {acf.certificate && (
          <div className="certificate">
            <div className="blue-title">
              {__("Certification & Accreditations:")}
            </div>
            <img src={acf.certificate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
