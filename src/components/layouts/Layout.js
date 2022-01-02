import React from "react";
import Header from "./header";
import Menu from "./menu";

class Layout extends React.Component {
  render() {
    const { children, title, image, mainMenu, topMenu } = this.props;

    return (
      <>
        <Header title={title} image={image} />
        <main className="relative">
          <Menu mainMenu={mainMenu} topMenu={topMenu} />
          {children}
        </main>
      </>
    );
  }
}

export default Layout;
