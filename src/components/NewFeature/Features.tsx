import { CheckCircleIcon } from "@heroicons/react/24/solid"

export default function Features() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 text-slate-800 rounded-xl shadow-lg overflow-hidden">
          {/* Section 1 */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Left text */}
            <div className="md:w-1/2 space-y-8">
              <p className="text-sm tracking-widest text-orange-500 font-semibold uppercase font-sans">CellPointPro</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800 font-sans">
                Check out some of our newest features!
              </h2>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-700 font-sans">My Chats</h3>
                <ul className="space-y-4 text-lg text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-sans">Everything you need in one place.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-sans">Create groups and manage staff.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="font-sans">Multi-location chat management.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right video */}
            <div className="md:w-1/2 flex justify-center">
              <video
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Videos/My Chats.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 p-8 md:p-12 lg:p-16">
            {/* Right text */}
            <div className="md:w-1/2 space-y-8">
              <p className="text-sm tracking-widest text-orange-500 font-semibold uppercase font-sans">CellPointPro</p>
              <h3 className="text-2xl font-semibold mb-4 text-slate-700 font-sans">CellPointPro Shifts</h3>
              <ul className="space-y-4 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="font-sans">Easy scheduling for your teams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="font-sans">Manage time off requests.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="font-sans">Multi-location scheduling.</span>
                </li>
              </ul>
            </div>

            {/* Left video */}
            <div className="md:w-1/2 flex justify-center">
              <video
                className="w-full max-w-[700px] h-auto aspect-video rounded-xl shadow-lg border border-slate-300 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Videos/Easy Scheduling.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
