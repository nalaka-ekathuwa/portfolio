import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/" rel="noopener noreferrer" className="home__social-icon" target='_blank' >
            <i className="uil uil-instagram-alt"></i>
        </a>
        <a href="https://dribbble.com/" rel="noopener noreferrer" className="home__social-icon" target='_blank' >
            <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/" rel="noopener noreferrer" className="home__social-icon" target='_blank' >
            <i className="uil uil-github"></i>
        </a>
    </div>
  )
}

export default Social