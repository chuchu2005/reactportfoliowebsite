import React, { useEffect } from "react";
import "./Header.scss";
import "aos/dist/aos.css";
import profile from "../../images/bitmoji-1.png";
import greeting from "../../images/bitmoji-2.png";
import fire from "../../images/firegif.gif";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <header id="#" className="header">
      <div
        className="header__profile"
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-easing="ease"
      >
        <img src={profile} alt="profile"></img>

        <div className="greeting__text">
          <p>Hola !</p>
        </div>
      </div>

      <div className="header__text">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <span className="fade">Hi</span>, Meet Peter Okafor;
          <br />A Meta certified Front End Web Developer &nbsp;
          <span className="fade">&</span> Google Certified UI / UX Designer
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          Building designs centered around accessibility and inclusivity, and
          writing codes for developing User Interfaces that speaks the language
          of your Brand.
        </p>

        <div
          className="greeting"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <img src={greeting} alt="You've got a project?"></img>

          <div className="greeting__text">
            <p>
              You’ve got a project to work on?
              <br />
              let’s bring it to life !
            </p>
          </div>
        </div>

        <a
          className="header__text__button"
          href="mailto:peter@pearsoftwares.com"
        >
          <div className="fire">
            <img src={fire} alt="hot"></img>
          </div>

          <p>Let’s Talk</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
