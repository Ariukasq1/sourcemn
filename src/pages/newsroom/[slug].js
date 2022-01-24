import React from "react";
import WPAPI from "wpapi";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import NewsDetail from "../../components/news/newsDetail";
import RelatedNews from "../../components/news/newsRelated";

const Career_detail = ({ mainMenu, topMenu, post, data }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <NewsDetail post={post} />
        <RelatedNews data={data} />
      </div>
    </Layout>
  );
};

Career_detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug = context.query.slug;

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const post = await wp
    .posts()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`news`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  return { mainMenu, topMenu, post, data };
};

export default Career_detail;
