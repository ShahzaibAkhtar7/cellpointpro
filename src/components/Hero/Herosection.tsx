import  { useState } from "react";
import BookDemoButton from "@/components/BookDemoButton/BookDemoButton";
import BookDemoForm from "@/components/BookDemoForm/BookDemoForm";

export default function Herosection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight font-sans">
              Your toolbox in the cloud
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl font-sans">
              Save big and grow faster with CellPointPro, your next repair shop software.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* ✅ Reusable Book a Demo Button */}
              <BookDemoButton onClick={() => setIsFormOpen(true)} />

              <a
                href="#plans"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 font-sans"
              >
                See Our Plans
              </a>
            </div>
          </div>

          {/* Right Image (replacing video) */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="/hero.png" // ensure this exists in /public
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Book Demo Modal */}
      <BookDemoForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
