import React from "react";
import Layout from "../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../config";
import AboutUs from "../components/about/aboutUs";
import Service from "../components/about/aboutService";
import TimeLine from "../components/about/timeline";
import Footer from "../components/layouts/footer";

const About = ({ service, serviceCats, data, contact, timeline }) => {
  return (
    <div className="about">
      <div className="container">
        <AboutUs data={data[0]} />
        <Service serviceCats={serviceCats} services={service} />
      </div>
      <TimeLine timeline={timeline} />
      <Footer contact={contact} />
    </div>
  );
};

About.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

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
    service,
    serviceCats,
    data,
    contact,
    timeline,
  };
};

export default About;
