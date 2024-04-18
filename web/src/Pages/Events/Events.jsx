import React from 'react';
import Navbar from "../../Components/Navigation/Navbar";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import ev from "../../assets/ev.png";

const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${ev})` }}>
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex flex-col items-center justify-center">
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
        <div className="my-8">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;