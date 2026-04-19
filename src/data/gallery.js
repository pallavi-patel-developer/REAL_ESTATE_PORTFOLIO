import { properties } from "@/data/properties";

export const galleryItems = [
  {
    title: "Minimal Exterior",
    image: properties[0].image,
    tag: "Buy",
    span: "md:col-span-2",
    height: "aspect-[1.8/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[0].status, location: properties[0].location },
    },
  },
  {
    title: "Luxury Living Space",
    image: properties[6].image,
    tag: "Sell",
    span: "md:row-span-2",
    height: "aspect-[0.92/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[6].status, location: properties[6].location },
    },
  },
  {
    title: "Contemporary Build",
    image: properties[3].image,
    tag: "Buy",
    span: "",
    height: "aspect-[1/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[3].status, location: properties[3].location },
    },
  },
  {
    title: "Warm Neighborhood",
    image: properties[8].image,
    tag: "Sell",
    span: "",
    height: "aspect-[1/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[8].status, location: properties[8].location },
    },
  },
  {
    title: "Urban Family Home",
    image: properties[1].image,
    tag: "Buy",
    span: "md:col-span-2",
    height: "aspect-[1.8/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[1].status, location: properties[1].location },
    },
  },
  {
    title: "Harbor View Escape",
    image: properties[6].image,
    tag: "Featured",
    span: "",
    height: "aspect-[1/1]",
    href: {
      pathname: "/properties",
      query: { location: properties[6].location },
    },
  },
  {
    title: "Riverfront Apartment",
    image: properties[7].image,
    tag: "Buy",
    span: "",
    height: "aspect-[1/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[7].status, location: properties[7].location },
    },
  },
  {
    title: "Cedar Park Villa",
    image: properties[8].image,
    tag: "Sell",
    span: "md:col-span-2",
    height: "aspect-[1.7/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[8].status, location: properties[8].location },
    },
  },
  {
    title: "Modern Haven Loft",
    image: properties[5].image,
    tag: "Buy",
    span: "md:row-span-2",
    height: "aspect-[0.92/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[5].status, location: properties[5].location },
    },
  },
  {
    title: "Sunnyvale Gardens",
    image: properties[2].image,
    tag: "Sell",
    span: "",
    height: "aspect-[1/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[2].status, location: properties[2].location },
    },
  },
  {
    title: "Willow Creek Estate",
    image: properties[4].image,
    tag: "Sell",
    span: "",
    height: "aspect-[1/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[4].status, location: properties[4].location },
    },
  },
  {
    title: "Maple Grove Residence",
    image: properties[1].image,
    tag: "Buy",
    span: "md:col-span-2",
    height: "aspect-[1.8/1]",
    href: {
      pathname: "/properties",
      query: { status: properties[1].status, location: properties[1].location },
    },
  },
];
