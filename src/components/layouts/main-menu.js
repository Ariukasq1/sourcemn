import React from "react";
import Link from "next/link";
import DrawerToggle from "./sideDrawer/drawerToggle";
import { generateLink } from "../../config";

const MainMenu = ({ menu, handler }) => {
  return (
    <div className="botMenu">
      <div className="botMenuList">
        {menu.items.map((item, ind) => {
          return (
            <Link key={ind} href={generateLink(`/${item.slug}`)}>
              <a>{item.title}</a>
            </Link>
          );
        })}
      </div>
      <DrawerToggle click={handler} />
    </div>
  );
};

export default MainMenu;
