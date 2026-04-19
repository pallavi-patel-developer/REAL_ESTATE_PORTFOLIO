"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  areaOptions,
  filterProperties,
  locationOptions,
  priceOptions,
  properties,
  propertyTypeOptions,
} from "@/data/properties";

const defaultFilters = {
  status: "all",
  price: "all",
  area: "all",
  location: "all",
};

function buildQuery(filters) {
  return Object.fromEntries(
    Object.entries(filters).filter(([, value]) => value && value !== "all"),
  );
}

export default function PropertyExplorer({
  sectionId = "properties",
  title = "Explore a Wide Range of Properties That Fit Your Needs",
  description = "Browse carefully selected homes, apartments, and investment options designed to match your lifestyle and budget.",
  compact = false,
  initialFilters = defaultFilters,
  showViewMore = false,
}) {
  const [filters, setFilters] = useState({
    ...defaultFilters,
    ...initialFilters,
  });

  const filteredProperties = useMemo(
    () => filterProperties(properties, filters),
    [filters],
  );

  const visibleProperties = compact
    ? filteredProperties.slice(0, 6)
    : filteredProperties;

  const query = buildQuery(filters);

  const updateFilter = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <section id={sectionId} className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--card)] px-4 py-10 shadow-[0_25px_70px_rgba(15,23,42,0.06)] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Explore Our Listings</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => updateFilter("status", "all")}
            className={
              filters.status === "all"
                ? "filter-pill filter-pill-active"
                : "filter-pill"
            }
          >
            All
          </button>
          {propertyTypeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => updateFilter("status", option.value)}
              className={
                filters.status === option.value
                  ? "filter-pill filter-pill-active"
                  : "filter-pill"
              }
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="filter-select-wrap">
            <span className="filter-label">Price</span>
            <select
              value={filters.price}
              onChange={(event) => updateFilter("price", event.target.value)}
              className="filter-select"
            >
              {priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-select-wrap">
            <span className="filter-label">Area</span>
            <select
              value={filters.area}
              onChange={(event) => updateFilter("area", event.target.value)}
              className="filter-select"
            >
              {areaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-select-wrap">
            <span className="filter-label">Location</span>
            <select
              value={filters.location}
              onChange={(event) => updateFilter("location", event.target.value)}
              className="filter-select"
            >
              {locationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <button type="button" onClick={clearFilters} className="clear-button">
            Clear Filters
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]">
          <p>
            Showing <span className="font-semibold text-[var(--foreground)]">{visibleProperties.length}</span>{" "}
            of{" "}
            <span className="font-semibold text-[var(--foreground)]">
              {filteredProperties.length}
            </span>{" "}
            matched properties
          </p>
          {!compact && (
            <p>
              Explore homes by price, area, location, and whether you want to buy
              or sell.
            </p>
          )}
        </div>

        {visibleProperties.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProperties.map((listing) => (
              <article
                key={listing.id}
                className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="aspect-[1.2/1] overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={900}
                    height={750}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <span className="detail-pill bg-[var(--accent)] text-[var(--foreground)]">
                          {listing.status === "buy" ? "Buy" : "Sell"}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {listing.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {listing.location}
                      </p>
                    </div>
                    <span className="text-sm font-semibold">{listing.priceLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs font-medium text-[var(--muted)]">
                    <span className="detail-pill">{listing.areaLabel}</span>
                    <span className="detail-pill">{listing.beds}</span>
                    <span className="detail-pill">{listing.baths}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[2rem] border border-dashed border-black/10 bg-white px-6 py-14 text-center">
            <h3 className="text-2xl font-semibold tracking-tight">
              No properties found
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Try changing the buy or sell option, widening the price range, or
              choosing a different location.
            </p>
          </div>
        )}

        {showViewMore && (
          <div className="mt-10 flex justify-center">
            <Link href={{ pathname: "/properties", query }} className="primary-button">
              View More Property
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
