import { PRICE_OPTIONS } from "@/config";

export interface LandFilters {
  min_price?: number;
  max_price?: number;
}

export function parseFiltersFromUrl(slugParts: string[]): LandFilters {
  const filters: LandFilters = {};

  const priceParts = slugParts
    .map((raw) => decodeURIComponent(raw).split("?")[0])
    .filter((part) => /^(over-|under-|between-)/.test(part));

  if (priceParts.length === 0) return filters;
  const part = priceParts[0];
  const isValidPrice = (val: number) => PRICE_OPTIONS.includes(val.toString());

  // over-300000
  let match = part.match(/^over-(\d+)$/);
  if (match) {
    const value = Number(match[1]);
    if (isValidPrice(value)) filters.min_price = value;
    return filters;
  }

  // under-800000
  match = part.match(/^under-(\d+)$/);
  if (match) {
    const value = Number(match[1]);
    if (isValidPrice(value)) filters.max_price = value;
    return filters;
  }

  // between-300000-800000
  match = part.match(/^between-(\d+)-(\d+)$/);
  if (match) {
    const min = Number(match[1]);
    const max = Number(match[2]);
    if (isValidPrice(min) && isValidPrice(max) && min <= max) {
      filters.min_price = min;
      filters.max_price = max;
    }
  }

  return filters;
}
