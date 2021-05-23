import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ScrollButton from './Components/ScrollButton';

import Services from './Pages/Services';
import Pricing from './Pages/Pricing';
import CallAction from './Pages/CallAction';
import Testimonial from './Pages/Testimonial';
import Clients from './Pages/Clients';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />

      {/**
       * Service Part Start
       */}
      <Services />
      {/**
       * Service Part End
       */}

      {/**
       * Price Part Start
       */}
      <Pricing />
      {/**
       * Price Part End
       */}

      {/**
       * Call to Action Section Start
       */}
      <CallAction />
      {/**
       * Call to Action Section End
       */}

      {/**
       * Testimonial Section Start
       */}

      <Testimonial />
      <Clients />

      {/**
       * Testimonial Section End
       */}

      {/* <!--====== CONTACT PART START ======--> */}
      <ContactUs />
      {/* <!--====== CONTACT PART ENDS ======--> */}

      {/* <!--====== FOOTER PART START ======--> */}
      <Footer />
      {/* <!--====== FOOTER PART ENDS ======--> */}

      {/* <!--====== BACK TO TOP PART START ======--> */}
      <ScrollButton />

      {/* <!--====== BACK TO TOP PART ENDS ======--> */}
    </div>
  );
}

export default App;
