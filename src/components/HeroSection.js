import Image from "next/image";

import { properties } from "@/data/properties";

const heroGallery = properties.map((property) => property.image).slice(0, 9);

const heroColumns = [
  heroGallery.slice(0, 3),
  heroGallery.slice(3, 6),
  heroGallery.slice(6, 9),
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          id="home"
          className="hero-shell overflow-hidden rounded-[2.5rem] border border-black/5"
        >
          <div className="hero-copy mx-auto max-w-4xl px-6 pb-8 pt-16 text-center sm:px-10 lg:pt-20">
            <p className="section-kicker">Premium Real Estate Solutions</p>
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Find The Perfect Property For Your Future With AreaProps
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Explore a wide range of homes, apartments, and investment
              opportunities tailored to your needs. Browse curated listings,
              compare options, and find the space that fits your lifestyle.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#properties" className="primary-button">
                Explore Properties
              </a>
            </div>
          </div>

          <div className="relative px-2 sm:px-4 lg:px-8">
            <div className="hero-image-wrap hero-gallery-grid p-3 sm:p-4">
              {heroColumns.map((column, columnIndex) => (
                <div
                  key={`hero-column-${columnIndex}`}
                  className={`hero-gallery-column hero-scroll-${columnIndex + 1}`}
                >
                  {[...column, ...column].map((image, imageIndex) => (
                    <div key={`${image}-${imageIndex}`} className="hero-gallery-card">
                      <Image
                        src={image}
                        alt={`Property showcase ${columnIndex * 3 + (imageIndex % 3) + 1}`}
                        width={900}
                        height={1200}
                        className="hero-gallery-image"
                        priority={columnIndex === 0 && imageIndex < 2}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
