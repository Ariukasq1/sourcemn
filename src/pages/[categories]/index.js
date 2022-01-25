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
import NewsList from "../../components/news/newsList";
import Culture from "../../components/career/culture";

const Category = ({
  mainMenu,
  topMenu,
  slug,
  data,
  childCats,
  serviceCats,
  service,
  contact,
  timeline,
}) => {
  const renderPage = () => {
    switch (slug) {
      case "industries":
        return (
          <>
            <FirstPart clas={slug} data={data} />
          </>
        );
      case "capabilities":
        return (
          <>
            <FirstPart clas={slug} data={data} />
          </>
        );
      case "brands":
        return (
          <>
            <HomeBrands brandCats={childCats} brands={data} page={slug} />
          </>
        );
      case "portfolio":
        return (
          <>
            <FirstPart clas={slug} data={data} />
          </>
        );
      case "about":
        return (
          <>
            <AboutUs data={data[0]} />
            <Service serviceCats={serviceCats} services={service} />
            <TimeLine timeline={timeline} />
            <Footer contact={contact} />
          </>
        );
      case "news":
        return (
          <>
            <NewsList data={data} cats={childCats} />
          </>
        );
      case "careers":
        return (
          <>
            <Culture data={data} />
          </>
        );
      default:
        return (
          <>
            <Footer contact={contact} />
          </>
        );
    }
  };

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">{renderPage()}</div>
    </Layout>
  );
};

Category.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug =
    context.query.categories === "newsroom" ? "news" : context.query.categories;

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

  const data = await wp.posts().categories(catId.id).embed();

  let childCats;
  let contact;

  switch (slug) {
    case "industries":
      return { data, topMenu, mainMenu, slug };

    case "capabilities":
      return { data, topMenu, mainMenu, slug };

    case "brands":
      childCats = await wp.categories().parent(catId.id).embed();

      return { data, topMenu, mainMenu, slug, childCats };

    case "portfolio":
      return { mainMenu, topMenu, data, slug };

    case "about":
      childCats = await wp.categories().parent(catId.id).embed();

      const serviceCats = await wp.categories().parent(childCats[0].id).embed();

      const service = await wp
        .posts()
        .categories(serviceCats.map((service) => service.id))
        .embed();

      contact = await wp
        .posts()
        .categories()
        .slug("contact")
        .embed()
        .then((data) => data[0]);

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

    case "news":
      childCats = await wp.categories().parent(catId.id).embed();

      return { mainMenu, topMenu, data, childCats, slug };

    case "careers":
      return { mainMenu, topMenu, data, slug };

    default:
      contact = await wp
        .posts()
        .categories()
        .slug(`${slug}`)
        .embed()
        .then((data) => data[0]);

      return { mainMenu, topMenu, contact, slug };
  }
};

export default Category;
