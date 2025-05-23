import { useLanguage } from "../context/LanguageContext";
import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import Contact from "@/components/ui/Contact";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <VisualFeatures />
      <Pricing />
      {/* <Contact /> */}
    </>
  );
}
