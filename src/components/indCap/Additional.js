import React, { useState } from "react";
import { getData } from "../../utils";
import Link from "next/link";

const Additional = ({ post }) => {
  const { additional } = post.acf;

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
      <div className="odd">{additional && renderPost(additional.group, 1)}</div>
      <div className="">{additional && renderPost(additional.group_1, 2)}</div>
      <div className="odd ">
        {additional && renderPost(additional.group_2, 3)}
      </div>
    </div>
  );
};

export default Additional;
