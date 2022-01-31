import React from "react";
import Layout from "../../../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../../../config";
import FirstPart from "../../../components/indCap/firstPart";
import SecondPart from "../../../components/indCap/secondPart";
import Relations from "../../../components/indCap/relations";
import Fullpage from "../../../components/FullPage";

const Capabilities = ({
  mainMenu,
  topMenu,
  data,
  post,
  brands,
  relationsPosts,
}) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <Fullpage
          children={
            <div id="fullpage">
              <div className="section">
                <FirstPart data={data} clas="capabilities" />
              </div>

              <div className="section">
                <SecondPart post={post} />
              </div>

              <div className="section">
                <Relations
                  brandData={brands}
                  post={post}
                  relPosts={relationsPosts}
                  relations="industries"
                />
              </div>
            </div>
          }
        />
      </div>
    </Layout>
  );
};

Capabilities.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.capabilities;

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`capabilities`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
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
    .slug(`industries`)
    .embed()
    .then((data) => data[0]);

  const relationsPosts = await wp
    .posts()
    .categories((relID || {}).id)
    .embed();

  return { mainMenu, topMenu, data, post, brands, relationsPosts };
};

export default Capabilities;
