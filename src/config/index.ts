export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const API_CONFIG = {
  API_BASE_URL: process.env.API_BASE_URL,
  API_TOKEN: process.env.API_TOKEN,
};

export const API_ENDPOINTS = {
  BlogList: "/blog-list",
  StateCount: "/state-count",
  NewListing: "/new_list",
  LocationSearch: "/location-search",
  FilterApi: "/filter-api",
  LocSearch: "/loc-search",
};

export const PRICE_OPTIONS = [
  "Any",
  "100000",
  "200000",
  "300000",
  "400000",
  "500000",
  "750000",
  "1000000",
  "1500000",
  "2000000",
];
export const LAND_OPTIONS = [
  "Any",
  "100",
  "200",
  "300",
  "400",
  "500",
  "750",
  "1000",
  "2000",
  "5000",
];

export const STATE_NAMES = [
  { code: "nsw", name: "New South Wales" },
  { code: "qld", name: "Queensland" },
  { code: "wa", name: "Western Australia" },
  { code: "vic", name: "Victoria" },
  { code: "sa", name: "South Australia" },
  { code: "act", name: "Australian Capital Territory" },
  { code: "tas", name: "Tasmania" },
  { code: "nt", name: "Northern Territory" },
];
