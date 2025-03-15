import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 md:px-16 bg-gradient-to-r from-[#FAF3E0] to-[#E5C9A8] mt-11 ">
      
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full py-16">
        
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1
            className="text-5xl font-bold text-[#3D2C2A]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Connecting People Across Faiths & Interests
          </motion.h1>

          <motion.p
            className="text-lg text-[#7A4B2B] max-w-md mt-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Join our community events to build meaningful connections and support
            causes that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/events"
              className="mt-6 inline-block px-6 py-3 bg-[#7A4B2B] text-white rounded-md text-lg font-semibold hover:bg-[#5C3A1F] transition"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>

        
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <motion.img
            src="/community_1579538918101.webp"
            alt="Community Gathering"
            className="rounded-2xl shadow-lg max-w-full"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              x: [0, -5, 5, -5, 5, 0],
              transition: { duration: 0.9, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </div>

      
      <div className="w-full text-center py-16 bg-[#EAD4B9] rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#3D2C2A]">How It Works</h2>
        <p className="text-lg text-[#7A4B2B] mt-4 max-w-2xl mx-auto">
          Discover events, join causes, and connect with like-minded people in your community.
        </p>
        <div className="flex justify-center gap-10 mt-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-semibold text-[#3D2C2A]">📅 Browse Events</h3>
            <p className="text-sm text-[#7A4B2B]">Find events that match your interests.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-semibold text-[#3D2C2A]">🤝 Connect</h3>
            <p className="text-sm text-[#7A4B2B]">Meet people and expand your network.</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="font-semibold text-[#3D2C2A]">🚀 Get Involved</h3>
            <p className="text-sm text-[#7A4B2B]">Support causes and make an impact.</p>
          </div>
        </div>
      </div>

      
      <div className="w-full py-16 text-center">
        <h2 className="text-3xl font-bold text-[#3D2C2A]">Trending Events</h2>
        <p className="text-lg text-[#7A4B2B] mt-4 max-w-2xl mx-auto">
          Don't miss out on the most popular upcoming events in your area.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img src="/music.jpeg" alt="Music Fest" className="rounded-md w-full h-40 object-cover" />
            <h3 className="font-semibold text-[#3D2C2A] mt-3">🎶 Music Festival</h3>
            <p className="text-sm text-[#7A4B2B]">Join us for an unforgettable night of music.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img src="/fundraiser.jpeg" alt="Charity Event" className="rounded-md w-full h-40 object-cover" />
            <h3 className="font-semibold text-[#3D2C2A] mt-3">❤️ Charity Fundraiser</h3>
            <p className="text-sm text-[#7A4B2B]">Support a great cause and make a difference.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <img src="/church.jpeg" alt="Community Prayer" className="rounded-md w-full h-40 object-cover" />
            <h3 className="font-semibold text-[#3D2C2A] mt-3">🙏 Community Prayer</h3>
            <p className="text-sm text-[#7A4B2B]">Gather with others for a moment of peace.</p>
          </div>
        </div>
      </div>

      
      <div className="w-full text-center py-16 bg-[#EAD4B9] rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-[#3D2C2A]">Join Our Community Today!</h2>
        <p className="text-lg text-[#7A4B2B] mt-4 max-w-2xl mx-auto">
          Be a part of a thriving community and start making meaningful connections.
        </p>
        <Link
          to="/events"
          className="mt-6 inline-block px-6 py-3 bg-[#7A4B2B] text-white rounded-md text-lg font-semibold hover:bg-[#5C3A1F] transition"
        >
          Explore Events
        </Link>
      </div>
    </div>
  );
};

export default Home;

