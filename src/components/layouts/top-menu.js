import React from "react";
import Link from "next/link";
import { getLangParam } from "../../utils";
import { generateLink } from "../../config";

class TopMenu extends React.Component {
  renderLang() {
    const currentLang = getLangParam();

    return (
      <div className="topMenuLanguage">
        <a
          className={`mr-1 ${
            currentLang === "en" ? "font-bold text-menuTextColor" : ""
          }`}
          href="?lang="
        >
          EN
        </a>
        <span>/</span>
        <a
          className={`ml-1 ${
            currentLang === "mn" ? "font-bold text-menuTextColor" : ""
          }`}
          href="?lang=mn"
        >
          MN
        </a>
      </div>
    );
  }

  render() {
    const { topMenu } = this.props;

    return (
      <div className="topMenu">
        <div className="topMenuList">
          {topMenu.items.map((item, ind) => {
            return (
              <Link key={ind} href={generateLink(`/${item.slug}`)}>
                <a>{item.title}</a>
              </Link>
            );
          })}
        </div>
        {this.renderLang()}
      </div>
    );
  }
}

export default TopMenu;
