import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import Footer from "../components/layouts/footer";

const Contact = ({ contact }) => {
  return (
    <div className="top relative foot">
      <Footer contact={contact} />
    </div>
  );
};

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: config.apiUrl });

  const contact = await wp
    .posts()
    .categories()
    .slug(`contact`)
    .embed()
    .then((data) => data[0]);

  return { props: { contact } };
}

export default Contact;
