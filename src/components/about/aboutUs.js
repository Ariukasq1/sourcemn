import React from "react";
import { getData } from "../../utils";

const AboutUs = ({ data }) => {
  return (
    <div className="about-us">
      <div className="about-image" data-aos="fade-right">
        <img src={getData(data._embedded, "image")} />
      </div>
      <div className="simple-half-text" data-aos="fade-left">
        <div
          className="blue-title"
          dangerouslySetInnerHTML={{ __html: data.title.rendered }}
        />
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </div>
    </div>
  );
};

export default AboutUs;
