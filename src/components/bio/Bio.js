import { React, useState, useEffect } from "react";
import "../bio/Bio.scss";
import github from "../../icons/github.png";
import excellencePerk from "../../icons/excellence.png";
import speedPerk from "../../icons/speed.png";
import qualityPerk from "../../icons/quality.png";
import teamPlayPerk from "../../icons/team.png";
import resumeFile from "../../files/PETER OKAFOR CV.pdf";
import { MdOutlineQrCode2 } from "react-icons/md";
import Aos from "aos";

/* import QrCode Modal */
import QrCode from "../qrCode/QrCode";

const Bio = () => {
  const [qrCode, setQrCode] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <section id="bio" className="bio">
      <article className="bio__header">
        <div className="bio__header__details">
          <div
            className="bio__header__details__image"
            data-aos="fade-right"
            data-aos-once="true"
          ></div>
          <a
            href="https://www.linkedin.com/in/peterokafor/"
            rel="noreferrer"
            target="_blank"
          >
            View my Linkedin Profile
            <img src={github} alt="github"></img>
          </a>
        </div>

        <ul className="bio__header__perks">
          <li
            className="perks__details"
            data-aos="fade-right"
            data-aos-delay="1200"
          >
            <div>
              <img src={excellencePerk} alt="excellence"></img>
            </div>
            <div>#Excellence</div>
          </li>

          <li
            className="perks__details"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <div>
              <img src={speedPerk} alt="excellence"></img>
            </div>
            <div>#Speed</div>
          </li>

          <li
            className="perks__details"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div>
              <img src={qualityPerk} alt="excellence"></img>
            </div>
            <div>#Quality</div>
          </li>

          <li
            className="perks__details"
            data-aos="fade-right"
          >
            <div>
              <img src={teamPlayPerk} alt="excellence"></img>
            </div>
            <div>#Team Player</div>
          </li>
        </ul>

        <div className="bio__header__text">
          <h1
            data-aos="fade-up"
            data-aos-once="true"
          >
            “I don't just write <span className="fade">code</span> — I build {" "}
            <span className="fade">apps </span> that people love to use, {" "}
            <span className="fade">startups </span> that get funded, and {" "}
            <span className="fade">projects </span> that win awards.”
          </h1>
          <p>
            Peter Okafor &emsp;
            <span className="fade small">Full-Stack Engineer &bull; Startup Founder &bull; Forbes BLK</span>
          </p>
        </div>
      </article>

      <article className="bio__text">
        <h1>My Bio</h1>

        <ul>
          <li
            data-aos="fade-up"
          >
            I am a Full-Stack Engineer with <span className="fade">over 8 years of experience</span> building
            websites and mobile apps for iOS and Android using{" "}
            <span className="fade">React, Next.js, and Node.js</span>.
          </li>
          <li
            data-aos="fade-up"
          >
            I was the <span className="fade">CTO at App To Match</span>, where I led the tech team and
            built apps that thousands of people use every single day.
          </li>
          <li
            data-aos="fade-up"
          >
            I am the <span className="fade">CEO and Founder of Learnrithm AI</span> &mdash; a
            startup backed by <span className="fade">Supercharger Ventures and Plug-in Ventures</span>.
            We build AI tools to help students learn better.
          </li>
          <li
            data-aos="fade-up"
          >
            I am a <span className="fade">Forbes BLK member</span>, a 5-time Best Programmer of the Year,
            a Google Campus Ambassador, and a <span className="fade">5-time Hackathon Winner</span>.
            I know how to solve hard problems fast.
          </li>
          <li
            data-aos="fade-up"
          >
            I know how to build a whole project from start to finish &mdash; covering{" "}
            <span className="fade">TypeScript, Tailwind CSS, databases like MongoDB</span>, and putting the
            final app on the web, Apple App Store, and Google Play Store.
          </li>
        </ul>
      </article>

      <article className="bio__file">
        <p>Download my CV here</p>

        <div className="bio__file__details">
          <a href={resumeFile} rel="noreferrer" download>
            CV (PDF)
          </a>
          <button onClick={() => setQrCode(true)}>
            SCAN CODE
            <MdOutlineQrCode2 />
          </button>
        </div>
      </article>

      {qrCode && <QrCode closeQrCode={setQrCode} />}
    </section>
  );
};

export default Bio;
