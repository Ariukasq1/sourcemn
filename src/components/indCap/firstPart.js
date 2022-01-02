import React from "react";
import { __, getData } from "../../utils";
import Link from "next/link";

const FirstPart = ({ clas, data }) => {
  return (
    <div className="firstPart">
      <div className="sub-title">{__(`${clas}`)}</div>
      <div className={clas}>
        {data.map((post, ind) => {
          const { title, excerpt, slug, _embedded } = post;

          return (
            <div key={ind}>
              <h2
                className="continue-title"
                dangerouslySetInnerHTML={{ __html: title.rendered }}
              />
              <div
                className="continue-text"
                dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
              />
              <Link href={"/[pages]/[detail]"} as={`/${clas}/${slug}`}>
                <div className="read-more-detail">{__("Read more")}</div>
              </Link>
              <Link href={"/[pages]/[detail]"} as={`/${clas}/${slug}`}>
                <div className="squad-image">
                  <img src={getData(_embedded, "image")} />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstPart;
