import React from "react";
import Layout from "../../../components/layouts/Layout";
import config, { fetcher } from "../../../config";
import WPAPI from "wpapi";
import FirstPart from "../../../components/indCap/firstPart";
import SecondPart from "../../../components/indCap/secondPart";
import FactSection from "../../../components/indCap/thirdPart";
import Additional from "../../../components/indCap/Additional";
import Relations from "../../../components/indCap/relations";
import Product from "../../../components/portfolio/product";
import Projects from "../../../components/portfolio/projects";

const Detail = ({ mainMenu, topMenu, data, slug, post, brands }) => {
  const renderData = () => {
    switch (slug) {
      case "brands":
        return <>brandsDetail</>;
      case "careers":
        return <>careerDetail</>;
      case "news":
        return <>newsDetail</>;
      case "portfolio":
        return (
          <>
            <FirstPart clas={slug} data={data} />
            <div id="section2">
              <Product post={post} />
            </div>
            <Projects />
          </>
        );
      default:
        return (
          <>
            <FirstPart clas={slug} data={data} />
            <div id="section2">
              <SecondPart post={post} />
            </div>
            {post.acf.bg_image && <FactSection post={post} />}
            {post.acf.additional && <Additional post={post} />}
            <Relations brands={brands} post={post} type={slug} />
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

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  const childCats = await wp.categories().parent(catId.id).embed();

  const brandsID = await wp
    .categories()
    .slug("brands")
    .embed()
    .then((data) => data[0]);

  const brands = await wp.posts().categories(brandsID.id).perPage(100).embed();

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  return { mainMenu, topMenu, data, slug, post, brands };
};

export default Detail;
