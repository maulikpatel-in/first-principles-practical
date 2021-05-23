import React from 'react';

import PriceCard from '../Components/PriceCard';
import pricingArr from '../data/pricing.json';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Our Pricing</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website that doesn’t get results. Happiness
                guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {pricingArr.map((price) => {
            console.log(price);
            return <PriceCard key={price.name} data={price} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
