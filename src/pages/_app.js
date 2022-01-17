import React from "react";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import "slick-carousel/slick/slick.css";
import Router from "next/router";
import NProgress from "nprogress";
import AOS from "aos";
import "aos/dist/aos.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);

  return (
    <div className="next">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
