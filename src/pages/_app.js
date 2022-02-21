import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import config, { fetcher } from "../config";
import AOS from "aos";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps, mainMenu, topMenu }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = () => NProgress.start() && setLoading(true);

    // handleComplete event was not firing
    const handleComplete = () => NProgress.done() && setLoading(false);

    AOS.init({ duration: 800 });
    AOS.init({ disable: "mobile" });
    AOS.refresh();

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="next">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const mainMenu = await fetcher(`${config.menuUrl}/nav-menu`);
  const topMenu = await fetcher(`${config.menuUrl}/nav-menu-top`);

  return {
    mainMenu,
    topMenu,
  };
};

export default MyApp;
