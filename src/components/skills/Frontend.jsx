import React from "react";

const skillsData = [
  [
    { name: "HTML", level: "Basic" },
    { name: "CSS", level: "Advanced" },
    { name: "figma", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
  ],
  [
    { name: "Ajax", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "jQuery", level: "Advanced" },
    { name: "TypeScript", level: "Basic" },
  ],
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        {skillsData.map((group, groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {group.map((skill, skillIndex) => (
              <div className="skills__data" key={skillIndex}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
