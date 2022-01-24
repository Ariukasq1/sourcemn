import React from "react";
import WPAPI from "wpapi";
import Layout from "../components/layouts/Layout";
import config, { fetcher } from "../config";
import FirstPart from "../components/indCap/firstPart";

const Portfolio = ({ mainMenu, topMenu, data }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <FirstPart clas="portfolio" data={data} />
      </div>
    </Layout>
  );
};

Portfolio.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  return { mainMenu, topMenu, data };
};

export default Portfolio;
