import React from "react";
import logo from "../../assets/logo.png";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className=" flex items-center justify-center m-8">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <div className="flex items-center mb-6">
          <img src={logo} alt="EventHub Logo" className="w-12 h-12 mr-4" />
          <h1 className="welcome text-5xl font-semibold">
            Create your Event with Eventhub
          </h1>
        </div>

        <p className="font-medium text-lg text-gray-500 mt-4">
          Please enter your event details.
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mt-6">
            <label className="text-lg font-medium" htmlFor="event_title">
              Event Title
            </label>
            <input
              type="text"
              id="event_title"
              name="event_title"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Enter Event Title"
              required
            />
          </div>

          <div className="mt-6">
            <label className="text-lg font-medium" htmlFor="event_description">
              Event Description
            </label>
            <textarea
              id="event_description"
              name="event_description"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Enter Event Description"
              rows="4"
              required
            />
          </div>

          <div className="mt-6">
            <label
              className="text-lg font-medium"
              htmlFor="organizing_committee"
            >
              Organizing Committee
            </label>
            <input
              type="text"
              id="organizing_committee"
              name="organizing_committee"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Enter Organizing Committee"
              required
            />
          </div>

          <div className="mt-6">
            <label className="text-lg font-medium" htmlFor="event_type">
              Event Type
            </label>
            <input
              type="text"
              id="event_type"
              name="event_type"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Enter Event Type"
              required
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <label className="text-lg font-medium" htmlFor="start_date">
                Start Date
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                required
              />
            </div>
            <div>
              <label className="text-lg font-medium" htmlFor="end_date">
                End Date
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-lg font-medium" htmlFor="requirements">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Enter Event Requirements (e.g., Venue, Financial Support)"
              rows="4"
              required
            />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="Signin active:scale-[.98] hover:scale-[1.01] active:duration-75 transition-all ease-in-out py-3 px-8 rounded-xl text-lg"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
