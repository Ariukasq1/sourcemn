import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import NewsDetail from "../../components/news/newsDetail";
import RelatedNews from "../../components/news/newsRelated";

const wp = new WPAPI({ endpoint: config.apiUrl });

const NewsDetails = ({ post, data }) => {
  return (
    <div className="top">
      <NewsDetail post={post} />
      <RelatedNews data={data} slug="news" />
    </div>
  );
};

export async function getStaticProps({ params = {} } = {}) {
  const detail = params.slug;

  const catId = await wp
    .categories()
    .slug(`news`)
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

  return {
    props: { post, data },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`news`)
    .embed()
    .then((data) => data[0]);

  const posts = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  return {
    paths: posts.map((post) => `/news/${post.slug}`) || [],
    fallback: false,
  };
}

export default NewsDetails;
