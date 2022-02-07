import React from "react";
import Layout from "../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../config";
import AboutUs from "../components/about/aboutUs";
import Service from "../components/about/aboutService";
import TimeLine from "../components/about/timeline";
import Footer from "../components/layouts/footer";

const About = ({
  mainMenu,
  topMenu,
  service,
  serviceCats,
  data,
  contact,
  timeline,
}) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <AboutUs data={data[0]} />
        <Service serviceCats={serviceCats} services={service} />
        <TimeLine timeline={timeline} />
        <Footer contact={contact} />
      </div>
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

  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  const catId = await wp
    .categories()
    .slug(`about`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  const serviceCats = await wp
    .categories()
    .parent((childCats[0] || {}).id)
    .embed();

  const service = await wp
    .posts()
    .categories(serviceCats.map((service) => service.id))
    .embed();

  const history = await wp
    .categories()
    .slug(`timeline`)
    .embed()
    .then((data) => data[0]);

  const timeline = await wp
    .posts()
    .categories((history || {}).id)
    .embed();

  return {
    props: {
      mainMenu,
      topMenu,
      service,
      serviceCats,
      data,
      contact,
      timeline,
    },
  };
}

export default About;
