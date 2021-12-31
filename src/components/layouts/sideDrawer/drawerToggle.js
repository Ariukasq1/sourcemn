import React from "react";

const DrawerToggle = ({ click }) => {
  return (
    <div className="burger" onClick={click}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
};
export default DrawerToggle;
