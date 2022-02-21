import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import FirstPart from "../../components/indCap/firstPart";
import Fullpage from "../../components/FullPage";
import SecondPart from "../../components/indCap/secondPart";
import FactSection from "../../components/indCap/thirdPart";
import Additional from "../../components/indCap/Additional";
import Relations from "../../components/indCap/relations";

const wp = new WPAPI({ endpoint: config.apiUrl });

const IndustriesDetail = ({ data, post, brands, relationsPosts }) => {
  const { acf } = post || {};

  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="page">
              <FirstPart data={data} clas="capabilities" />
            </div>
          </div>

          <div className="section">
            <SecondPart post={post} />
          </div>

          {(acf || {}).bg_image && (
            <div className="section">
              <FactSection post={post} />
            </div>
          )}

          {(acf || {}).additional && <Additional post={post} />}

          <div className="section">
            <Relations
              brandData={brands}
              post={post}
              relPosts={relationsPosts}
              relations="capabilities"
            />
          </div>
        </div>
      }
    />
  );
};

export async function getStaticProps({ params = {} } = {}) {
  const detail = params.slug;

  const catId = await wp
    .categories()
    .slug(`industries`)
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

  const brandsID = await wp
    .categories()
    .slug(`brands`)
    .embed()
    .then((data) => data[0]);

  const brands = await wp
    .posts()
    .categories((brandsID || {}).id)
    .perPage(40)
    .embed();

  const relID = await wp
    .categories()
    .slug(`capabilities`)
    .embed()
    .then((data) => data[0]);

  const relationsPosts = await wp
    .posts()
    .categories((relID || {}).id)
    .embed();

  return {
    props: { data, post, relationsPosts, brands },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`industries`)
    .embed()
    .then((data) => data[0]);

  const posts = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  return {
    paths: posts.map((post) => `/industries/${post.slug}`) || [],
    fallback: false,
  };
}

export default IndustriesDetail;
