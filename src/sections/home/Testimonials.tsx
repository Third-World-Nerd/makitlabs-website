import { useRef, useState, useEffect } from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../assets/testimonials";

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll interval
  useEffect(() => {
    if (!scrollRef.current) return;

    let animationFrame: number;
    const speed = 0.5; // pixels per frame
    const step = () => {
      if (!isDragging && scrollRef.current) {
        scrollRef.current.scrollLeft += speed;

        // Looping effect
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // Mouse Down
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  // Mouse Leave / Up → stop dragging
  const stopDragging = () => setIsDragging(false);

  // Mouse Move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // drag speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  // Touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section className="flex flex-col items-center w-full mt-[180px]">
      <span className="text-xl font-default text-[rgba(94,7,225,0.4)]">
        Testimonials
      </span>
      <h1 className="text-4xl lg:text-7xl text-default leading-tight font-default mb-[20px]">
        Words from our{" "}
        <span className="text-primary font-bold whitespace-nowrap">Clients</span>
      </h1>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="mt-[60px] w-full overflow-x-hidden overflow-y-hidden relative cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-[32px] px-4 w-max">
          {/* Duplicate testimonials twice for smooth infinite scroll */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="shrink-0 w-[360px]">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
