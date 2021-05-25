import React, { useEffect, useState } from 'react';

import TestimonialCard from '../Components/TestimonialCard';
import testimonialArr from '../data/testimonial.json';
import { getTestimonialAPI } from '../config/dataServices/testimonial';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [pageInfo, setPageInfo] = useState({ first: 10, offset: 0 });

  const fetchAllPosts = async () => {
    let { data } = await getTestimonialAPI();
    console.log('TestimonialRes ==> ', data);
    setTestimonials(data.data);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

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
              {testimonials.map((item) => {
                console.log('item => ', item);
                return <TestimonialCard key={item._id} data={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
