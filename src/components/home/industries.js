import React, { useState } from "react";
import { __, getData } from "../../utils";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const HomeIndustries = ({ data }) => {
  const lastContent = data[data.length - 1];

  const [img, setImg] = useState(lastContent._embedded);

  const [index, setIndex] = useState(0);

  const [content, setContent] = useState(lastContent.content.rendered);

  const renderIndustry = (img, content, ind) => {
    setImg(img);
    setContent(content);
    setIndex(ind);
  };

  return (
    <div className="homeIndustries">
      <div className="industry-button">
        <div className="gold-title">{__("Industries")}</div>
        {data
          .slice(0)
          .reverse()
          .map((item, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  renderIndustry(item._embedded, item.content.rendered, ind);
                }}
                className="big-buttons"
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-delay={ind * 150}
                data-aos-duration="100"
                data-aos-offset="300"
                style={{
                  color: `${ind === index ? "#00488d" : "rgba(0, 0, 0, 0.7)"}`,
                }}
              >
                {item.title.rendered}
                <ArrowRightOutlined
                  style={{
                    display: `${ind === index ? "inline-block" : "none"}`,
                  }}
                />
              </div>
            );
          })}

        <Link href={`/industries`}>
          <div className="read-more-button">{__("Read more")}</div>
        </Link>
      </div>
      <div
        className="over-image"
        style={{ backgroundImage: `url(${getData(img, "image")})` }}
      >
        <div
          className="over-text"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="0"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default HomeIndustries;
