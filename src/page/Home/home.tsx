import Faqs from "@/components/FrequentlyQ/Faqs";
import Herosection from "@/components/Hero/Herosection";
import Features from "@/components/NewFeature/Features";
import Plans from "@/components/PricingPlans/Plans";
import Slider from "@/components/RepairSlider/Slider";


export default function home() {
  return (
    <div>
      <Herosection />
      <Slider />
      <Features />
      <Plans />
      <Faqs />
    </div>
  )
}
