import React from "react";
import WPAPI from "wpapi";
import config from "../config";

const Facility = ({}) => {
  return <div className="page"></div>;
};

Facility.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  return {};
};

export default Facility;
