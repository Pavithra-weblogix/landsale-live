export interface LandFilters {
  min_price?: number;
  max_price?: number;
}

export function parseFiltersFromUrl(slugParts: string[]): LandFilters {
  const filters: LandFilters = {};

  slugParts.forEach((raw) => {
    const part = decodeURIComponent(raw).split("?")[0];
    if (!part) return;

    // over-300000
    let match = part.match(/^over-(\d+)$/);
    if (match) {
      filters.min_price = Number(match[1]);
      return;
    }

    // under-800000
    match = part.match(/^under-(\d+)$/);
    if (match) {
      filters.max_price = Number(match[1]);
      return;
    }

    // between-300000-800000
    match = part.match(/^between-(\d+)-(\d+)$/);
    if (match) {
      filters.min_price = Number(match[1]);
      filters.max_price = Number(match[2]);
      return;
    }
  });

  return filters;
}
