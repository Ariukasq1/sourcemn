import React from "react";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import WPAPI from "wpapi";
import FirstPart from "../../components/indCap/firstPart";
import Footer from "../../components/layouts/footer";
import HomeBrands from "../../components/home/brands";
import NewsList from "../../components/news/newsList";
import Culture from "../../components/career/culture";
import AboutUs from "../../components/about/aboutUs";
import Service from "../../components/about/aboutService";
import TimeLine from "../../components/about/timeline";

const Page = ({
  mainMenu,
  topMenu,
  data,
  slug,
  childCats,
  contact,
  serviceCats,
  service,
}) => {
  const renderData = () => {
    switch (slug) {
      case "facility":
        return <>Coming soon</>;
      case "brands":
        return (
          <>
            <HomeBrands brandCats={childCats} brands={data} page={slug} />
          </>
        );
      case "contact":
        return (
          <>
            <Footer contact={data[0]} />
          </>
        );
      case "about":
        return (
          <>
            <AboutUs data={data[0]} />
            <Service serviceCats={serviceCats} services={service} />
            <TimeLine />
            <Footer contact={contact} />
          </>
        );
      case "careers":
        return (
          <>
            <Culture data={data} />
          </>
        );
      case "news":
        return (
          <>
            <NewsList data={data} cats={childCats} />
          </>
        );
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
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  const childCats = await wp.categories().parent(catId.id).embed();

  switch (slug) {
    case "facility":
      return { slug, mainMenu, topMenu };

    case "about":
      const serviceCats = await wp.categories().parent(childCats[0].id).embed();

      const service = await wp
        .posts()
        .categories(serviceCats.map((service) => service.id))
        .embed();

      return { slug, mainMenu, topMenu, service, serviceCats, contact, data };

    default:
      return { mainMenu, topMenu, data, slug, catId, contact, childCats };
  }
};

export default Page;
