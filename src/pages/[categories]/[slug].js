import React from "react";
import WPAPI from "wpapi";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import FirstPart from "../../components/indCap/firstPart";
import SecondPart from "../../components/indCap/secondPart";
import FactSection from "../../components/indCap/thirdPart";
import Additional from "../../components/indCap/Additional";
import Relations from "../../components/indCap/relations";

const IndCap_detail = ({
  mainMenu,
  topMenu,
  data,
  categories,
  post,
  brands,
  relationsPosts,
  relations,
}) => {
  const { acf } = post || {};
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <FirstPart data={data} clas={categories} />
        <div id="section2">
          <SecondPart post={post} />
        </div>
        {(acf || {}).bg_image && <FactSection post={post} />}
        {(acf || {}).additional && <Additional post={post} />}
        <Relations
          brands={brands}
          post={post}
          relPosts={relationsPosts}
          relations={relations}
        />
      </div>
    </Layout>
  );
};

IndCap_detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const categories = context.query.categories;
  const detail = context.query.slug;
  const relations = categories === "industries" ? "capabilities" : "industries";

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`${categories}`)
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

  const brandsID = await wp
    .categories()
    .slug(`brands`)
    .embed()
    .then((data) => data[0]);

  const brands = await wp.posts().categories(brandsID.id).perPage(100).embed();

  const relID = await wp
    .categories()
    .slug(`${relations}`)
    .embed()
    .then((data) => data[0]);

  const relationsPosts = await wp
    .posts()
    .categories((relID || {}).id)
    .embed();

  return {
    mainMenu,
    topMenu,
    data,
    categories,
    post,
    brands,
    relationsPosts,
    relations,
  };
};

export default IndCap_detail;
