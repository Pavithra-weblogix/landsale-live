import State from "@/components/state/State";
import { getListing, getListingsWithFilters } from "@/lib/api/apiService";

export default async function StatePage({
  params,
  searchParams,
}: {
  params: Promise<{ stateCode: string }>;
  searchParams: Promise<{ type?: string; "sort-by"?: string }>;
}) {
  const { stateCode } = await params;
  const { type, "sort-by": sortBy } = await searchParams;

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
