import React from "react";
import { __ } from "../../utils";

const Faqs = ({ posts }) => {
  return (
    <div className="faqs">
      <div className="gold-title">{__("Human Resource")}</div>
      <div className="sub-title">{__("FAQs")}</div>
    </div>
  );
};

export default Faqs;
