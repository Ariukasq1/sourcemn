import React from "react";
import { __, getData } from "../../utils";
import Link from "next/link";

const Culture = ({ data }) => {
  return (
    <div className="career-culture">
      <div className="gold-title">{__("Human Resource")}</div>
      <div className="sub-title">{__("We put company culture first")}</div>
      <div className="big-cards-list">
        {data.map((card, ind) => {
          return (
            <Link
              key={ind}
              href={"/[pages]/[detail]"}
              as={`/careers/${card.slug}`}
            >
              <div className="big-card">
                <div className="big-card-image">
                  <img src={getData(card._embedded, "image")} />
                </div>
                <div className="big-card-text">
                  <div
                    className="blue-title"
                    dangerouslySetInnerHTML={{ __html: card.title.rendered }}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: card.content.rendered }}
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
