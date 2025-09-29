import { whyus } from "../../assets/copies";

import { useState } from "react";


export default function WhyUs() {
  const [active, setActive] = useState("first");

  const activeTab = whyus.find((t) => t.id === active)!;

  return (
<section className="mx-[140px] my-[120px] px-10 py-10 rounded-4xl bg-[#5E07E1]/4 font-default">
      {/* Top Row - whyus */}
      <div className="flex justify-around border-b-4 border-white">
        {whyus.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-1 transition-colors cursor-pointer duration-300 delay-100 ${
              active === tab.id
                ? "text-[#5E07E1] border-b-4 border-[#5E07E1]/40"
                : "text-[#5E07E1]/40 hover:text-[#5E07E1]/80"
            }`}
          >
            {tab.id.toUpperCase()} POINT
          </button>
        ))}
      </div>

{/* Bottom Row - Content */}
<div className="flex gap-10 mt-5 items-center">
  {/* Left side */}
  <div className="w-[70%]">
    <h4 className="text-sm text-primary/40 uppercase mb-2">
      Why Us
    </h4>
    <h2 className="text-7xl mb-4">
      {activeTab.title.split(" ")[0]}{" "}
      <span className="text-purple-600 font-bold">
        {activeTab.title.split(" ")[1]}
      </span>
    </h2>
    <p className="text-gray-800 mb-6">{activeTab.description}</p>
    <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
      {activeTab.button} <span className="ml-2">&gt;&gt;</span>
    </button>
  </div>

  {/* Right side - graphic */}
  <div className="w-[30%] h-[200px] flex justify-end">
    <img
      src={activeTab.image}
      alt={activeTab.title}
      className="h-full w-auto object-contain"
    />
  </div>
</div>

    </section>
  );
}
