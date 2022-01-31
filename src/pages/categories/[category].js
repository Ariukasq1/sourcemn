import React from "react";
import Layout from "../../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../../config";
import FirstPart from "../../components/indCap/firstPart";
import HomeBrands from "../../components/home/brands";
import AboutUs from "../../components/about/aboutUs";
import Service from "../../components/about/aboutService";
import TimeLine from "../../components/about/timeline";
import Footer from "../../components/layouts/footer";
import Culture from "../../components/career/culture";
import NewsList from "../../components/news/newsList";

const Category = ({
  mainMenu,
  topMenu,
  data,
  slug,
  childCats,
  contact,
  service,
  serviceCats,
  timeline,
}) => {
  const renderPage = (page) => {
    switch (page) {
      case "facility":
        return <></>;

      case "brands":
        return <HomeBrands brandCats={childCats} brands={data} page={page} />;

      case "about":
        return (
          <>
            <AboutUs data={data[0]} />
            <Service serviceCats={serviceCats} services={service} />
            <TimeLine timeline={timeline} />
            <Footer contact={contact} />
          </>
        );

      case "careers":
        return <Culture data={data} />;

      case "contact":
        return <Footer contact={contact} />;

      case "news":
        return <NewsList data={data} cats={childCats} />;

      default:
        return <FirstPart clas={page} data={data} />;
    }
  };

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">{renderPage(slug)}</div>
    </Layout>
  );
};

Category.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug = context.query.category;

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`${slug}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
    .embed();

  let childCats;
  let contact;

  switch (slug) {
    case "news":
      childCats = await wp
        .categories()
        .parent((catId || {}).id)
        .embed();

      return { mainMenu, topMenu, data, childCats, slug };

    case "brands":
      childCats = await wp
        .categories()
        .parent((catId || {}).id)
        .embed();

      return { mainMenu, topMenu, data, childCats, slug };

    case "contact":
      contact = await wp
        .posts()
        .categories()
        .slug(`${slug}`)
        .embed()
        .then((data) => data[0]);

      return { mainMenu, topMenu, contact, slug };

    case "about":
      childCats = await wp
        .categories()
        .parent((catId || {}).id)
        .embed();

      contact = await wp
        .posts()
        .categories()
        .slug("contact")
        .embed()
        .then((data) => data[0]);

      const serviceCats = await wp
        .categories()
        .parent((childCats[0] || {}).id)
        .embed();

      const service = await wp
        .posts()
        .categories(serviceCats.map((service) => service.id))
        .embed();

      const history = await wp
        .categories()
        .slug(`timeline`)
        .embed()
        .then((data) => data[0]);

      const timeline = await wp
        .posts()
        .categories((history || {}).id)
        .embed();

      return {
        mainMenu,
        topMenu,
        service,
        serviceCats,
        data,
        contact,
        timeline,
        slug,
      };

    case "facility":
      return { topMenu, mainMenu };

    default:
      return { data, topMenu, mainMenu, slug };
  }
};

export default Category;
