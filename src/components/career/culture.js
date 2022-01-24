import React from "react";
import { __, getData } from "../../utils";
import Link from "next/link";

const Culture = ({ data }) => {
  return (
    <div className="career-culture">
      <div className="gold-title">{__("Human Resource")}</div>
      <div className="sub-title">{__("We put company culture first")}</div>
      <div className="big-cards-list">
        {data
          .slice(0)
          .reverse()
          .map((card, ind) => {
            return (
              <Link
                key={ind}
                href={"/careers/[slug]"}
                as={`/careers/${card.slug}#section2`}
              >
                <div
                  className="big-card"
                  data-aos="fade-down"
                  data-aos-easing="ease"
                  data-aos-delay={ind * 300}
                  data-aos-duration="2000"
                  data-aos-offset="300"
                >
                  <div className="big-card-image">
                    <img src={getData(card._embedded, "image")} />
                  </div>
                  <div className="big-card-text">
                    <div
                      className="blue-title"
                      dangerouslySetInnerHTML={{ __html: card.title.rendered }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: card.content.rendered,
                      }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Culture;
