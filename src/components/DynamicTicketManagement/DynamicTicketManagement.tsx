
export default function DynamicTicketManagement() {
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
                <source src="/Videos/ticketboard.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right Side - Custom Metrics Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-2">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">Dynamic Ticket Management</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Never lose tickets again</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Centralized view of all active tickets.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Customize your own workflow.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Color-coded for easier management.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Second Section: Integrated Payments Text Left, Video Right */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left Side - Integrated Payments Text */}
            <div className="md:w-1/2 space-y-8 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">Employee Management</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Easy employee management with scheduling.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Ensure accountability with time off requests.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Simple approvals for employee requests.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[#4D53ED] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">Save notes for days for easy management.</span>
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
                <source src="/Videos/Easy Scheduling.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
