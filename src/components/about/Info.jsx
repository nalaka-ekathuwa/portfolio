import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="uil uil-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
                6+ year in industry
            </span>
        </div>
        <div className="about__box">
            <i className="uil uil-programming-language about__icon"></i>
            <h3 className="about__title">Stack</h3>
            <span className="about__subtitle">
                5+ languages 
            </span>
        </div>
        <div className="about__box">
            <i className="uil uil-feedback about__icon"></i>
            <h3 className="about__title">Rating</h3>
            <span className="about__subtitle">
                Client satisfaction
            </span>
        </div>
    </div>
  )
}

export default Info