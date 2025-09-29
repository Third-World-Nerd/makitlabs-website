import type { FC } from "react";
import { testimonials } from "../../assets/testimonials";
import ReviewCard from "../../components/ReviewCard";
import { useState } from "react";

const TrustOurClients: FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="px-[440px] py-20 font-default bg-white relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Trust our <span className="text-primary">Clients</span>
        </h2>
      </div>

      {/* Grid Wrapper with fade mask */}
      <div className="relative">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out ${
            showAll ? "max-h-none" : "max-h-[600px] overflow-hidden"
          }`}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="h-fit">
              <ReviewCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Gradient overlay when clipped */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-42 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
        >
          {showAll ? "View less «" : "View more »"}
        </button>
      </div>
    </section>
  );
};

export default TrustOurClients;
