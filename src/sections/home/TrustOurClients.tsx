import type { FC } from "react";
import { reviews } from "../../assets/reviews";
import ReviewCard from "../../components/ReviewCard";
import { useState } from "react";

const TrustOurClients: FC = () => {
  const [showAll, setShowAll] = useState(false);

  const expandedMaxHeight = "max-h-[5000px]";
  const visibleMaxHeight = "max-h-[600px]"; 

  // Split reviews into 2 columns
  const col2_1 = reviews.filter((_, i) => i % 2 === 0);
  const col2_2 = reviews.filter((_, i) => i % 2 === 1);

  // Split reviews into 3 columns
  const col3_1 = reviews.filter((_, i) => i % 3 === 0);
  const col3_2 = reviews.filter((_, i) => i % 3 === 1);
  const col3_3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="px-[5%] 2xl:px-[15%] mt-[240px] font-default bg-white relative mb-[200px]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-7xl">
          Trust our <span className="text-primary font-bold">Clients</span>
        </h2>
      </div>

      {/* Main Grid Wrapper */}
      <div className="relative">
        <div
          className={`flex gap-8 overflow-hidden transition-all duration-700 ease-in-out ${
            showAll ? expandedMaxHeight : `${visibleMaxHeight}`
          }`}
        >
          {/* --- 2 Columns (below lg) --- */}
          <div className="flex w-full gap-8 lg:hidden">
            <div className="w-1/2 flex flex-col gap-8">
              {col2_1.map((t, i) => (
                <ReviewCard key={i} review={t} />
              ))}
            </div>
            <div className="w-1/2 flex flex-col gap-8">
              {col2_2.map((t, i) => (
                <ReviewCard key={i} review={t} />
              ))}
            </div>
          </div>

          {/* --- 3 Columns (lg and above) --- */}
          <div className="hidden lg:flex w-full gap-8">
            <div className="w-1/3 flex flex-col gap-8 lg:mt-20">
              {col3_1.map((t, i) => (
                <ReviewCard key={i} review={t} />
              ))}
            </div>
            <div className="w-1/3 flex flex-col gap-8">
              {col3_2.map((t, i) => (
                <ReviewCard key={i} review={t} />
              ))}
            </div>
            <div className="w-1/3 flex flex-col gap-8 lg:mt-20">
              {col3_3.map((t, i) => (
                <ReviewCard key={i} review={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
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
