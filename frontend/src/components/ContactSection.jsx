import { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(formData)
      const res = await axios.post("http://localhost:5000/contact", formData);

      if (res.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("⚠️ Server not reachable.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
