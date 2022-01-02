import React from "react";
import { getData, __ } from "../../utils";
import Link from "next/link";

const HomeCapabilty = ({ capability }) => {
  const { content, _embedded } = capability;

  return (
    <div className="homeCapability">
      <div className="simple-half-image">
        <img src={getData(_embedded, "image")} />
      </div>
      <div className="capability-home-text">
        <div>
          <div className="gold-title">{__("Capabilities")}</div>
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <Link href="/capabilities">
            <div className="read-more-button">{__("Read more")}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCapabilty;
