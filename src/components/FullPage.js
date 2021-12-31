import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = (props) => {
  const { children } = props;
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={() => children}
      responsiveWidth={992}
    />
  );
};

export default Fullpage;
