import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        Copyright @2020 - {new Date().getFullYear()}
      </div>
      <div className="footer__adress">www.fornitegames.com</div>
    </footer>
  );
};
export { Footer };
