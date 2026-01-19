import "swiper/css";
import "swiper/css/navigation";

import { Home } from "@/components/Home/Home";
import {
  getBlogs,
  getExclusiveListing,
  getFeaturedListing,
  getStateCount,
} from "@/lib/api/apiService";

export default async function HomePage() {
  const blogs = await getBlogs();
  const stateCount = await getStateCount();
  const exclusiveListing = await getExclusiveListing({
    exclusive: "yes",
    limit: 1,
  });
  const featuredListing = await getFeaturedListing({
    featured: "yes",
  });

  return (
    <Home
      blogs={blogs}
      stateCount={stateCount}
      exclusiveListing={exclusiveListing}
      featuredListing={featuredListing}
    />
  );
}
