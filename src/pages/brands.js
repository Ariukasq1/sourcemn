import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import HomeBrands from "../components/home/brands";

const Brands = ({ childCats, data }) => {
  return <HomeBrands brandCats={childCats} brands={data} />;
};

Brands.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const catId = await wp
    .categories()
    .slug(`brands`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  return { data, childCats };
};

export default Brands;
