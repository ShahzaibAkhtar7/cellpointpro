export default function Slider() {
  const logos = [
    { id: 1, src: "/Logos/logo1.svg", alt: "Logo 1" },
    { id: 2, src: "/Logos/logo2.svg", alt: "Logo 2" },
    { id: 3, src: "/Logos/logo3.svg", alt: "Logo 3" },
    { id: 4, src: "/Logos/logo4.svg", alt: "Logo 4" },
    { id: 5, src: "/Logos/logo5.svg", alt: "Logo 5" },
    { id: 6, src: "/Logos/logo6.svg", alt: "Logo 6" },
    { id: 7, src: "/Logos/logo7.svg", alt: "Logo 7" },
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-center text-lg md:text-xl font-semibold mb-8 text-slate-800 font-sans">
        CellPointPro is proudly trusted by
      </h2>
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll gap-8 px-4" style={{ width: "calc(200% + 2rem)" }}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-24 md:w-32 lg:w-36 flex items-center justify-center">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
