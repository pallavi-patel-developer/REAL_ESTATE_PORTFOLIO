export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
        <div>
          <p className="section-kicker">About Us</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            At AreaProps, we believe finding a home is more than just a transaction
            - it&apos;s a new beginning.
          </h2>
        </div>
        <p className="max-w-xl pt-1 text-sm leading-7 text-[var(--muted)] sm:text-base">
          Our goal is to make that journey simple, transparent, and enjoyable by
          pairing modern tools with human guidance. From first-time buyers to
          experienced investors, we bring thoughtful options designed to fit the
          way you want to live.
        </p>
      </div>
    </section>
  );
}
