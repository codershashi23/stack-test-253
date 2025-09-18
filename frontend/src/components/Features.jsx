import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    desc: "Our apps are optimized for speed, ensuring smooth and efficient user experiences.",
  },
  {
    title: "Responsive Design",
    desc: "Mobile-first designs that adapt seamlessly to all screen sizes and devices.",
  },
  {
    title: "Secure & Reliable",
    desc: "We follow best practices in security, keeping your data safe and systems stable.",
  },
  {
    title: "Scalable Solutions",
    desc: "Applications built to grow with your business without performance compromises.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-6" id="features">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Powerful Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We combine modern technologies and design principles to deliver
          features that add value to your business and delight your users.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="text-green-500 w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-indigo-600">
                {f.title}
              </h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
