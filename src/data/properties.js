export const properties = [
  {
    id: "oakwood-family-home",
    title: "Oakwood Family Home",
    priceLabel: "$345,000",
    priceValue: 345000,
    location: "Toronto, Canada",
    status: "buy",
    areaLabel: "2,200 SqFt",
    areaValue: 2200,
    beds: "4 Beds",
    baths: "2 Baths",
    image: "/images/oakwood-family-home.jpg",
  },
  {
    id: "maple-grove-residence",
    title: "Maple Grove Residence",
    priceLabel: "$372,000",
    priceValue: 372000,
    location: "Seattle, USA",
    status: "buy",
    areaLabel: "1,980 SqFt",
    areaValue: 1980,
    beds: "3 Beds",
    baths: "2 Baths",
    image: "/images/maple-grove-residence.jpg",
  },
  {
    id: "sunnyvale-gardens",
    title: "Sunnyvale Gardens",
    priceLabel: "$295,000",
    priceValue: 295000,
    location: "San Jose, USA",
    status: "sell",
    areaLabel: "1,850 SqFt",
    areaValue: 1850,
    beds: "3 Beds",
    baths: "2 Baths",
    image: "/images/sunnyvale-gardens.jpg",
  },
  {
    id: "coastal-breeze-villa",
    title: "Coastal Breeze Villa",
    priceLabel: "$372,000",
    priceValue: 372000,
    location: "Miami Beach, USA",
    status: "buy",
    areaLabel: "1,950 SqFt",
    areaValue: 1950,
    beds: "3 Beds",
    baths: "2 Baths",
    image: "/images/coastal-breeze-villa.jpg",
  },
  {
    id: "willow-creek-estate",
    title: "Willow Creek Estate",
    priceLabel: "$410,000",
    priceValue: 410000,
    location: "Austin, USA",
    status: "sell",
    areaLabel: "2,450 SqFt",
    areaValue: 2450,
    beds: "4 Beds",
    baths: "3 Baths",
    image: "/images/willow-creek-estate.jpg",
  },
  {
    id: "modern-haven-loft",
    title: "Modern Haven Loft",
    priceLabel: "$389,000",
    priceValue: 389000,
    location: "Portland, USA",
    status: "buy",
    areaLabel: "2,100 SqFt",
    areaValue: 2100,
    beds: "3 Beds",
    baths: "2 Baths",
    image: "/images/modern-haven-loft.jpg",
  },
  {
    id: "harbor-view-house",
    title: "Harbor View House",
    priceLabel: "$455,000",
    priceValue: 455000,
    location: "San Diego, USA",
    status: "sell",
    areaLabel: "2,650 SqFt",
    areaValue: 2650,
    beds: "4 Beds",
    baths: "3 Baths",
    image: "/images/harbor-view-house.jpg",
  },
  {
    id: "riverstone-apartment",
    title: "Riverstone Apartment",
    priceLabel: "$265,000",
    priceValue: 265000,
    location: "Chicago, USA",
    status: "buy",
    areaLabel: "1,420 SqFt",
    areaValue: 1420,
    beds: "2 Beds",
    baths: "2 Baths",
    image: "/images/riverstone-apartment.jpg",
  },
  {
    id: "cedar-park-villa",
    title: "Cedar Park Villa",
    priceLabel: "$520,000",
    priceValue: 520000,
    location: "Denver, USA",
    status: "sell",
    areaLabel: "2,980 SqFt",
    areaValue: 2980,
    beds: "5 Beds",
    baths: "4 Baths",
    image: "/images/cedar-park-villa.jpg",
  },
];

export const propertyTypeOptions = [
  { label: "Buy", value: "buy" },
  { label: "Sell", value: "sell" },
];

export const priceOptions = [
  { label: "Any Price", value: "all", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "$0 - $300k", value: "0-300000", min: 0, max: 300000 },
  { label: "$300k - $400k", value: "300000-400000", min: 300000, max: 400000 },
  { label: "$400k - $500k", value: "400000-500000", min: 400000, max: 500000 },
  { label: "$500k+", value: "500000-plus", min: 500000, max: Number.POSITIVE_INFINITY },
];

export const areaOptions = [
  { label: "Any Area", value: "all", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Up to 1,800 SqFt", value: "0-1800", min: 0, max: 1800 },
  { label: "1,801 - 2,200 SqFt", value: "1801-2200", min: 1801, max: 2200 },
  { label: "2,201 - 2,800 SqFt", value: "2201-2800", min: 2201, max: 2800 },
  { label: "2,800+ SqFt", value: "2800-plus", min: 2800, max: Number.POSITIVE_INFINITY },
];

export const locationOptions = [
  { label: "All Locations", value: "all" },
  ...Array.from(new Set(properties.map((property) => property.location))).map(
    (location) => ({
      label: location,
      value: location,
    }),
  ),
];

export function filterProperties(items, filters) {
  const selectedPrice =
    priceOptions.find((option) => option.value === filters.price) ?? priceOptions[0];
  const selectedArea =
    areaOptions.find((option) => option.value === filters.area) ?? areaOptions[0];

  return items.filter((property) => {
    const matchesStatus =
      filters.status === "all" || property.status === filters.status;
    const matchesPrice =
      property.priceValue >= selectedPrice.min &&
      property.priceValue <= selectedPrice.max;
    const matchesArea =
      property.areaValue >= selectedArea.min &&
      property.areaValue <= selectedArea.max;
    const matchesLocation =
      filters.location === "all" || property.location === filters.location;

    return matchesStatus && matchesPrice && matchesArea && matchesLocation;
  });
}
