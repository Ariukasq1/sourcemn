import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import FirstPart from "../components/indCap/firstPart";

const Capabilities = ({ data }) => {
  return (
    <div className="page">
      <FirstPart data={data} clas="capabilities" />
    </div>
  );
};

export async function getStaticProps() {
  const wp = new WPAPI({ endpoint: config.apiUrl });

  const catId = await wp
    .categories()
    .slug(`capabilities`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return { props: { data } };
}

export default Capabilities;
