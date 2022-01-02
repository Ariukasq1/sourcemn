import React from "react";
import Layout from "../../../components/layouts/Layout";
import config, { fetcher } from "../../../config";
import WPAPI from "wpapi";

const Detail = ({ mainMenu, topMenu, data }) => {
  console.log(data, "-----------");
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">detail</div>
    </Layout>
  );
};

Detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug = context.query.slug;

  const detail = context.query.detail;

  const catId = await wp
    .categories()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  const childCats = await wp.categories().parent(catId.id).embed();

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );
  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  return { mainMenu, topMenu, data };
};

export default Detail;
