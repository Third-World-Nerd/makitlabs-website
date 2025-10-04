import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingLabelInput from "../components/FloatingLabelInput";

const FormPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, phone, remarks }]);

    if (error) {
      alert("Error submitting form: " + error.message);
    } else {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setRemarks("");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative top-[84px] flex items-center justify-center bg-white pt-12 pb-60 font-default">
        <div className="w-full max-w-lg p-6">
          {/* Header section like in your screenshot */}
          <h2 className="text-4xl lg:text-7xl">
            Contact <span className="text-primary font-bold">us</span>
          </h2>

          <div className="pt-6 pb-10 text-black/50">
            Want to get started with robotics? Fill out the form to receive a
            free consultation.
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <FloatingLabelInput
              id="name"
              label="Full Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FloatingLabelInput
              id="email"
              label="Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FloatingLabelInput
              id="phone"
              label="Phone Number"
              required={true}
              type="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FloatingLabelInput
              id="remarks"
              label="Remarks"
              value={remarks}
              autoAdjustHeight={true}
              onChange={(e) => setRemarks(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-primary text-white font-medium hover:scale-105 duration-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Footer showCTA={false} />
    </>
  );
};

export default FormPage;
