import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import Footer from "../../components/layouts/footer";
import WhyMMs from "../../components/career/why-mms";
import OpenVacany from "../../components/career/open-vacancy";
import SelectionProcess from "../../components/career/selection-process";
import Faqs from "../../components/career/faqs";
import Culture from "../../components/career/culture";
import Fullpage from "../../components/FullPage";

const CareersD = ({ contact, data, detail_posts, detail }) => {
  const renderDetail = () => {
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

  return (
    <Fullpage
      children={
        <div id="fullpage">
          <div className="section">
            <div className="page">
              <Culture data={data} />
            </div>
          </div>

          {renderDetail()}

          <div className="section">
            <Footer contact={contact} />
          </div>
        </div>
      }
    />
  );
};

CareersD.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const detail = context.query.careers;

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

  return { contact, data, detail_posts, detail };
};

export default CareersD;
