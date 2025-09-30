import type { FC } from "react";
import type { Review } from "../../src/assets/reviews";
import { UserIcon } from "@heroicons/react/24/outline";
import { Star } from "lucide-react";


interface Props {
  review: Review;
}

const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <div className="font-default rounded-xl shadow-lg shadow-primary/6 p-1 lg:p-6 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2">
        <span className="flex items-center text-gray-800 text-sm lg:text-base">
          <div className="p-1.5 bg-[#EADDFF] rounded-full mr-3">
            <UserIcon className="w-5 h-5 text-[#4F378A]" />
          </div>
          {review.name}
        </span>

      {/* Quote */}
        <p className="text-primary mb-4 bg-white p-2 rounded-2xl shadow-lg shadow-primary/2 text-sm lg:text-base">“{review.quote}”</p>
      

      {/* Rating */}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`${
              idx < Math.round(review.rating)
                ? "text-primary"
                : "text-gray-300"
            } w-3 h-3 lg:w-4 lg:h-4 fill-primary`}
          >
          </Star>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;