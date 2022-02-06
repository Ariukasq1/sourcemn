import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { __ } from "../../utils";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Faqs = ({ posts }) => {
  return (
    <div className="section">
      <div className="faqs">
        <div className="gold-title">{__("Human Resource")}</div>
        <div className="sub-title">{__("FAQs")}</div>
        <Collapse defaultActiveKey={["0"]} className="collapse" accordion>
          {posts
            .slice(0, -1)
            .reverse()
            .map((item, ind) => {
              return (
                <Panel key={ind} header={<p>{item.title.rendered}</p>}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.content.rendered,
                    }}
                  />
                </Panel>
              );
            })}
        </Collapse>
      </div>
    </div>
  );
};

export default Faqs;
