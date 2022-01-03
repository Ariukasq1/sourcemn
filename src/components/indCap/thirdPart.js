import React from "react";

const FactSection = ({ post }) => {
  const { bg_image } = post.acf;
  return (
    <div className="thirdPart" style={{ backgroundImage: `url(${bg_image})` }}>
      hello
    </div>
  );
};

export default FactSection;
