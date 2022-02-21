import React from "react";
import WPAPI from "wpapi";
import config from "../config";

const Facility = ({}) => {
  return <div className="page"></div>;
};

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: config.apiUrl });

  return { props: {} };
}

export default Facility;
