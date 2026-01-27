import State from "@/components/State/State";
import { getListing, getListingsWithFilters } from "@/lib/api/apiService";

export default async function StatePage({
  params,
}: {
  params: Promise<{ stateCode: string }>;
}) {
  const { stateCode } = await params;
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
  });

  return (
    <State
      exclusiveListing={exclusiveListing}
      featuredListing={featuredListing}
      mainFilterListing={mainFilterListing?.data}
    />
  );
}
