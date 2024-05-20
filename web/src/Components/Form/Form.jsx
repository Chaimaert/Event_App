import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Form = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [commite, setCommite] = useState("");
  const [types, setType] = useState("");
  const [start_date, setStartdate] = useState("");
  const [end_date, setEnddate] = useState("");
  const [besoin, setBesoin] = useState("");

  // Obtenir la date actuelle
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set("titre", titre);
    formData.set("description", description);
    formData.set("commite", commite);
    formData.set("types", types);
    formData.set("start_date", start_date);
    formData.set("end_date", end_date);
    formData.set("besoin", besoin);

    try {
      const response = await fetch('http://127.0.0.1:8000/dem/org/add/', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Traitez la réponse du backend ici
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
      // Gérez les erreurs ici
    }
  };

  return (
    <div className="flex items-center justify-center m-8">
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
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
              placeholder="Enter Event Description"
              rows="4"
              required
            />
          </div>

          <div className="mt-6">
            <label className="text-lg font-medium" htmlFor="organizing_committee">
              Organizing Committee
            </label>
            <input
              type="text"
              id="organizing_committee"
              name="organizing_committee"
              value={commite}
              onChange={(e) => setCommite(e.target.value)}
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
              value={types}
              onChange={(e) => setType(e.target.value)}
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
                value={start_date}
                onChange={(e) => setStartdate(e.target.value)}
                min={today} 
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
                value={end_date}
                onChange={(e) => setEnddate(e.target.value)}
                min={today} 
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
              value={besoin}
              onChange={(e) => setBesoin(e.target.value)}
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