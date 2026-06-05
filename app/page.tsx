import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import AboutSection from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Projects from "@/components/sections/FeaturedProjects";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonilas";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function HomePage() {


  return (
    <>
      <Navbar />

      <main>
        {/* <HeroSection /> */}
        <AboutSection />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}