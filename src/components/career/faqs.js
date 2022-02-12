import React from "react";
import { __ } from "../../utils";
import { Collapse } from "antd";
import Fullpage from "../FullPage";
import Culture from "./culture";
import Footer from "../layouts/footer";

const { Panel } = Collapse;

const Faqs = ({ posts, data, contact }) => {
  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="page">
              <Culture data={data} />
            </div>
          </div>

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

          <div className="section">
            <Footer contact={contact} />
          </div>
        </div>
      }
    />
  );
};

export default Faqs;
