import State from "@/components/State/State";
import { getListing, getListingsWithFilters } from "@/lib/api/apiService";
import { parseFiltersFromUrl } from "@/lib/utils/filters/parseFiltersFromUrl";

export default async function StatePage({
  params,
  searchParams,
}: {
  params: Promise<{ stateCode: string; slug?: string[] }>;
  searchParams: Promise<{ type?: string; "sort-by"?: string }>;
}) {
  const { stateCode, slug = [] } = await params;
  const { type, "sort-by": sortBy } = await searchParams;

  const { min_price, max_price } = parseFiltersFromUrl(slug);

  const exclusiveListing = await getListing({
    exclusive: "yes",
    limit: 1,
    state: stateCode,
  });

  const featuredListing = await getListing({
    featured: "yes",
    state: stateCode,
  });
  const mainFilterListing = await getListingsWithFilters({
    state: stateCode,
    // page: 1,
    limit: 50,
    min_price,
    max_price,
    ...(type ? { category: type } : {}),
    ...(sortBy ? { order: sortBy } : {}),
  });

  return (
    <State
      exclusiveListing={exclusiveListing}
      featuredListing={featuredListing}
      mainFilterListing={mainFilterListing?.data}
      stateCode={stateCode}
    />
  );
}
