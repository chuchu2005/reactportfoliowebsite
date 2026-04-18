import { React, useEffect } from "react";
import "../experience/Experience.scss";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const experiences = [
    {
      id: 1,
      role: "CEO & Founder",
      company: "Learnrithm AI",
      period: "Aug 2024 — Present",
      description:
        "I run a company that uses AI to help students learn better. I built the product from scratch, got lots of users, and raised money from two big Venture Capital firms: Supercharger Ventures and Plug-in Ventures.",
      current: true,
    },
    {
      id: 2,
      role: "Chief Technology Officer (CTO)",
      company: "App To Match",
      period: "Sept 2021 — Oct 2025",
      description:
        "As the tech boss, I managed a team of developers and made the big choices on how to build software for our clients. I made sure we delivered fast, high-quality websites and MVPs for startups.",
      current: false,
    },
    {
      id: 3,
      role: "Senior Software Engineer",
      company: "App To Match",
      period: "Aug 2019 — Sept 2021",
      description:
        "I built complete websites and startup MVPs for different clients using React, Next.js, and Node.js. I worked really fast to finish projects on time, and I helped teach the newer developers on the team how to write better code.",
      current: false,
    },
    {
      id: 4,
      role: "Senior Software Engineer",
      company: "Rofako Industries",
      period: "Aug 2017 — Aug 2019",
      description:
        "I built websites and tools that the whole company used every day. I made our code much better, added ways to test it automatically, and stopped errors from happening when we updated the app.",
      current: false,
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__header">
        <h1>Work Experience</h1>
        <h2>8+ years of shipping products that matter</h2>
      </div>

      <div className="experience__timeline">
        {experiences.map((exp) => {
          return (
            <div
              className={`experience__card ${exp.current ? "experience__card--current" : ""}`}
              key={exp.id}
              data-aos="fade-up"
            >
              <div className="experience__card__indicator">
                <div className="experience__card__dot"></div>
                <div className="experience__card__line"></div>
              </div>

              <div className="experience__card__content">
                <div className="experience__card__top">
                  <h3>{exp.role}</h3>
                  <span className="experience__card__period">{exp.period}</span>
                </div>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
