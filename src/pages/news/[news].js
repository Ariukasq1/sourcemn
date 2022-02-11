import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import NewsDetail from "../../components/news/newsDetail";
import RelatedNews from "../../components/news/newsRelated";

const NewsD = ({ post, data }) => {
  return (
    <div className="top">
      <NewsDetail post={post} />
      <RelatedNews data={data} slug="news" />
    </div>
  );
};

NewsD.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.news;

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

  return { post, data };
};

export default NewsD;
