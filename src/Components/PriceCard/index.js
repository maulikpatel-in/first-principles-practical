import React from 'react';

const PriceCard = ({ data }) => {
  const { name, price, duration, features, customCss, planImage } = data;

  const cardClass = customCss.cardClass ? `single-pricing mt-40 ${customCss.cardClass}` : `single-pricing mt-40`;

  const pricingHeader = customCss.textAlign ? `${customCss.textAlign} pricing-header` : 'pricing-header';

  const buttonShapeColor = customCss.buttonShapeColor ? customCss.buttonShapeColor : 'white';

  const imageClass = customCss.imageClass ? customCss.imageClass : '';

  return (
    <div className="col-lg-4 col-md-7 col-sm-9">
      <div className={cardClass}>
        {planImage ? (
          <div className={imageClass}>
            <img src={planImage} alt="flower" />
          </div>
        ) : (
          ''
        )}

        <div className={pricingHeader}>
          <h5 className="sub-title">{name}</h5>
          <span className="price">{price}</span>
          <p className="year">{duration}</p>
        </div>
        <div className="pricing-list">
          <ul>
            {features.map((line) => {
              return (
                <li key={line}>
                  <i className="lni-check-mark-circle" /> {line}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pricing-btn text-center">
          <a className="main-btn" href="#">
            GET STARTED
          </a>
        </div>
        <div className="buttom-shape">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35">
            <defs />
            <title>bottom-part1</title>
            <g id="bottom-part">
              <g id="Group_747" data-name="Group 747">
                <path
                  id="Path_294"
                  data-name="Path 294"
                  className="cls-1 "
                  style={{ fill: buttonShapeColor }}
                  d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_297"
                  data-name="Path 297"
                  className="cls-2 "
                  style={{ fill: buttonShapeColor }}
                  d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_296"
                  data-name="Path 296"
                  className="cls-3 "
                  style={{ fill: buttonShapeColor }}
                  d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_295"
                  data-name="Path 295"
                  className="cls-4 "
                  style={{ fill: buttonShapeColor }}
                  d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                  transform="translate(0 0)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
