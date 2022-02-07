import React from "react";
import SideMenuWithChilds from "../side-menu";
import TopMenu from "../top-menu";
import { getLangParam, __ } from "../../../utils";
import { generateLink } from "../../../config";

const SideDrawer = ({ botMenu, topMenu, onClose }) => {
  const currentLang = getLangParam();

  return (
    <nav className="side-drawer" data-aos="fade-left">
      <div className="sideDrawerLanguage">
        <a
          className={`mr-1 ${
            currentLang === "en" ? "font-bold text-menuTextColor" : ""
          }`}
          href="?lang="
        >
          {__("English")}
        </a>
        <span> - </span>
        <a
          className={`ml-1 ${
            currentLang === "mn" ? "font-bold text-menuTextColor" : ""
          }`}
          href="?lang=mn"
        >
          {__("Mongolian")}
        </a>
      </div>
      <SideMenuWithChilds menu={botMenu} close={onClose} />
      <TopMenu topMenu={topMenu} />
    </nav>
  );
};
export default SideDrawer;
