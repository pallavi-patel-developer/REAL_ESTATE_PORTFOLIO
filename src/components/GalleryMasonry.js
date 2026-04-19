import Image from "next/image";
import Link from "next/link";

export default function GalleryMasonry({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 md:auto-rows-[16rem]">
      {items.map((item) => (
        <Link
          key={`${item.title}-${item.image}`}
          href={item.href}
          className={`gallery-tile group overflow-hidden rounded-[2rem] border border-black/6 bg-[var(--card)] shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${item.span}`}
        >
          <div className={`relative ${item.height} h-full min-h-[16rem]`}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="gallery-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="inline-flex rounded-full bg-white/84 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                {item.tag}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/88">
                View matching property collection
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
