import React from "react";
import WPAPI from "wpapi";
import FirstPart from "../../components/indCap/firstPart";
import Layout from "../../components/layouts/Layout";
import config, { fetcher } from "../../config";
import Product from "../../components/portfolio/product";
import Projects from "../../components/portfolio/projects";

const Portfolio_detail = ({
  mainMenu,
  topMenu,
  data,
  post,
  child_data,
  detail,
  materials,
}) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <FirstPart data={data} clas="portfolio" />
        <div id="section2">
          <Product post={post} />
        </div>
        <Projects
          projects={child_data}
          detail={detail}
          background={post}
          materials={materials}
        />
      </div>
    </Layout>
  );
};

Portfolio_detail.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.slug;

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const data = await wp.posts().categories(catId.id).embed();

  const childCats = await wp.categories().parent(catId.id).embed();

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const child_id = childCats.filter((el) =>
    el.slug.includes(
      detail === "construction-projects-2" ? "construction-projects" : detail
    )
  );

  const child_data = await wp
    .posts()
    .categories(child_id[0].id)
    .perPage(20)
    .embed();

  const materialsID = await wp
    .categories()
    .slug(`materials`)
    .embed()
    .then((data) => data[0]);

  const materials = await wp
    .posts()
    .categories(materialsID.id)
    .perPage(100)
    .embed();

  return { mainMenu, topMenu, data, post, child_data, detail, materials };
};

export default Portfolio_detail;
