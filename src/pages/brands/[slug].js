import React from "react";
import WPAPI from "wpapi";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import Brand from "../../components/brands/brandsDetail";
import FirstChilds from "../../components/brands/firstChilds";

const Brand_detail = ({
  post,
  mainMenu,
  topMenu,
  childCats,
  childCats_child,
  childCats_child_child,
}) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <Brand post={post} />
        <FirstChilds
          cats={childCats}
          post={post}
          childCats={childCats_child}
          childCats_child={childCats_child_child}
        />
      </div>
    </Layout>
  );
};

Brand_detail.getInitialProps = async (context) => {
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
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  const childCats_child = await Promise.all(
    childCats.map(async (el) => {
      return await wp.categories().parent(el.id).embed();
    })
  );

  const childCats_child_child = await Promise.all(
    childCats_child.map(async (el) => {
      return await Promise.all(
        el.map(async (el) => {
          return await wp.categories().parent(el.id).embed();
        })
      );
    })
  );

  return {
    mainMenu,
    topMenu,
    post,
    childCats,
    childCats_child,
    childCats_child_child,
  };
};

export default Brand_detail;
