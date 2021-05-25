import React from 'react';

const TestimonialCard = ({ data }) => {
  const { Photo, Name, Post, Testimonial_Description } = data;

  return (
    <div className="col-lg-4">
      <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
          <img src={Photo} alt="Author" />
        </div>
        <div className="testimonial-content">
          <p className="text">{Testimonial_Description}</p>
          <h6 className="author-name">{Name}</h6>
          <span className="sub-title">{Post}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.defaultProps = {
  data: {
    Photo: '',
    Name: 'Name',
    Post: 'D',
    Testimonial_Description: 'Message',
  },
};

export default TestimonialCard;
