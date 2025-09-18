import React from "react";

const testimonials = [
  { name: "Amit Sharma", text: "This team built our website and it’s fantastic! Smooth, responsive and user friendly." },
  { name: "Sneha Patel", text: "They truly understood our vision and delivered beyond expectations." },
  { name: "Rahul Verma", text: "Professional, reliable, and creative. Highly recommended!" },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">What Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-gray-600 italic">"{t.text}"</p>
            <h4 className="mt-4 font-semibold text-indigo-600">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
