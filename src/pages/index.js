import React from "react";
import Layout from "../components/layouts/Layout";
import config, { fetcher } from "../config";
import WPAPI from "wpapi";
import Fullpage from "../components/FullPage";
import Footer from "../components/layouts/footer";
import HomeSlider from "../components/home/slider";
import HomeCapabilty from "../components/home/capability";
import HomeIndustries from "../components/home/industries";
import HomeBrands from "../components/home/brands";

const Index = ({
  mainMenu,
  topMenu,
  contact,
  sliders,
  capability,
  industries,
  brands,
  brandsCat,
}) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <Fullpage
        children={
          <div className="home">
            <div className="section Slider">
              <HomeSlider sliders={sliders} />
            </div>
            <div className="section Capabilities">
              <HomeCapabilty capability={capability} />
            </div>
            <div className="section Industry">
              <HomeIndustries data={industries} />
            </div>
            <div className="section Brands">
              <HomeBrands brandCats={brandsCat} brands={brands} />
            </div>
            <div className="section Footer">
              <Footer contact={contact} />
            </div>
          </div>
        }
      />
    </Layout>
  );
};

Index.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );
  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const contact = await wp
    .posts()
    .categories()
    .slug("contact")
    .embed()
    .then((data) => data[0]);

  const sliderCat = await wp
    .categories()
    .slug("slider")
    .embed()
    .then((data) => data[0]);

  const sliders = await wp.posts().categories(sliderCat.id).embed();

  const capCat = await wp
    .categories()
    .slug("capability-home")
    .embed()
    .then((data) => data[0]);

  const capability = await wp
    .posts()
    .categories(capCat.id)
    .embed()
    .then((data) => data[0]);

  const industriesCat = await wp
    .categories()
    .slug("industries")
    .embed()
    .then((data) => data[0]);

  const industries = await wp.posts().categories(industriesCat.id).embed();

  const brandsID = await wp
    .categories()
    .slug("brands")
    .embed()
    .then((data) => data[0]);

  const brands = await wp.posts().categories(brandsID.id).perPage(100).embed();
  const brandsCat = await wp.categories().parent(brandsID.id).embed();

  return {
    mainMenu,
    topMenu,
    contact,
    sliders,
    capability,
    industries,
    brandsCat,
    brands,
  };
};

export default Index;
