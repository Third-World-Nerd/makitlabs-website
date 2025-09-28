import type { FC } from "react";
import { Star } from "lucide-react";

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
    <div className="relative w-[360px] h-[560px] rounded-2xl overflow-hidden shadow-lg font-default">
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
      <div className="absolute bottom-0 w-full h-[272px] p-5 bg-gradient-to-t from-[rgba(0,0,0,100)] to-transparent flex flex-col justify-end">
        {/* Quote text */}
        <p
          className="text-white line-clamp-3 text-xl"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {quote}
        </p>

        {/* Stars */}
        <div className="flex mt-3 text-yellow-400">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 stroke-yellow-400 ml-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
