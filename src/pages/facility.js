import React from "react";
import Layout from "../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../config";

const Facility = ({ mainMenu, topMenu, data }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page"></div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  return { props: { mainMenu, topMenu } };
}

export default Facility;
