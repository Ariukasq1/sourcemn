import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import Culture from "../components/career/culture";

const Careers = ({ data }) => {
  return (
    <div className="page">
      <Culture data={data} />
    </div>
  );
};

Careers.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const catId = await wp
    .categories()
    .slug(`careers`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return { data };
};

export default Careers;
