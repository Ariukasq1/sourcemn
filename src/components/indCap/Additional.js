import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";

const Additional = ({ post }) => {
  const { additional } = post.acf || {};

  const renderPost = (group, index) => {
    return (
      <>
        <img src={`/images/industry${index}.png`} />
        <div
          dangerouslySetInnerHTML={{
            __html: group,
          }}
        />
      </>
    );
  };

  return (
    <div className="Additional">
      <div
        className="odd"
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="2000"
        data-aos-offset="300"
        data-aos-delay={300}
      >
        {additional && renderPost(additional.group, 1)}
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="2000"
        data-aos-delay={500}
        data-aos-offset="300"
      >
        {additional && renderPost(additional.group_1, 2)}
      </div>
      <div
        className="odd"
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-delay={700}
        data-aos-duration="2000"
        data-aos-offset="300"
      >
        {additional && renderPost(additional.group_2, 3)}
      </div>
    </div>
  );
};

export default Additional;
