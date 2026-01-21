"use client";

import { Home } from "@/components/Home/Home";
import {
  getBlogs,
  getExclusiveListing,
  getFeaturedListing,
  getStateCount,
} from "@/lib/api/apiService";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [blogs, setBlogs] = useState<any>(null);
  const [stateCount, setStateCount] = useState<any>(null);
  const [exclusiveListing, setExclusive] = useState<any>(null);
  const [featuredListing, setFeatured] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      setBlogs(await getBlogs());
      setStateCount(await getStateCount());
      setExclusive(
        await getExclusiveListing({
          exclusive: "yes",
          limit: 1,
        }),
      );
      setFeatured(
        await getFeaturedListing({
          featured: "yes",
        }),
      );
    }
    loadData();
  }, []);

  return (
    <Home
      blogs={blogs}
      stateCount={stateCount}
      exclusiveListing={exclusiveListing}
      featuredListing={featuredListing}
    />
  );
}
