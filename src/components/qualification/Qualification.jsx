import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualificatio section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase qualification__icon"></i>
            {""}Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IET</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BIT</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Electronic & Telecom</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>
            </div>
          </div>
          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Electronic & Telecom</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Electronic & Telecom</h3>
                <span className="qualification__subtitle">
                  insitiute of IET
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
