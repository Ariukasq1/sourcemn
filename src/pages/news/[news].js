import React from "react";
import Layout from "../../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../../config";
import NewsDetail from "../../components/news/newsDetail";
import RelatedNews from "../../components/news/newsRelated";

const News = ({ mainMenu, topMenu, post, data }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <NewsDetail post={post} />
        <RelatedNews data={data} slug="news" />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.news;

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

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  return { props: { mainMenu, topMenu, post, data } };
}

export default News;
