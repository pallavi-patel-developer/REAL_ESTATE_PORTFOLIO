import Link from "next/link";

import GalleryMasonry from "@/components/GalleryMasonry";
import { galleryItems } from "@/data/gallery";

export default function GallerySection() {
  return (
    <section id="gallery" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Property Gallery</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            A Closer Look At Spaces Designed For Modern Living
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Explore a curated visual gallery of elegant exteriors, inviting
            interiors, and neighborhoods that reflect the quality of homes in the
            AreaProps portfolio.
          </p>
        </div>

        <div className="mt-10">
          <GalleryMasonry items={galleryItems.slice(0, 5)} />
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/gallery" className="primary-button">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
