import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer_container">
      <p className="footer_styles">© {currentYear} &nbsp;Praveen Chamod</p>
    </div>
  );
};

export default Footer;
