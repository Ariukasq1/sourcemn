import React from "react";
import Layout from "../../../components/layouts/Layout";
import config, { fetcher } from "../../../config";
import WPAPI from "wpapi";
import FirstPart from "../../../components/indCap/firstPart";

const Detail = ({ mainMenu, topMenu, data, slug }) => {
  const renderData = () => {
    switch (slug) {
      case "brands":
        return <>brandsDetail</>;
      case "career":
        return <>careerDetail</>;
      case "news":
        return <>newsDetail</>;
      case "portfolio":
        return (
          <>
            <FirstPart clas={slug} data={data} />
          </>
        );
      default:
        return (
          <>
            <FirstPart clas={slug} data={data} />
          </>
        );
    }
  };
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">{renderData()}</div>
    </Layout>
  );
};

Detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug = context.query.pages;

  const detail = context.query.detail;

  const catId = await wp
    .categories()
    .slug(`${slug}`)
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

  return { mainMenu, topMenu, data, slug };
};

export default Detail;
