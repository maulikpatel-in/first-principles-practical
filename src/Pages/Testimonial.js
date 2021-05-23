import React from 'react';

import TestimonialCard from '../Components/TestimonialCard';
import testimonialArr from '../data/testimonial.json';

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Testimonial</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website that doesn’t get results. Happiness
                guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row testimonial-active">
              {testimonialArr.map((item) => {
                console.log('item => ', item);
                return <TestimonialCard />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
