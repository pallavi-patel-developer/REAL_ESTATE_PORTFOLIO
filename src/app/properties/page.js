import Link from "next/link";

import PropertyExplorer from "@/components/PropertyExplorer";

export const metadata = {
  title: "All Properties | AreaProps",
  description: "Browse the full AreaProps property collection with working filters.",
};

export default async function PropertiesPage({ searchParams }) {
  const params = await searchParams;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass-panel rounded-[2rem] px-6 py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="section-kicker">AreaProps Portfolio</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Full Property Collection
                </h1>
              </div>
              <Link href="/#properties" className="secondary-button">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PropertyExplorer
        sectionId="all-properties"
        title="Find the Right Property With Smart Filters"
        description="Use the working filters below to narrow listings by buy or sell, price range, area, and location across the complete AreaProps portfolio."
        initialFilters={{
          status: params.status ?? "all",
          price: params.price ?? "all",
          area: params.area ?? "all",
          location: params.location ?? "all",
        }}
      />
    </main>
  );
}
