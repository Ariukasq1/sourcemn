import React from "react";
import WPAPI from "wpapi";
import config from "../config";
import FirstPart from "../components/indCap/firstPart";

const Industries = ({ data }) => {
  return (
    <div className="page">
      <FirstPart data={data} clas="industries" />
    </div>
  );
};

Industries.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const catId = await wp
    .categories()
    .slug(`industries`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .embed();

  return { data };
};

export default Industries;
