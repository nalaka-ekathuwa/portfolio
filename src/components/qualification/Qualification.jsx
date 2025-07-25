import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualificatio section" id="qualification">
      <h2 className="section__title">Pedagogy</h2>
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
            }
            onClick={() => toggleTab(2)}
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
                <h3 className="qualification__title">
                  Graphic Design - Basics
                </h3>
                <span className="qualification__subtitle">
                  ICET Computer Institute, Nugegoda, Sri Lanka
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> Apr - Aug (2012)
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
                <h3 className="qualification__title">
                  Essential soft skills for workplace success
                </h3>
                <span className="qualification__subtitle">
                  Open University of Sri Lanka
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> Feb - May (2012)
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Entrepreneurial skills development program
                </h3>
                <span className="qualification__subtitle">
                  University of Jayawardenapura, Sri Lanka
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2017
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
                <h3 className="qualification__title">
                  National Diploma in Engineering Sciences (Electrical
                  Electronic & Telecom)
                </h3>
                <span className="qualification__subtitle">
                  Institute of Engineering Technology, Katunayake, Sri Lanka
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2012 - 2017
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Information Technology
                </h3>
                <span className="qualification__subtitle">
                  University of Colombo, Sri Lanka
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2013 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intern</h3>
                <span className="qualification__subtitle">
                  Arthur C Clarke Institute of Modern Technology
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2015 - 2016
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
                <h3 className="qualification__title">Technical Executive</h3>
                <span className="qualification__subtitle">
                  Voice of Asia Network (Siyatha TV)
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2016 - 2017
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Officer</h3>
                <span className="qualification__subtitle">
                  Verbum Television Lanka (Guarantee) Limited
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2017 - 2018
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
                <h3 className="qualification__title">E-Commerce Web Developer</h3>
                <span className="qualification__subtitle">
                  SL Web Creations Pvt Ltd
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2018 - 2019
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Associate Software Engineer</h3>
                <span className="qualification__subtitle">
                  Senska Pvt Ltd
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2019 - 2020
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
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Sri Lanka Air Force
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 2021 - 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Work Try-out </h3>
                <span className="qualification__subtitle">
                  Monikultturiset yrittäjät Ry, Finland
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> May - June (2025)
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
