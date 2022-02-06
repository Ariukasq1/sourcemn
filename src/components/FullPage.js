import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = (props) => {
  const { children } = props;

  const onAnimation = (type) => {
    const animateElement = document.getElementsByClassName("aos-init");

    var i;
    for (i = 0; i < animateElement.length; i++) {
      type === "leave"
        ? animateElement[i].classList.remove("aos-animate")
        : animateElement[i].classList.add("aos-animate");
    }
  };

  const onLeave = (origin, destination, direction) => {
    onAnimation("leave");
  };

  const afterLoad = (origin, destination, direction) => {
    onAnimation("afterLoad");
  };

  const anchors = Array.from(
    { length: 10 },
    (_, index) => `section${index + 1}`
  );

  return (
    <ReactFullpage
      anchors={anchors}
      scrollingSpeed={1000}
      render={() => children}
      responsiveWidth={992}
      navigation
      navigationPosition="left"
      onLeave={onLeave.bind(this)}
      afterLoad={afterLoad.bind(this)}
      parallax={true}
      scrollOverflow={true}
    />
  );
};

export default Fullpage;
