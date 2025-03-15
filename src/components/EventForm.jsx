import { useForm } from "react-hook-form";

const EventForm = ({ addEvent }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setValue("image", reader.result); 
      };
    }
  };

  const onSubmit = (data) => {
    addEvent(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-[#3D2C2A] mb-4">Add New Event</h2>

      <input {...register("title", { required: "Event Title is required" })} className="w-full p-2 border rounded-md" placeholder="Event Title" />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <input {...register("date", { required: "Event Date is required" })} type="date" className="w-full p-2 border rounded-md" />
      {errors.date && <p className="text-red-500">{errors.date.message}</p>}

      <input {...register("location", { required: "Location is required" })} className="w-full p-2 border rounded-md" placeholder="Event Location" />
      {errors.location && <p className="text-red-500">{errors.location.message}</p>}

      <input type="file" accept="image/*" className="w-full p-2 border rounded-md" onChange={handleImageChange} />
      <input type="hidden" {...register("image", { required: "Image is required" })} />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}

      <button className="w-full py-2 bg-[#7A4B2B] text-white rounded-md font-semibold hover:bg-[#5C3A1F] transition" type="submit">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;

