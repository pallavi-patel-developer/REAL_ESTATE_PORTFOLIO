import Link from "next/link";

import Footer from "@/components/Footer";
import GalleryMasonry from "@/components/GalleryMasonry";
import Navbar from "@/components/Navbar";
import { galleryItems } from "@/data/gallery";

export const metadata = {
  title: "Gallery | AreaProps",
  description: "Browse the AreaProps visual gallery and jump into matching properties.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--card)] px-6 py-12 shadow-[0_25px_70px_rgba(15,23,42,0.06)] sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Full Gallery</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Explore Many Spaces In Different Shapes And Sizes
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Click on any image to jump to the property page and browse matching
              listings by location or type. The layout mixes wide, tall, and square
              tiles to feel more like a real estate editorial gallery.
            </p>
          </div>

          <div className="mt-10">
            <GalleryMasonry items={galleryItems} />
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/properties" className="primary-button">
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
