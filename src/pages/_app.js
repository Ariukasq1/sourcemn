import React from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { getLang } from "../config";
import { setLocale } from "../utils";
import AOS from "aos";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "../public/styles/style.min.css";
import "../public/styles/fontawesome/css/all.min.css";

function MyApp({ Component, pageProps, lang }) {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);

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
    <div className="next">
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, lang: getLang(appContext.ctx) };
};

export default MyApp;
