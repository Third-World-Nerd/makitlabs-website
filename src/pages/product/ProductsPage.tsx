import React from "react";
import Navbar from "../../components/Navbar";
import { products } from "../../assets/products";
import { useNavigate } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="relative top-[84px] pt-12 pb-12 font-default text-textDefaultColor text-sm sm:text-base">
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl overflow-hidden shadow-lg flex flex-col items-center transition-transform hover:scale-[1.02]"
            >
              {/* 4:5 image wrapper */}
              <div className="w-full aspect-[4/5]">
                <img
                  src={product.images[0]} // show only the first image
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h2 className="mt-4 font-semibold text-center">{product.name}</h2>

              {product.restocking && (
                <span className="text-red-500">Restocking</span>
              )}

              <button
                onClick={() => navigate(`/products/${product.id}`)}
                className="my-2 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
