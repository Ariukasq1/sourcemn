import React from "react";
import SideMenuWithChilds from "../side-menu";
import TopMenu from "../top-menu";

const SideDrawer = ({ botMenu, topMenu, onClose }) => {
  return (
    <nav className="side-drawer" data-aos="fade-left">
      <SideMenuWithChilds menu={botMenu} close={onClose} />
      <TopMenu topMenu={topMenu} />
    </nav>
  );
};
export default SideDrawer;
