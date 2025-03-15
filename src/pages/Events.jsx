import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import EventForm from "../components/EventForm";
import EventCard from "../components/EventCard";
import { setEvents, addEvent } from "../redux/eventSlice";

const EventsPage = () => {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    if (storedEvents.length > 0) {
      dispatch(setEvents(storedEvents)); 
    }
  }, [dispatch]);

  
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "All" || event.category === selectedCategory)
  );

  return (
    <div className="bg-gradient-to-r from-[#FAF3E0] to-[#E5C9A8] min-h-screen flex flex-col items-center">
      <Navbar />
      <h1 className="text-5xl font-bold text-[#3D2C2A] mt-20 mb-8 text-center">Upcoming Events</h1>

      
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="px-4 py-2 border rounded-md w-80 text-[#3D2C2A]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-md text-[#3D2C2A]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      
      <div className="text-center mb-6">
        <button
          className="px-6 py-3 bg-[#7A4B2B] text-white rounded-md text-lg font-semibold hover:bg-[#5C3A1F] transition"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Event"}
        </button>
      </div>

      
      {showForm && <EventForm addEvent={(newEvent) => dispatch(addEvent(newEvent))} />}

      
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => <EventCard key={event.id} {...event} />)
        ) : (
          <p className="text-center text-xl text-[#3D2C2A]">No matching events found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default EventsPage;

