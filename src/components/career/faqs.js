import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { __ } from "../../utils";

const Faqs = ({ posts }) => {
  const [display, setDisplay] = useState(false);
  const [index, setIndex] = useState();

  const renderState = (dis, ind) => {
    setDisplay(dis);
    setIndex(ind);
  };

  return (
    <div className="faqs">
      <div className="gold-title">{__("Human Resource")}</div>
      <div className="sub-title">{__("FAQs")}</div>
      <div className="collapse">
        {posts
          .slice(0, -1)
          .reverse()
          .map((item, ind) => {
            return (
              <div key={ind}>
                <p
                  className="collapse-head"
                  onClick={() => renderState(!display, ind)}
                >
                  <DownOutlined />
                  {item.title.rendered}
                </p>
                {index === ind ? (
                  <p
                    className="collapse-hidden"
                    style={{ display: display === true ? "block" : "none" }}
                    dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  />
                ) : null}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faqs;
