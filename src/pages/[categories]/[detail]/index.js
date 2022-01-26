import React from "react";
import WPAPI from "wpapi";
import Layout from "../../../components/layouts/Layout";
import config, { fetcher } from "../../../config";
import FirstPart from "../../../components/indCap/firstPart";
import SecondPart from "../../../components/indCap/secondPart";
import FactSection from "../../../components/indCap/thirdPart";
import Additional from "../../../components/indCap/Additional";
import Brand from "../../../components/brands/brandsDetail";
import FirstChilds from "../../../components/brands/firstChilds";
import Relations from "../../../components/indCap/relations";
import Product from "../../../components/portfolio/product";
import Projects from "../../../components/portfolio/projects";
import Culture from "../../../components/career/culture";
import WhyMMs from "../../../components/career/why-mms";
import OpenVacany from "../../../components/career/open-vacancy";
import SelectionProcess from "../../../components/career/selection-process";
import Faqs from "../../../components/career/faqs";
import Footer from "../../../components/layouts/footer";
import NewsDetail from "../../../components/news/newsDetail";
import RelatedNews from "../../../components/news/newsRelated";

const Detail = ({
  mainMenu,
  topMenu,
  data,
  slug,
  post,
  childCats,
  childCats_child,
  childCats_child_child,
  brands,
  relationsPosts,
  relations,
  child_data,
  detail,
  materials,
  detail_posts,
  contact,
}) => {
  const { acf } = post || {};

  console.log(childCats_child, "-----------");

  const renderDetail = (detail) => {
    switch (detail) {
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

  const renderPage = () => {
    switch (slug) {
      case "industries":
        return (
          <>
            <FirstPart data={data} clas={slug} />
            <div id="section2">
              <SecondPart post={post} />
            </div>
            {(acf || {}).bg_image && <FactSection post={post} />}
            {(acf || {}).additional && <Additional post={post} />}
            <Relations
              brandData={brands}
              post={post}
              relPosts={relationsPosts}
              relations={relations}
            />
          </>
        );

      case "capabilities":
        return (
          <>
            <FirstPart data={data} clas={slug} />
            <div id="section2">
              <SecondPart post={post} />
            </div>
            {(acf || {}).bg_image && <FactSection post={post} />}
            {(acf || {}).additional && <Additional post={post} />}
            <Relations
              brandData={brands}
              post={post}
              relPosts={relationsPosts}
              relations={relations}
            />
          </>
        );

      case "brands":
        return (
          <>
            <Brand post={post} />
            <FirstChilds
              post={post}
              cats={childCats}
              childCats={childCats_child}
              childCats_child={childCats_child_child}
            />
          </>
        );

      case "portfolio":
        return (
          <>
            <FirstPart data={data} clas={slug} />
            <div id="section2">
              <Product post={post} />
            </div>
            <Projects
              projects={child_data}
              detail={detail}
              background={post}
              materials={materials}
            />
          </>
        );

      case "careers":
        return (
          <>
            <Culture data={data} />
            <div id="section2">{renderDetail(detail)}</div>
            <Footer contact={contact} />
          </>
        );
      default:
        return (
          <>
            <NewsDetail post={post} />
            <RelatedNews data={data} slug={slug} />
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

Detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const slug =
    context.query.categories === "newsroom" ? "news" : context.query.categories;
  const detail = context.query.detail;

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
    .embed();

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  let childCats;
  let relations;
  let brandsID;
  let brands;
  let relID;
  let relationsPosts;
  let contact;

  switch (slug) {
    case "industries":
      relations = "capabilities";

      brandsID = await wp
        .categories()
        .slug(`brands`)
        .embed()
        .then((data) => data[0]);

      brands = await wp.posts().categories(brandsID.id).perPage(100).embed();

      relID = await wp
        .categories()
        .slug(`${relations}`)
        .embed()
        .then((data) => data[0]);

      relationsPosts = await wp
        .posts()
        .categories((relID || {}).id)
        .embed();

      return { mainMenu, topMenu, data, slug, post, brands, relationsPosts };

    case "capabilities":
      relations = "industries";

      brandsID = await wp
        .categories()
        .slug(`brands`)
        .embed()
        .then((data) => data[0]);

      brands = await wp.posts().categories(brandsID.id).perPage(100).embed();

      relID = await wp
        .categories()
        .slug(`${relations}`)
        .embed()
        .then((data) => data[0]);

      relationsPosts = await wp
        .posts()
        .categories((relID || {}).id)
        .embed();

      return { mainMenu, topMenu, data, slug, post, brands, relationsPosts };

    case "brands":
      childCats = await wp.categories().parent(catId.id).embed();

      const childCats_child = await Promise.all(
        childCats.map(async (el) => {
          return await wp.categories().parent(el.id).embed();
        })
      );

      const childCats_child_child = await Promise.all(
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
        slug,
        childCats,
        childCats_child,
        childCats_child_child,
      };

    case "portfolio":
      childCats = await wp
        .categories()
        .parent((catId || {}).id)
        .embed();

      const child_id = childCats.filter((el) =>
        el.slug.includes(
          detail === "construction-projects-2"
            ? "construction-projects"
            : detail
        )
      );

      const child_data = await wp
        .posts()
        .categories((child_id[0] || {}).id)
        .perPage(20)
        .embed();

      const materialsID = await wp
        .categories()
        .slug(`materials`)
        .embed()
        .then((data) => data[0]);

      const materials = await wp
        .posts()
        .categories((materialsID || {}).id)
        .perPage(100)
        .embed();

      return {
        mainMenu,
        topMenu,
        data,
        slug,
        post,
        materials,
        child_data,
        detail,
      };

    case "careers":
      contact = await wp
        .posts()
        .categories()
        .slug("contact")
        .embed()
        .then((data) => data[0]);

      const detail_posts_category = await wp
        .categories()
        .slug(`${detail}`)
        .embed()
        .then((data) => data[0]);

      const detail_posts = await wp
        .posts()
        .categories((detail_posts_category || {}).id)
        .embed();

      return { mainMenu, topMenu, data, contact, detail_posts, detail, slug };

    default:
      return { mainMenu, topMenu, post, data, slug };
  }
};

export default Detail;
