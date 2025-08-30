import  { useState } from "react";
import Slider from "@/components/RepairSlider/Slider";
import BookDemoButton from "@/components/BookDemoButton/BookDemoButton";
import BookDemoForm from "@/components/BookDemoForm/BookDemoForm";
import StockCount from "@/components/StockCount/StockCount";

export default function StockCounting() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1
              className="text-3xl md:text-4xl font-semibold"
              style={{ color: "#264160" }}
            >
              Stock Counting
            </h1>
            <p
              className="mt-4 text-base md:text-lg"
              style={{ color: "#264160" }}
            >
              Count, Track, and Order: The Complete Inventory Solution for Your
              Repair Business.
            </p>

            {/* ✅ Reusable Book a Demo Button */}
            <BookDemoButton onClick={() => setIsFormOpen(true)} />
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src="/stockcounting.jpg" // make sure this image exists in /public
              alt="Stock Counting"
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Slider Component */}
      <Slider />
      <StockCount />

      {/* ✅ Book Demo Modal */}
      <BookDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
