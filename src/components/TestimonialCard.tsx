import type { FC } from "react";
import { Star, StarHalf } from "lucide-react";

interface CardProps {
  name: string;
  school: string;
  image: string;
  quote: string;
  rating?: number;
}

const StudentCard: FC<CardProps> = ({
  name,
  school,
  image,
  quote,
  rating = 5,
}) => {
  return (
    // Outer Wrapper (New): Defines the actual space the scaled card occupies on mobile
    // 360px * 0.6 = 216px
    // 560px * 0.6 = 336px
    // mx-auto centers this container.
    <div className="w-[216px] h-[336px] sm:w-[360px] sm:h-[560px] mx-auto">
      {/* Inner Card (Original): Keeps the large base size and applies the transform
          - scale-[0.6] is used for clarity (same as scale-60).
          - origin-top-left is crucial: it makes the card scale down from the top-left corner,
            allowing the wrapper to control the resulting space perfectly. 
      */}
      <div 
        className="relative w-[360px] h-[560px] rounded-2xl overflow-hidden shadow-lg font-default 
          scale-[0.6] sm:scale-100 origin-top-left transition-transform duration-300"
      >
        {/* Background image */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top-left student name + school */}
        <div className="absolute top-0 w-full h-[97px] p-5 bg-gradient-to-b from-[rgba(0,0,0,0.34)] to-transparent">
          <div className="absolute top-4 left-4 z-10">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <p className="text-white/80 text-sm mb-48">{school}</p>
          </div>
        </div>

        {/* Bottom overlay with text + stars */}
        <div className="absolute bottom-0 w-full h-[272px] p-5 bg-gradient-to-t from-black/100 to-transparent flex flex-col justify-end">
          {/* Quote text */}
          {/* Using Tailwind's native line-clamp utility */}
          <p
            className="text-white line-clamp-3 text-xl"
          >
            {quote}
          </p>

          {/* Stars */}
          <div className="flex mt-3 text-yellow-400">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 stroke-yellow-400 ml-1"
              />
            ))}
            {rating % 1 !== 0 && (
              <StarHalf
                key="half"
                className="w-4 h-4 fill-yellow-400 stroke-yellow-400 ml-1"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
