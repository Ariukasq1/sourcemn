import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import Fullpage from "../../components/FullPage";
import Product from "../../components/portfolio/product";
import Projects from "../../components/portfolio/projects";
import PortfolioFirst from "../../components/portfolio/portfolioFirst";

const wp = new WPAPI({ endpoint: config.apiUrl });

const PortfolioDetail = ({ post, data, child_data, materials }) => {
  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="page">
              <PortfolioFirst data={data} clas="portfolio" />
            </div>
          </div>

          <div className="section">
            <Product post={post} />
          </div>

          <Projects projects={child_data} post={post} materials={materials} />
        </div>
      }
    />
  );
};

export async function getStaticProps({ params = {} } = {}) {
  const detail = params.slug;

  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  const child_id = childCats.filter((el) => el.slug.includes(detail));

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
    .embed();

  return {
    props: { data, post, child_data, materials },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`portfolio`)
    .embed()
    .then((data) => data[0]);

  const posts = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  return {
    paths: posts.map((post) => `/portfolio/${post.slug}`) || [],
    fallback: false,
  };
}

export default PortfolioDetail;
