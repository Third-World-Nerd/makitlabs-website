import type { FC } from "react";
import { reviews } from "../../assets/reviews";
import ReviewCard from "../../components/ReviewCard";
import { useState } from "react";

const TrustOurClients: FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Set a massive value that guarantees all content will fit.
  const expandedMaxHeight = "max-h-[5000px]";
  // Define the height of the initially visible content (e.g., two rows of cards).
  const visibleMaxHeight = "max-h-[600px]"; 

  // 1. Divide reviews into three columns
  const column1 = reviews.filter((_, i) => i % 3 === 0);
  const column2 = reviews.filter((_, i) => i % 3 === 1);
  const column3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="px-[440px] mt-[240px] font-default bg-white relative mb-[200px]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-7xl">
          Trust our <span className="text-primary font-bold">Clients</span>
        </h2>
      </div>

      {/* Main Grid Wrapper with fade mask */}
      <div className="relative">
        <div
          // Use flex to display columns horizontally, enables masonry effect.
          className={`flex gap-8 overflow-hidden transition-all duration-700 ease-in-out ${
            showAll ? expandedMaxHeight : `${visibleMaxHeight}`
          }`}
        >
          {/* Column 1 (Left): Starts lower (lg:mt-20) */}
          <div className="w-1/3 flex flex-col gap-8 mt-0 lg:mt-20"> 
            {column1.map((t, i) => (
              <ReviewCard key={i} review={t} />
            ))}
          </div>

          {/* Column 2 (Middle): Starts at the top (mt-0) */}
          <div className="w-1/3 flex flex-col gap-8">
            {column2.map((t, i) => (
              <ReviewCard key={i} review={t} />
            ))}
          </div>

          {/* Column 3 (Right): Starts lower (lg:mt-20) */}
          <div className="w-1/3 flex flex-col gap-8 mt-0 lg:mt-20">
            {column3.map((t, i) => (
              <ReviewCard key={i} review={t} />
            ))}
          </div>

        </div>

        {/* Gradient overlay when clipped */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
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