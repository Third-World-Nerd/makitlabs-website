import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../assets/products";
import Navbar from "../../components/Navbar";
import { BiArrowBack } from "react-icons/bi";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Detect which image is mostly in view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <div className="relative top-[84px] container mx-auto p-6 font-default text-textDefaultColor text-sm sm:text-base">
        {/* Back button */}
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 hover:cursor-pointer"
        >
          <BiArrowBack size={22} />
          <span>Back to Products</span>
        </button>

        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

        {/* Horizontal scrollable image gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 mb-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 snap-x snap-mandatory"
        >
          {product.images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 aspect-[4/5] w-[250px] md:w-[300px] overflow-hidden rounded-lg snap-center"
            >
              <img
                src={img}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="sm:hidden flex justify-center gap-2 mb-6">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 sm:h-2 aspect-square rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <p dangerouslySetInnerHTML={{ __html: product.description || "" }} />

        {product.price && (
          <p className="mt-4 font-semibold text-lg">
            Price: Rs {product.price}
          </p>
        )}

        {product.restocking && (
          <p className="text-red-500 mt-2">Currently Restocking</p>
        )}
      </div>
    </>
  );
};

export default ProductDetailsPage;
