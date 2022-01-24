import React from "react";
import WPAPI from "wpapi";
import Layout from "../components/layouts/Layout";
import config, { fetcher } from "../config";
import NewsList from "../components/news/newsList";

const NewsRoom = ({ mainMenu, topMenu, data, childCats }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <NewsList data={data} cats={childCats} />
      </div>
    </Layout>
  );
};

NewsRoom.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`news`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  const childCats = await wp.categories().parent(catId.id).embed();

  return { mainMenu, topMenu, data, childCats };
};

export default NewsRoom;
