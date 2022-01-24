import React from "react";
import WPAPI from "wpapi";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import Brand from "../../components/brands/brandsDetail";

const Brand_detail = ({ post, mainMenu, topMenu }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <Brand post={post} />
      </div>
    </Layout>
  );
};

Brand_detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const slug = context.query.slug;

  const post = await wp
    .posts()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  return { mainMenu, topMenu, post };
};

export default Brand_detail;
