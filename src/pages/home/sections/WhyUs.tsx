import { whyus } from "../../../assets/copies";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function WhyUs() {
  const navigate = useNavigate();

  const [active, setActive] = useState("first");

  const activeTab = whyus.find((t) => t.id === active)!;

  return (
    <section className="mx-[5%] md:mx-[10%] mt-[150px]  font-default">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-7xl">
          Why <span className="text-primary font-bold">us</span>
        </h2>
      </div>
      <div className="px-10 py-10  rounded-4xl bg-[#5E07E1]/4">
        {/* Top Row - whyus */}
        <div className="flex justify-around border-b-4 border-white">
          {whyus.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`pb-1 text-sm sm:text-base transition-colors cursor-pointer duration-300 delay-100 ${
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
        <div className="flex gap-10 mt-5 items-center flex-col md:flex-row">
          {/* Left side */}
          <div className="md:w-[70%]">
            <h4 className="text-sm text-primary/40 uppercase mb-2">Why Us</h4>
            <h2 className="text-4xl lg:text-7xl mb-4">
              {activeTab.title.split(" ")[0]}{" "}
              <span className="text-primary font-bold">
                {activeTab.title.split(" ")[1]}
              </span>
            </h2>
            <p className="text-gray-800 mb-6">{activeTab.description}</p>
            <button
              className="bg-primary text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                navigate("/form");
              }}
            >
              {activeTab.button}
              <span className="tracking-tighter font-mono pl-2">&gt;&gt;</span>
            </button>
          </div>

          {/* Right side - graphic */}
          <div className="md:w-[30%] h-[200px] flex justify-end">
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
