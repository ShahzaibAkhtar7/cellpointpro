

export default function DiscoverPayment() {
return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Shared gradient container */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 text-slate-800 rounded-xl shadow-lg overflow-hidden">
          
          {/* First Section: Video Left, Text Right */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left - Image */}
            <div className="md:w-1/2 flex justify-center order-1 md:order-1">
              <img
                src="/cellpointpro.png"
                alt="CellPoinPro Payments"
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
              />              
            </div>

            {/* Right - Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-2">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">
                Discover CellPoinPro Payments
              </h2>
              <div className="space-y-4">
                {[
                  "Comprehensive payment solutions for repair businesses.",
                  "Tailored transaction rates specific to repair shops.",
                  "Real-time integration with repair orders.",
                  "Seamless and secure payment processing.",
                  "Excellent customer support for your team.",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Second Section: Text Left, Image Right */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left - Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">
                Discover Square Payments
              </h2>
              <div className="space-y-4">
                {[
                  "Seamless integration with Square's payment ecosystem.",
                  "Accept credit cards, debit cards, and mobile payments.",
                  "Real-time transaction reporting and analytics.",
                  "Secure payment processing for businesses of any size.",
                  "World-class customer support for smooth transactions.",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="md:w-1/2 flex justify-center order-1 md:order-2">
              <img
                src="/payment.png"
                alt="Payment features"
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
