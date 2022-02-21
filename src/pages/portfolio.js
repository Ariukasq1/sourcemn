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

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: config.apiUrl });

  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return { props: { data } };
}

export default Portfolio;
