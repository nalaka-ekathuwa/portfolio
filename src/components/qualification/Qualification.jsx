import React from "react";

const Qualification = () => {
  return (
    <section className="qualificatio section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex qualification__active">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualificatio__data">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualificatio__title">Web Design</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2012 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
