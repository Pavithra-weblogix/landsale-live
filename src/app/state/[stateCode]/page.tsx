import State from "@/components/State/State";
import { getListing } from "@/lib/api/apiService";

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

  return (
    <State
      exclusiveListing={exclusiveListing}
      featuredListing={featuredListing}
    />
  );
}
