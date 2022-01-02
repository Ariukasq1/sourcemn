import React from "react";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import WPAPI from "wpapi";
import FirstPart from "../../components/indCap/firstPart";
import Footer from "../../components/layouts/footer";
import HomeBrands from "../../components/home/brands";

const Page = ({ mainMenu, topMenu, data, slug, childCats }) => {
  const renderData = () => {
    switch (slug) {
      case "brands":
        return (
          <>
            <HomeBrands brandCats={childCats} brands={data} page={slug} />
          </>
        );
      case "about":
        return (
          <>
            <Footer contact={data[0]} />
          </>
        );
      case "contact":
        return (
          <>
            <Footer contact={data[0]} />
          </>
        );
      case "career":
        return <>career</>;
      case "news":
        return <>news</>;
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

Page.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug =
    context.query.pages === "newsroom" ? "news" : context.query.pages;

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

  return {
    mainMenu,
    topMenu,
    data,
    slug,
    catId,
    childCats,
  };
};

export default Page;
