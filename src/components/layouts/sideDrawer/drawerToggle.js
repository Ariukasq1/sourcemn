import { MenuOutlined } from "@ant-design/icons";
import React from "react";

const DrawerToggle = ({ click }) => {
  return (
    <div className="burger" onClick={click}>
      <MenuOutlined />
    </div>
  );
};
export default DrawerToggle;
