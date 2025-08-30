export default function TicketBoard() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Shared gradient container */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 text-slate-800 rounded-xl shadow-lg overflow-hidden">
          
          {/* First Section: Video Left, Text Right */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left - Video */}
            <div className="md:w-1/2 flex justify-center order-1 md:order-1">
              <video
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Videos/ticketboard.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right - Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-2">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">
                Dynamic Ticket Board
              </h2>
              <div className="space-y-4">
                {[
                  "Never lose tickets again.",
                  "Centralized view of all active tickets.",
                  "Customize your own workflow.",
                  "Color-coded for easier management.",
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
                Easy Check-ins
              </h2>
              <div className="space-y-4">
                {[
                  "Everything you need in one place.",
                  "Optimized for user experience.",
                  "Multi-Device management.",
                  "Integrations to increase sales.",
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
                src="/ticketfeatures.png"
                alt="Ticket features"
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
