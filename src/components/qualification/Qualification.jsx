import React, { useState } from "react";
import "./qualification.css";
import { educationData } from "./educationData";
import { experienceData } from "./experienceData";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const renderTimeline = (data) =>
    data.map((item, index) => (
      <div className="qualification__data" key={index}>
        {/* Left side content for even index */}
        {index % 2 === 0 ? (
          <>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calender">
                <i className="uil uil-calender"></i> {item.calendar}
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              {index !== data.length - 1 && <span className="qualification__line"></span>}
            </div>
            <div></div>
          </>
        ) : (
          /* Right side content for odd index */
          <>
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              {index !== data.length - 1 && <span className="qualification__line"></span>}
            </div>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calender">
                <i className="uil uil-calender"></i> {item.calendar}
              </div>
            </div>
          </>
        )}
      </div>
    ));

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Pedagogy</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase qualification__icon"></i> Experience
          </div>
        </div>

        {/* Content */}
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderTimeline(educationData)}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {renderTimeline(experienceData)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
