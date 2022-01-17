import React from "react";

const Backdrop = ({ onClose }) => {
  return (
    <div className="backdrop" onClick={onClose} data-aos="fade-right"></div>
  );
};
export default Backdrop;
