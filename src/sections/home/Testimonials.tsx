import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../assets/testimonials";

function Testimonials() {
  return (
    <section className="flex flex-col items-center w-full mt-[180px]">
      <span className="text-xl font-default text-[rgba(94,7,225,0.4)]">
        Testimonials
      </span>
      <h1 className="text-4xl lg:text-7xl text-default leading-tight font-default mb-[20px]">
        Words from our <span className="text-primary font-bold whitespace-nowrap">Clients</span>
      </h1>
      <div className="mt-[60px] w-full overflow-hidden relative">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            /* --- CORRECTED CODE --- */
            /* 1. Define the animation properties on the base class */
            .marquee {
              animation: marquee 20s linear infinite;
            }

            /* 2. Pause the animation on hover */
            .marquee:hover {
              animation-play-state: paused;
            }
            /* --- END CORRECTION --- */

            /* Zoom only the image inside card */
            .marquee div:hover img {
              transform: scale(1.1);
              transition: transform 0.3s ease;
            }
          `}
        </style>

        {/* 3. Remove the inline style attribute */}
        <div className="marquee flex gap-[32px] w-[200%] animate-marquee">
          {/* Original set */}
          {testimonials.map((t, idx) => (
            <div key={`orig-${idx}`} className="shrink-0 w-[360px]">
              <TestimonialCard {...t} />
            </div>
          ))}

          {/* Duplicate set */}
          {testimonials.map((t, idx) => (
            <div key={`dup-${idx}`} className="shrink-0 w-[360px]">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;