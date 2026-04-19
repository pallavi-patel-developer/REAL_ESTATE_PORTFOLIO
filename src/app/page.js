import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PropertyExplorer from "@/components/PropertyExplorer";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PropertyExplorer compact showViewMore />
      <GallerySection />
      <CtaSection />
      <Footer />
    </main>
  );
}
