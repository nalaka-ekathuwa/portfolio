import React from "react";

const skillsData = [
  [
    { name: "python", level: "Basic" },
    { name: "Laravel", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "YII", level: "Intermediate" },
  ],
  [
    { name: "Git", level: "Intermediate" },
    { name: "sql", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "java", level: "Basic" },
  ],
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>

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

export default Backend;
