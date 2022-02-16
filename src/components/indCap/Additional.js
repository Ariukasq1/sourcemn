import React from "react";

const Additional = ({ post }) => {
  const { additional } = post.acf || {};

  const renderPost = (group) => {
    return (
      <div
        className="add-text"
        dangerouslySetInnerHTML={{
          __html: group,
        }}
      />
    );
  };

  return (
    <>
      <div className="section">
        <div className="page odd" data-aos="fade-left">
          {additional && renderPost(additional.group)}
        </div>
      </div>
      <div className="section">
        <div className="page even" data-aos="fade-right">
          {additional && renderPost(additional.group_1)}
        </div>
      </div>
      <div className="section">
        <div className="page odd" data-aos="fade-up">
          {additional && renderPost(additional.group_2)}
        </div>
      </div>
    </>
  );
};

export default Additional;
