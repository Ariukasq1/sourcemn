import T from "i18n-react";
import queryString from "query-string";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export const SampleNextArrow = (props) => {
  const { onClick } = props;
  return <RightOutlined onClick={onClick} className="next-arrow" />;
};

export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return <LeftOutlined onClick={onClick} className="prev-arrow" />;
};

export const setLocale = (currentLanguage, callback) => {
  import(`./locales/${currentLanguage}.json`)
    .then((data) => {
      const translations = data.default;
      T.setTexts(translations);

      callback && callback();
    })
    .catch((e) => console.log(e)); // tslint:disable-line
};

export const getData = (object, type) => {
  switch (type) {
    case "categories":
      return object && object["wp:term"] && object["wp:term"][0]
        ? object["wp:term"][0]
        : [];
    case "tags":
      return object && object["wp:term"] && object["wp:term"][1]
        ? object["wp:term"][1]
        : [];
    case "author":
      return object && object["author"] && object["author"][0]
        ? object["author"][0]
        : null;
    case "image":
      return object &&
        object["wp:featuredmedia"] &&
        object["wp:featuredmedia"][0] &&
        object["wp:featuredmedia"][0].source_url
        ? object["wp:featuredmedia"][0].source_url
        : null;
    default:
      break;
  }
};

export const prefixer = (url) => {
  if (process.env.NODE_ENV !== "production") {
    return url;
  }

  return `/${url}`;
};

export const __ = (key, options) => {
  const translation = T.translate(key, options);

  if (!translation) {
    return "";
  }

  return translation.toString();
};

export const getLangParam = () =>
  typeof window !== "undefined" && window.location.href.indexOf("=mn") > -1
    ? "mn"
    : "en";

export const setParams = (router, query) => {
  if (typeof window !== "undefined") {
    const parsed = queryString.parse(location.search);
    Object.assign(parsed, query);
    const stringified = queryString.stringify(parsed);

    router.push(`${location.pathname}?${stringified}`);
  }
};

export const setUrl = (url) => {
  if (typeof window !== "undefined") {
    return (window.location.href = url);
  }

  return null;
};

export const getUrlPath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }

  return null;
};

export const regex = (content) => {
  if (!content) {
    return null;
  }

  return content.replace(/&amp;#8221;|&#8221;|&amp;#8220;|&#8220;/gi, '"');
};

export const DisplayArr = ["none"];
