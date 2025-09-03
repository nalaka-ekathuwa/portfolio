import React from "react";
import Counter from "./Counter"; 

const aboutData = [
  {
    icon: "uil-award",
    title: "+ years",
    value: 6,
    suffix: "Industry Experience",
  },
  {
    icon: "uil-programming-language",
    title: "+ Skills",
    value: 10,
    suffix: "Tech stack",
  },
  {
    icon: "uil-feedback",
    title: "+ Rating",
    value: 7,
    suffix: "satified clients",
  },
];

const Info = () => {
  return (
    <div className="about__info grid">
      {aboutData.map((item, index) => (
        <div className="about__box" key={index}>
          <i className={`uil ${item.icon} about__icon`}></i>
          <h3 className="about__title"> <Counter end={item.value} /> {item.title}</h3>
          <span className="about__subtitle">
            {item.suffix}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Info;
