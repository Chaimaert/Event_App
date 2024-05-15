import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navigation/Navbar";
import Services from "../../Components/Services/services";
import pic4 from "../../assets/pic4.jpg";
import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 bg-neutralSilver">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
            <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                  Lessons & Insights <span className="text-brandPrimary">from 10 years</span>
                </h1>
                <p className="event text-neutralGrey mb-8">
                  Where Events Come to Life with Precision
                </p>
                <Link to="/home/events">
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neneutralDGrey transition-all duration-300 hover:translate-x-4">
                  Request
                </button>
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img src={pic4} alt="Lesson" className="mt-20 w-full md:w-64 lg:w-80 h-auto rounded-lg" />
              </div>
            </div>
        </div>
      </div>
      <Services/>
      <About/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default HomePage;
