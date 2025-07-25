import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Nalaka</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualifications</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/nalaka_nd/" className="footer__social-link" target='_blank' >
                    <i className="bx bxl-instagram "></i>
                </a>
                <a href="https://www.facebook.com/nalaka.dinesh.54" className="footer__social-link" target='_blank' >
                    <i className="bx bxl-facebook-square "></i>
                </a>
                <a href="https://www.linkedin.com/in/nalakaruberu/" className="footer__social-link" target='_blank' >
                    <i className="bx bxl-linkedin-square "></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Nalaka Ruberu. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer