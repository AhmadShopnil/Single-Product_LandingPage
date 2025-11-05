"use client";

import { CheckCircle } from "lucide-react";

export default function ProductSpecialties({ specialties }) {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 rounded-3xl shadow-sm px-4 py-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Why Choose This Product?
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm">
          Designed with precision and crafted to deliver the best experience — discover what makes it special.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {specialties.map((s, i) => (
          <div
            key={i}
            className="group flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-teal-500"
          >
            <div className="shrink-0">
              <div className="p-2 bg-teal-50 text-teal-600 rounded-full group-hover:bg-teal-100 transition-colors">
                <CheckCircle size={22} />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{s}</h4>
              <p className="text-sm text-gray-500 mt-1 leading-snug">
                Experience unmatched quality and thoughtful design with this feature.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
