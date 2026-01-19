import "swiper/css";
import "swiper/css/navigation";

import { Home } from "@/components/Home/Home";
import {
  getBlogs,
  getExclusiveListing,
  getStateCount,
} from "@/lib/api/apiService";

export default async function HomePage() {
  const blogs = await getBlogs();
  const stateCount = await getStateCount();
  const exclusiveListing = await getExclusiveListing();
  return (
    <Home
      blogs={blogs}
      stateCount={stateCount}
      exclusiveListing={exclusiveListing}
    />
  );
}
