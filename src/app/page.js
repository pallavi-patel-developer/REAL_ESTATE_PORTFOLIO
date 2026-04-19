import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PropertyExplorer from "@/components/PropertyExplorer";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const ctaForm = params?.form === "list" ? "list" : "buy";

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PropertyExplorer compact showViewMore />
      <GallerySection />
      <CtaSection initialForm={ctaForm} />
      <Footer />
    </main>
  );
}
