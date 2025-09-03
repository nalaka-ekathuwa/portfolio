import React, { useState } from 'react';
import './testimonials.css';
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="testimonial container section" id='testimonials'>
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What clients said about my work</span>

      <Swiper
        className="testimonial__contianer"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          const isExpanded = expanded[id];
          const shortText =
            description.length > 180
              ? description.substring(0, 180) + "..."
              : description;

          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className='testimonial__img' />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">
                {isExpanded ? description : shortText}
              </p>
              {description.length > 50 && (
                <button
                  className="testimonial__toggle"
                  onClick={() => toggleExpand(id)}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;