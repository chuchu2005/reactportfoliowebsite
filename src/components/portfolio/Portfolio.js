import { React, useEffect } from "react";
import "../portfolio/Portfolio.scss";
import { TiArrowSortedUp } from "react-icons/ti";
import Aos from "aos";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      id: 1,
      link: "http://ebryheemxpression.vercel.app",
      title: "EbryheemXpression",
      onLinkClick: "View live website",
    },
    {
      id: 2,
      link: "http://fylofile.netlify.app",
      title: "Fylo Landing Page",
      onLinkClick: "View live website",
    },
    {
      id: 3,
      link: "https://hawkit.ng",
      title: "A Money Making Website",
      onLinkClick: "View Design",
    },
    {
      id: 4,
      link: "https://treasurenft.netlify.app/",
      title: "Treasure NFT Landing Page",
      onLinkClick: "View live website",
    },
    {
      id: 5,
      link: "https://apptomatch.com",
      title: "A Business Website",
      onLinkClick: "View live website",
    },
       {
      id: 6,
      link: "https://learntihm.com",
      title: "Learnrithm AI Landing Page",
      onLinkClick: "View Design",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <h1>My Portfolio</h1>
        <h2>10+ projects in Design & Web Development</h2>
      </div>

      <div className="projects" data-aos="fade-up" data-aos-once="true">
        {projects.map((project) => {
          return (
            <a
              className="project"
              href={project.link}
              rel="noreferrer"
              target="_blank"
              key={project.id}
            >
              <h2>{project.id}</h2>

              <div className="project__link">
                <h2>{project.title}</h2>

                <div className="link__text">
                  <p>{project.onLinkClick}</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
