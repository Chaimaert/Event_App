import React from "react";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src="https://img.freepik.com/vecteurs-premium/illustration-concept-paiement-transfert_272368-70.jpg?w=740"
              alt=""
              className="mt-20 w-full md:w-64 lg:w-80 h-auto rounded-lg"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-brandPrimary font-semibold mb-4 mt-2 md:w-4/5">
              {" "}
              The unseen of spending three years at Eventhub
            </h2>
            <p className="md:w-3/5 text-sm text-neutralGrey mb-8 mt-8">
              Step into a realm of boundless imagination and innovation during
              your three-year odyssey at Eventhub. Discover a dynamic ecosystem
              where curiosity thrives, connections flourish, and dreams take
              flight. Over this transformative span, each day unveils a new
              chapter of growth and exploration.Embrace the unknown and rewrite the narrative of your
              future with us at Eventhub!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
