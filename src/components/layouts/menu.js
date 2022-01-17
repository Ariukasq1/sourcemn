import React from "react";
import TopMenu from "./top-menu";
import MainMenu from "./main-menu";
import SideDrawer from "./sideDrawer/sideDrawer";
import Backdrop from "./sideDrawer/backDrop";
import Link from "next/link";

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickOn = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { mainMenu, topMenu } = this.props;

    if (
      !topMenu.items ||
      topMenu.items.length === 0 ||
      !mainMenu.items ||
      mainMenu.items.length === 0
    ) {
      return null;
    }

    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = (
        <SideDrawer
          botMenu={mainMenu}
          topMenu={topMenu}
          onClose={this.backdropClickHandler}
        />
      );
      backdrop = <Backdrop onClose={this.backdropClickHandler} />;
    }

    return (
      <div className="main-header">
        <Link href={"/"}>
          <img className="logo" src="/images/mms-logo.png" />
        </Link>
        <div className="menus">
          <TopMenu topMenu={topMenu} />
          <MainMenu menu={mainMenu} handler={this.drawerToggleClickOn} />
        </div>
        {sideDrawer}
        {backdrop}
      </div>
    );
  }
}

export default MenuComponent;
