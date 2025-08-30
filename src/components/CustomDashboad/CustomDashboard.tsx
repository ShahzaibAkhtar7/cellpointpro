export default function CustomDashboard() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 text-slate-800 rounded-xl shadow-lg overflow-hidden">
          {/* First Section: Video Left, Custom Metrics Text Right */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left Side - Video */}
            <div className="md:w-1/2 flex justify-center order-1 md:order-1">
              <video
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Videos/customdashboardvideo.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right Side - Custom Metrics Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-2">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">Custom Metrics Dashboard</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Track key metrics easily.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Centralized growth tools.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Measure and boost sales.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Second Section: Integrated Payments Text Left, Video Right */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left Side - Integrated Payments Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">Integrated Payments</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Integrated payment solutions.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Best processing rates available.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Lifetime warranty & receipt paper.</span>
                </div>
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="md:w-1/2 flex justify-center order-1 md:order-2">
              <video
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Videos/integratedvideo.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
