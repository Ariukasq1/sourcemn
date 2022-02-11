import React from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import config, { getLang, fetcher } from "../config";
import { setLocale } from "../utils";
import AOS from "aos";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps, lang, mainMenu, topMenu }) {
  const [loading, setLoading] = React.useState(false);
  const [isLangSetted, setLangState] = React.useState(false);

  if (!isLangSetted) {
    setLocale(lang || "en", () => {
      setLangState(true);
    });
  }

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

  if (!isLangSetted) {
    return null;
  }

  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="next">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const mainMenu = await fetcher(
    `${config(appContext.ctx).apiUrl}/menus/v1/menus/nav-menu`
  );
  const topMenu = await fetcher(
    `${config(appContext.ctx).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  return { ...appProps, mainMenu, topMenu, lang: getLang(appContext.ctx) };
};

export default MyApp;
