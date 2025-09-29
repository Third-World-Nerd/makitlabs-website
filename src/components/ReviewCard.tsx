import type { FC } from "react";
import type { Testimonial } from "../assets/testimonials";
import { UserIcon } from "@heroicons/react/24/outline";
import { Star } from "lucide-react";


interface Props {
  testimonial: Testimonial;
}

const ReviewCard: FC<Props> = ({ testimonial }) => {
  return (
    <div className="font-default rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2">
        <span className="flex items-center text-gray-800">
          <div className="p-1.5 bg-[#EADDFF] rounded-full mr-3">
            <UserIcon className="w-5 h-5 text-[#4F378A]" />
          </div>
          {testimonial.name}
        </span>

      {/* Quote */}
        <p className="text-primary mb-4 bg-white p-2 rounded-2xl shadow-lg shadow-primary/4">“{testimonial.quote}”</p>
      

      {/* Rating */}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`${
              idx < Math.round(testimonial.rating)
                ? "text-primary"
                : "text-gray-300"
            } w-4 h-4 fill-primary`}
          >
          </Star>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;