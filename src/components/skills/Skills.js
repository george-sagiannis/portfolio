import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

const SkillBar = ({ name, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div className="skill-bar" ref={progressBarRef}>
      <h3>{name}</h3>
      <div className="progress">
        <div
          className={`progress-bar ${isVisible ? "visible" : ""}`}
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        >
          {isVisible ? `${percentage}%` : ""}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-heading">
        <h2 className="skills-title">Skills</h2>
      </div>
      <div className="skills-wrapper">
        <div className="skills-column">
          <SkillBar name="HTML5" percentage={90} />
          <SkillBar name="JavaScript" percentage={80} />
          <SkillBar name="CSS3" percentage={90} />
          <SkillBar name="jQuery" percentage={85} />
          <SkillBar name="Bootstrap" percentage={80} />
        </div>
        <div className="skills-column">
          <SkillBar name="SASS" percentage={80} />
          <SkillBar name="Ajax" percentage={90} />
          <SkillBar name="GIT" percentage={80} />
          <SkillBar name="Wordpress" percentage={80} />
          <SkillBar name="Tailwind" percentage={60} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
