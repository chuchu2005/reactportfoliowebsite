import { React, useEffect } from "react";
import "../achievements/Achievements.scss";
import { FaTrophy, FaAward, FaRocket, FaUsers, FaMedal, FaGoogle } from "react-icons/fa";
import Aos from "aos";

const Achievements = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const achievements = [
    {
      id: 1,
      icon: <FaAward />,
      title: "Member of Forbes BLK",
      description: "Chosen to be part of Forbes BLK, a special group for top Black professionals in business and tech.",
    },
    {
      id: 2,
      icon: <FaTrophy />,
      title: "5x Best Programmer of the Year",
      description: "Won the Best Programmer award 5 times at Nnamdi Azikiwe University. No one else has done this!",
    },
    {
      id: 3,
      icon: <FaMedal />,
      title: "Foya Africa Techpreneur of the Year Finalist",
      description: "Picked as a finalist in one of Africa's biggest tech startup awards out of thousands of people.",
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "2x Best Programmer of the Year (GDSC)",
      description: "Won Best Programmer twice at the Google Student Developer Club awards, beating hundreds of students.",
    },
    {
      id: 5,
      icon: <FaTrophy />,
      title: "5x Hackathon Winner",
      description: "Won 5 different coding competitions (hackathons) by building awesome apps in fast 48-hour races.",
    },
    {
      id: 6,
      icon: <FaGoogle />,
      title: "Google Student Campus Ambassador 2024/2025",
      description: "Chosen by Google to be the leader for student developers at my university.",
    },
    {
      id: 7,
      icon: <FaRocket />,
      title: "Learnrithm AI — Venture Capital Backed Startup",
      description:
        "My startup got funding from two top Venture Capital firms: Supercharger Ventures and Plug-in Ventures.",
    },
    {
      id: 8,
      icon: <FaUsers />,
      title: "President, National Association of Statistics Students",
      description: "Voted to lead the national student group, planning big events and helping students all over the country.",
    },
    {
      id: 9,
      icon: <FaUsers />,
      title: "SUG Director of ICT",
      description:
        "Chosen to manage all the tech and computers for the Student Union, helping over 30,000 students.",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements__header">
        <h1>Achievements</h1>
        <h2>Milestones that speak for themselves</h2>
      </div>

      <div className="achievements__grid">
        {achievements.map((item) => {
          return (
            <div className="achievement" key={item.id} data-aos="fade-up">
              <div className="achievement__icon">{item.icon}</div>
              <div className="achievement__text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
