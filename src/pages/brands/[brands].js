import React from "react";
import Layout from "../../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../../config";
import Brand from "../../components/brands/brandsDetail";
import FirstChilds from "../../components/brands/firstChilds";

const BrandsD = ({
  mainMenu,
  topMenu,
  post,
  childCats,
  cat,
  childCats_child,
  childCats_child_childs,
}) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <Brand post={post} />
        <FirstChilds
          post={post}
          cat={cat}
          childCats={childCats}
          childCats_child={childCats_child}
          childCats_child_childs={childCats_child_childs}
        />
      </div>
    </Layout>
  );
};

BrandsD.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.brands;

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const cat = await wp
    .categories()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const childCats = await wp
    .categories()
    .parent((cat || {}).id)
    .embed();

  const childCats_child = await Promise.all(
    childCats.map(async (el) => {
      return await wp.categories().parent(el.id).embed();
    })
  );

  const childCats_child_childs = await Promise.all(
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
    cat,
    childCats,
    childCats_child,
    childCats_child_childs,
  };
};

export default BrandsD;
