import React from "react";
import Link from "next/link";
import { generateLink } from "../../config";
import { CloseOutlined } from "@ant-design/icons";

const SideMenuWithChilds = ({ menu, close }) => {
  return (
    <div className="SideMenu">
      {menu.items.map((item, ind) => {
        return (
          <div className="SideMenuList">
            <Link key={ind} href={generateLink(`/${item.slug}`)}>
              <a className="titleMenu">
                <b>{item.title}</b>
              </a>
            </Link>
            {item.child_items &&
              item.child_items.map((child, ind) => {
                return (
                  <Link
                    key={ind}
                    href={generateLink(`/${item.slug}/${child.slug}`)}
                  >
                    <a>{child.title}</a>
                  </Link>
                );
              })}
          </div>
        );
      })}

      <CloseOutlined className="closeButton" onClick={close} />
    </div>
  );
};

export default SideMenuWithChilds;
