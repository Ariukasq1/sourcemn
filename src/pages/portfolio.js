import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import PortfolioFirst from "../components/portfolio/portfolioFirst";

const Portfolio = ({ data }) => {
  return (
    <div className="page">
      <PortfolioFirst data={data} />
    </div>
  );
};

Portfolio.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return { data };
};

export default Portfolio;
