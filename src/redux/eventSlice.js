import { createSlice } from "@reduxjs/toolkit";


const defaultEvents = [
  { 
    id: 1, 
    title: "Community Prayer", 
    date: "2025-03-15", 
    category: "Religious", 
    location: "Church Hall", 
    image: "/church.jpeg" 
  },
  { 
    id: 2, 
    title: "Charity Fundraiser", 
    date: "2025-03-20", 
    category: "Charity", 
    location: "City Center", 
    image: "/fundraiser.jpeg" 
  },
  { 
    id: 3, 
    title: "Music Festival", 
    date: "2025-04-05", 
    category: "Social", 
    location: "Park Grounds", 
    image: "/music.jpeg" 
  }
];


const loadEventsFromLocalStorage = () => {
  try {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    return storedEvents && storedEvents.length > 0 ? storedEvents : defaultEvents;
  } catch (error) {
    console.error("Error loading events from localStorage:", error);
    return defaultEvents;
  }
};

const eventSlice = createSlice({
  name: "events",
  initialState: {
    events: loadEventsFromLocalStorage(),
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
      localStorage.setItem("events", JSON.stringify(state.events)); 
    },
    addEvent: (state, action) => {
      const newEvent = {
        id: Date.now(),
        ...action.payload,
        image: action.payload.image || "/default-event.jpg", 
      };
      state.events.push(newEvent);
      localStorage.setItem("events", JSON.stringify(state.events));
    },
  },
});

export const { addEvent, setEvents } = eventSlice.actions;
export default eventSlice.reducer;


