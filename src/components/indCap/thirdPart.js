import React from "react";
import Image from "next/image";

const FactSection = ({ post }) => {
  const { bg_image } = post.acf || {};

  return (
    <div className="thirdPart">
      <Image
        loader={() => bg_image}
        src={bg_image}
        alt="back"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="container">
        {Object.entries(post.acf).map(([key, value]) => {
          if (!key.includes("group")) {
            return null;
          }

          return (
            <div key={key} className="facts">
              <Image
                loader={() => value.icon}
                src={value.icon}
                alt="back"
                width="80"
                height="80"
              />
              <p>{value.upper_text}</p>
              <div className="numbers">
                {value.number} {value.number_format}
              </div>
              <p>{value.bottom_text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FactSection;
