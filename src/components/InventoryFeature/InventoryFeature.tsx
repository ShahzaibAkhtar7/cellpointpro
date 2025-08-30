export default function InventoryFeature() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Shared gradient container */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 text-slate-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
          
          {/* Left - Image */}
          <div className="md:w-1/2 flex justify-center order-1 md:order-1">
            <img
              src="/teamcommunication.jpg"
              alt="Powerful In-Store Advertising and Display Solutions"
              className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
            />              
          </div>

          {/* Right - Text */}
          <div className="md:w-1/2 space-y-8 order-2 md:order-2">
            <h2 className="text-3xl font-bold text-[#264160] mb-6 font-poppins">
              Inventory Management Features
            </h2>
            <div className="space-y-4">
              {[
                "Engaging In-Store Displays.",
                "Targeted Advertising.",
                "Real-Time Customer Facing Displays.",
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

        </div>
      </div>
    </div>
  );
}
