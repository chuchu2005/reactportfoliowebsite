import React from "react";
import "../footer/Footer.scss";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { GiSupersonicArrow } from "react-icons/gi";
import footerImage from "../../images/bitmoji-8.png";
import scrollToTop from "../../icons/scroll-to-top.svg";

const Footer = () => {
  const copyright = new Date().getFullYear();
  copyright.toLocaleString();

  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://x.com/_peterokafor"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://instagram.com/_peterokafor"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/peterokafor/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill />
        </a>
      </div>

      <a
        className="footer__stt"
        href="/#"
        rel="noreferrer"
      >
        <img src={scrollToTop} alt="scroll to top"></img>
        <GiSupersonicArrow />
      </a>

      <div className="footer__farewell">
        <img src={footerImage} alt="farewell"></img>
        <div className="quote">Au revoir!</div>
      </div>

      <p>Copyright © Peter Okafor, {copyright}.</p>
    </footer>
  );
};

export default Footer;
