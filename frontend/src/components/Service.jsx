import React from "react";

const services = [
  { title: "Web Development", desc: "Responsive, fast, and scalable web apps." },
  { title: "UI/UX Design", desc: "Clean, modern, and user-focused designs." },
  { title: "API Integration", desc: "Seamless backend connectivity and automation." },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="p-6 rounded-xl shadow-lg bg-blue-50 hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
