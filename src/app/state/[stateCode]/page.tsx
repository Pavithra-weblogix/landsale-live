import State from "@/components/state/State";
import { getListing, getListingsWithFilters } from "@/lib/api/apiService";

export default async function StatePage({
  params,
  searchParams,
}: {
  params: Promise<{ stateCode: string }>;
  searchParams: Promise<{
    type?: string;
    "sort-by"?: string;
    clickid?: string;
  }>;
}) {
  const { stateCode } = await params;
  const { type, "sort-by": sortBy, clickid } = await searchParams;

  const exclusiveListing = await getListing({
    exclusive: "yes",
    limit: 1,
    state: stateCode,
  });
  const featuredListing = await getListing({
    featured: "yes",
    state: stateCode,
  });
  let mainFilterListing = null;
  if (!clickid) {
    mainFilterListing = await getListingsWithFilters({
      state: stateCode,
      ...(type ? { category: type } : {}),
      ...(sortBy ? { order: sortBy } : {}),
    });
  }
  return (
    <State
      exclusiveListing={exclusiveListing}
      featuredListing={featuredListing}
      mainFilterListing={mainFilterListing}
      stateCode={stateCode}
      filters={{ type, sortBy }}
      clickidQuery={clickid}
    />
  );
}
