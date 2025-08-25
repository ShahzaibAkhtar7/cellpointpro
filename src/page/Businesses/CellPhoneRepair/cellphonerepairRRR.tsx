import Slider from "@/components/RepairSlider/Slider";

export default function cellPhoneRepair() {
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
              Cell Phone Repair
            </h1>
            <p
              className="mt-4 text-base md:text-lg"
              style={{ color: "#264160" }}
            >
              From Repairs to Revenue: The POS Built to Grow Your Cell Phone Repair
              Business.
            </p>
            <div className="mt-6">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-sans"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src="/phonerepair.jpg" // replace with your image path in public folder
              alt="Cell Phone Repair"
              loading="lazy" // ✅ Native lazy loading
              decoding="async" // ✅ Prevents render-blocking
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
}
