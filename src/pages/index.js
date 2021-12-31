import React from "react";
import Layout from "../components/layouts/Layout";
import config, { fetcher } from "../config";
import WPAPI from "wpapi";
import Fullpage from "../components/FullPage";

const Index = ({ mainMenu, topMenu }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <Fullpage
        children={
          <div className="page home">
            <div className="section Slider">slider</div>
            <div className="section Capabilities">slider</div>
            <div className="section Industry">slider</div>
            <div className="section Brands">slider</div>
            <div className="section Footer">slider</div>
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

  return {
    mainMenu,
    topMenu,
  };
};

export default Index;
