import React from 'react';

import Logo from '../Logo';

const Header = () => {
  return (
    <div>
      <header className="header-area">
        <div className="navgition navgition-transparent">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Logo className="navbar-brand" />
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarOne"
                    aria-controls="navbarOne"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item active">
                        <a className="page-scroll" href="#home">
                          HOME
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#service">
                          SERVICES
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#pricing">
                          PRICING
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#testimonial">
                          Testimonial
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#contact">
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar-social d-none d-sm-flex align-items-center">
                    <span>FOLLOW US</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-instagram-original" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div id="home" className="header-hero bg_cover" style={{ backgroundImage: 'url(assets/images/header-bg.jpg)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="header-content text-center">
                  <h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
                  <p className="text">
                    A simple, customizable, and, beautiful SaaS business focused landing page to make your project
                    closer to launch!
                  </p>
                  <ul className="header-btn">
                    <li>
                      <a className="main-btn btn-one" href="#">
                        GET IN TOUCH
                      </a>
                    </li>
                    <li>
                      <a className="main-btn btn-two video-popup" href="https://www.youtube.com/watch?v=r44RKWyfcFw">
                        WATCH THE VIDEO <i className="lni-play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-shape">
            <img src="assets/images/header-shape.svg" alt="shape" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
