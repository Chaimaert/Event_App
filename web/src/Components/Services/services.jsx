import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import membershipImage from "../../assets/membership.png";
import associationImage from "../../assets/association.png";
import clubsImage from "../../assets/clubs.png";

const services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: membershipImage,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: associationImage,
    },
    {
      id: 3,
      title: "Social Clubs & Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: clubsImage,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey  font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          We've been working with some Fortune 500+ clients
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
          <img src={icon5} alt="" />
          <img src={icon6} alt="" />
          <img src={icon7} alt="" />
        </div>
      </div>

      {/* Services Card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-brandPrimary  font-semibold mb-5">
          Organize your entire events in a single system{" "}
        </h2>
        <p className="text-neutralDGrey">Who is Nextcent suitable for ?</p>
      </div>
      {/* Cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 flex items-center justify-center h-full text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-700 transition-all duration-300"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey service_title">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default services;
