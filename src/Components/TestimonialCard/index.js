import React from 'react';

const TestimonialCard = ({ data }) => {
  const { authorImage, authorName, authorDesignation, message } = data;

  return (
    <div className="col-lg-4">
      <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
          <img src={authorImage} alt="Author" />
        </div>
        <div className="testimonial-content">
          <p className="text">{message}</p>
          <h6 className="author-name">{authorName}</h6>
          <span className="sub-title">{authorDesignation}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.defaultProps = {
  data: {
    authorImage: '',
    authorName: 'Name',
    authorDesignation: 'D',
    message: 'Message',
  },
};

export default TestimonialCard;
