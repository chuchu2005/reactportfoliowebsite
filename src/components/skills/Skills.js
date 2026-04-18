import { React, useEffect } from "react";
import "../skills/Skills.scss";
import skillsProfile from "../../images/bitmoji-7.png";
import skillImage1 from "../../icons/ui design.png";
import skillImage2 from "../../icons/ux design.png";
import skillImage3 from "../../icons/graphic design.png";
import skillImage4 from "../../icons/web dev.png";
import skillImage5 from "../../icons/responsive web.png";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const skills = [
    {
      id: 1,
      title: "Web UI Design",
      image: skillImage1,
      info: `Creating designs that are centered around accessibility and inclusivity,
      by ensuring that UI and UX are designed to be user centered.`,
    },
    {
      id: 2,
      title: "User Experience Design",
      image: skillImage2,
      info: `Empathizing with users to define their problems and ideating the
      best possible solution, creating wireframes and final prototype
      for the development stage.`,
    },
    {
      id: 3,
      title: "Graphic Design",
      image: skillImage3,
      info: `Creating cutting-edge design to provide a rich and pixel perfect
      image format for the web or printing.`,
    },
    {
      id: 4,
      title: "Web Development",
      image: skillImage4,
      info: `Building scalable, interactive and reusable components for
      websites to extend its functionalities and provide better user
      satisfaction.`,
    },
    {
      id: 5,
      title: "Responsive Website",
      image: skillImage5,
      info: `Adding media queries for responsiveness - adaptable - on different devices
      for better user experience, using the mobile first approach for inclusivity and to
      ensure nothing breaks.`,
    },
    {
      id: 6,
      title: "Mobile App Development",
      image: skillImage4,
      info: `Building cross-platform iOS and Android applications with React Native
      and Expo, from development through App Store & Google Play deployment.`,
    },
    {
      id: 7,
      title: "Backend Development",
      image: skillImage4,
      info: `Designing and building scalable RESTful APIs with Node.js and Express.js,
      with database integration using MongoDB and PostgreSQL.`,
    },
    {
      id: 8,
      title: "Full-Stack Architecture",
      image: skillImage4,
      info: `Architecting end-to-end applications with Next.js, implementing SSR,
      API routes, authentication, and deployment on cloud platforms like Vercel and AWS.`,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <h1>My Special Skills</h1>
        <h2>Cool tools I use to build great apps</h2>
      </div>

      <img src={skillsProfile} alt="skills profile" data-aos="fade-in"></img>

      <div className="skills__container">
        {skills.map((skill) => {
          return (
            <div className="skill" key={skill.id}>
              <div className="skill__header">
                <img src={skill.image} alt="skill"></img>
              </div>

              <p>{skill.title}</p>

              <p>{skill.info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
