import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import WhyMMs from "../../components/career/why-mms";
import OpenVacany from "../../components/career/open-vacancy";
import SelectionProcess from "../../components/career/selection-process";
import Faqs from "../../components/career/faqs";

const wp = new WPAPI({ endpoint: config.apiUrl });

const CareersDetail = ({ contact, data, detail_posts, detail }) => {
  switch (detail) {
    case "why-mms":
      return <WhyMMs posts={detail_posts} data={data} contact={contact} />;
    case "open-vacancy":
      return <OpenVacany posts={detail_posts} data={data} contact={contact} />;
    case "selection-process":
      return (
        <SelectionProcess posts={detail_posts} data={data} contact={contact} />
      );
    default:
      return <Faqs posts={detail_posts} data={data} contact={contact} />;
  }
};

export async function getStaticProps({ params = {} } = {}) {
  const detail = params.slug;

  const contact = await wp
    .posts()
    .categories()
    .slug("contact")
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`careers`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const detail_posts_category = await wp
    .categories()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const detail_posts = await wp
    .posts()
    .categories((detail_posts_category || {}).id)
    .embed();

  return {
    props: { contact, data, detail_posts, detail },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`careers`)
    .embed()
    .then((data) => data[0]);

  const posts = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  return {
    paths: posts.map((post) => `/careers/${post.slug}`) || [],
    fallback: false,
  };
}

export default CareersDetail;
