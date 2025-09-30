import React from "react";
import { useNavigate } from "react-router-dom";

const FormPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      {/* Makit Labs Logo as a button */}
      <div className="mb-6 flex flex-col items-center">
        <button
          onClick={() => navigate("/")} // Redirect to homepage
          className="transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src="/photo/logo/MakitLabs_Logo.png" // Correct public path
            alt="Makit Labs Logo"
            className="w-32 h-auto" // Adjust size as needed
          />
        </button>
      </div>

      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Thank You for Visiting Makit Labs 🎉
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          If you’re interested in us, please fill out the form below and our
          team will reach out to you soon.
        </p>

        {/* Google Form Embed */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfs-0GPRpBO3F6yhuM87DYhPMLeDqSL5ofmf074TOJsINeBjg/viewform?embedded=true"
          className="w-full h-[800px] rounded-xl shadow-lg border border-gray-200"
          allowFullScreen
        ></iframe>

        <div className="mt-6 text-2xl">🤖✨🚀</div>
      </div>
    </div>
  );
};

export default FormPage;
