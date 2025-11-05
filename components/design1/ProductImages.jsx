"use client";

import { useState, useEffect } from "react";

export default function ProductImages({ product }) {
  const [startIdx, setStartIdx] = useState(0);
  const imagesPerView = 3;
  const maxStart = Math.max(0, product.images.length - imagesPerView);

  function prevImages() {
    setStartIdx((s) => Math.max(0, s - imagesPerView));
  }
  function nextImages() {
    setStartIdx((s) => Math.min(maxStart, s + imagesPerView));
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prevImages();
      if (e.key === "ArrowRight") nextImages();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Product Images</h2>
        <div className="flex gap-2">
          <button onClick={prevImages} className="p-2 border rounded">◀</button>
          <button onClick={nextImages} className="p-2 border rounded">▶</button>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
        {product.images.slice(startIdx, startIdx + imagesPerView).map((src, i) => (
          <div key={i} className="h-full rounded-xl overflow-hidden bg-gray-100">
            <img src={src} alt={`img-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* <div className="mt-4 flex gap-2 overflow-x-auto">
        {product.images.map((src, i) => (
          <button
            key={i}
            onClick={() => setStartIdx(Math.min(Math.max(0, i), maxStart))}
            className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border ${
              i >= startIdx && i < startIdx + imagesPerView ? "ring-2 ring-indigo-300" : ""
            }`}
          >
            <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div> */}
    </div>
  );
}
