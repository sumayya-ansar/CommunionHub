const EventCard = ({ title, date, category, location, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl w-80">
      
      <img 
        src={image || "/images/placeholder.jpg"}  
        alt={title}  
        className="w-full h-48 object-cover"
        onError={(e) => e.target.src = "/images/placeholder.jpg"} 
      />

      
      <div className="p-4">
        <h2 className="text-2xl font-bold text-[#3D2C2A] mb-2">{title}</h2>
        <p className="text-[#7A4B2B]"><strong>📅 Date:</strong> {date}</p>
        <p className="text-[#7A4B2B]"><strong>📍 Location:</strong> {location}</p>
        <span className="inline-block mt-3 px-4 py-1 text-sm font-semibold text-white bg-[#7A4B2B] rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
