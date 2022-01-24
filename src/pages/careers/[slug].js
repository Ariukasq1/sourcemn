import React from "react";
import WPAPI from "wpapi";
import Culture from "../../components/career/culture";
import WhyMMs from "../../components/career/why-mms";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import Footer from "../../components/layouts/footer";
import { render } from "nprogress";
import OpenVacany from "../../components/career/open-vacancy";
import SelectionProcess from "../../components/career/selection-process";
import Faqs from "../../components/career/faqs";

const Career_detail = ({
  mainMenu,
  topMenu,
  data,
  detail_posts,
  contact,
  detail,
}) => {
  const renderPage = (slug) => {
    switch (slug) {
      case "why-mms":
        return <WhyMMs posts={detail_posts} />;
      case "open-vacancy":
        return <OpenVacany posts={detail_posts} />;
      case "selection-process":
        return <SelectionProcess posts={detail_posts} />;
      default:
        return <Faqs posts={detail_posts} />;
    }
  };

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <Culture data={data} />
        <div id="section2">{renderPage(detail)}</div>
        <Footer contact={contact} />
      </div>
    </Layout>
  );
};

Career_detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.slug;

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const contact = await wp
    .posts()
    .categories()
    .slug("contact")
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`careers`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const detail_posts_category = await wp
    .categories()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const detail_posts = await wp
    .posts()
    .categories(detail_posts_category.id)
    .embed();

  return { mainMenu, topMenu, data, detail_posts, contact, detail };
};

export default Career_detail;
