import { LandFilters } from "./parseFiltersFromUrl";

export function buildUrlFromFilters(filters: LandFilters): string {
  const segments: string[] = [];

  const min = filters.min_price;
  const max = filters.max_price;

  if (min && max) {
    segments.push(`between-${min}-${max}`);
  } else if (min) {
    segments.push(`over-${min}`);
  } else if (max) {
    segments.push(`under-${max}`);
  }

  return segments.length ? `/${segments.join("/")}` : "/";
}
