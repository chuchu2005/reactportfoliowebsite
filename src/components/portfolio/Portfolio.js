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
      title: "App To Match: A tech company that builds high-quality websites and fast MVPs for new startups and clients.",
      onLinkClick: "View live website",
    },
       {
      id: 6,
      link: "https://learnrithm.com",
      title: "Learnrithm AI: An advanced AI tool that helps students learn better, featuring an AI teacher and exam preparer.",
      onLinkClick: "View live website",
    },
    {
      id: 7,
      link: "https://apps.apple.com/ng/app/blood-pressure-level-checker/id6462374701",
      title: "Blood Pressure Level Checker: A mobile app built to securely track health data using React Native and Express.js.",
      onLinkClick: "View on App Store",
    },
    {
      id: 8,
      link: "https://apps.apple.com/ng/app/syncspace/id408672838",
      title: "SyncSpace: A powerful iOS application bringing smooth, real-time collaboration tools directly to mobile users.",
      onLinkClick: "View on App Store",
    },
    {
      id: 9,
      link: "https://www.kickresume.com/en/resume-checker/",
      title: "Kickresume AI Checker: A smart resume checking tool powered by AI to help professionals craft the perfect CV.",
      onLinkClick: "View live website",
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <h1>My Portfolio</h1>
        <h2>Real products, real users, real impact</h2>
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
