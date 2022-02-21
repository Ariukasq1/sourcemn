import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import FirstPart from "../../components/indCap/firstPart";
import SecondPart from "../../components/indCap/secondPart";
import FactSection from "../../components/indCap/thirdPart";
import Additional from "../../components/indCap/Additional";
import Relations from "../../components/indCap/relations";
import Fullpage from "../../components/FullPage";

const Indcap = ({ data, detail, post, brands, relationsPosts, relations }) => {
  const { acf } = post || {};

  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="page">
              <FirstPart data={data} clas={detail} />
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
              relations={relations}
            />
          </div>
        </div>
      }
    />
  );
};

Indcap.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.detail;
  const slug = context.query.slug;
  const relations = detail === "capabilities" ? "industries" : "capabilities";

  const catId = await wp
    .categories()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  const post = await wp
    .posts()
    .slug(`${slug}`)
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
    .slug(`${relations}`)
    .embed()
    .then((data) => data[0]);

  const relationsPosts = await wp
    .posts()
    .categories((relID || {}).id)
    .embed();

  return {
    data,
    detail,
    post,
    brands,
    relationsPosts,
    relations,
  };
};

export default Indcap;
