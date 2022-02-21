import React from "react";
import WPAPI from "wpapi";
import config from "../../config";

const wp = new WPAPI({ endpoint: config.apiUrl });

const PortfolioDetail = () => {
  return <div className="page">Portfolio</div>;
};

export async function getStaticProps({ params = {} } = {}) {
  const detail = params.slug;

  return {
    props: {},
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
