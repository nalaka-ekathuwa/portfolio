import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="section services" id="services">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">What I have done so far</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Supplier Registration system</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right servicess__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Supplier Registration System
              </h3>
              <p className="services__modal-description">
                Design, developed and deployed Supplier management system for
                Ministry of Defense, Sri Lanka
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    An application which can manage suppliers, agents and
                    categories
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    CRUD modules for each modules, Annual supplier
                    registrations, mail handling, user management and report
                    generation.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Designed and developed with Laravel, php
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Developed Api for SL Army to intergrate SL Army procurement
                    system with MOD system
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Reservation Management System</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Retired Officers Holiday Home Booking Management System
              </h3>
              <p className="services__modal-description">
                Created a booking management system and a booking calendar to
                automate retired officers holiday home reservations in Sri Lanka
                Air Force.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Design and developed with php, HTML, CSS, Bootstrap,
                    Javascript, jquery
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Automate reservation process
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Search and view available bookings
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Frontend and backend validations
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Pilot Instrument Rating System</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Pilot Instrument Rating Management System
              </h3>
              <p className="services__modal-description">
                Developed a comprehensive system to automate the Instrument
                Rating (IR) process for pilots, streamlining both administrative
                and medical procedures.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Mobile Web View: <br></br>Designed for individual pilots to
                    manage their requests, personal information, and receive
                    real-time notifications. The interface is optimized for
                    mobile devices, ensuring easy access on the go.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Web Application (Admin Panel): <br></br>Built for hospital
                    and administrative staff to manage IRT medical evaluations,
                    pilot profiles, aircraft records, and generate detailed
                    analysis reports. This module improves efficiency, reduces
                    manual paperwork, and enhances data accuracy across the
                    process.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">NACWC Admin Panel</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                National Authority for Implementation of the Chemical Weapons
                Conventions in Sri Lanka
              </h3>
              <p className="services__modal-description">
                Created an admin panel for National Authority for Implementation
                of the Chemical Weapons Conventions in Sri Lanka website
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">User Management</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Manage news, trainings, chemical directory and services in
                    website
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">User training</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">ERP system</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(5)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                ERP system for Discovery International (Pvt) Ltd
              </h3>
              <p className="services__modal-description">
                Redeveloped the ERP system which had few documentatios to new
                requirements
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Fixed bugs and issues existed
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Developed new features and streamline process
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Developed with minimum documentation of system and framework
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    User training and user manual
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Multi Vendor Store</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(6)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Multivendor Platform for Value Ceylon
              </h3>
              <p className="services__modal-description">
                Deploy and Modify the multivendor e-commerce store for Value
                Ceylon
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">Server Maintenance</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Modifications and developments
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Laravel, php, css and Javascript
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Fire Equipment Management System</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(7)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 7
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Brandschutzausrüstungs management system
              </h3>
              <p className="services__modal-description">
                Fire safety equipment management system for Brandschutz-Brombacher
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">Server Maintenance</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Modifications and developments
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Laravel, php, css and Javascript
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Official website Monikulttuuriset Yrittäjät Ry</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(8)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 8
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Monikulttuuriset Yrittäjät Ry
              </h3>
              <p className="services__modal-description">
                Designed and developed the official website for Monikulttuuriset Yrittäjät Ry
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">Designed and developed the official website for Monikulttuuriset Yrittäjät Ry a multicultural entrepreneurs' association (NGO) in Finland under the guidance of TE Office, Finland.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                    Delivered the complete source files and provided handover documentation to ensure smooth transition and maintenance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Developed Websites</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(9)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 9
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Developed Websites
              </h3>
              <p className="services__modal-description">
                Designed and developed websites
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">https://www.mclarenslogistics.lk/</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://containerconversions.lk/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://specialisedshipping.lk/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://ioc.lk/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://mclarenstrading.lk/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://www.multimodal.lk/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://lalanthread.com/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://www.muttihomes.ca/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://innotech.lk/
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="service__modal-info">
                   https://www.eqsconsultants.com/
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
