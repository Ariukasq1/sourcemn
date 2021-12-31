import React from "react";
import Link from "next/link";

class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { topMenu } = this.props;
    return (
      <div className="topMenu">
        <div className="topMenuList">
          {topMenu.items.map((item, ind) => {
            return (
              <Link key={ind} href={`/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopMenu;
