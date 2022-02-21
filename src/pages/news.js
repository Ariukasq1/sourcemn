import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import NewsList from "../components/news/newsList";

const News = ({ data, childCats }) => {
  return (
    <div className="page">
      <NewsList data={data} cats={childCats} />
    </div>
  );
};

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: config.apiUrl });

  const catId = await wp
    .categories()
    .slug(`news`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  return { props: { data, childCats } };
}

export default News;
