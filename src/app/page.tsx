import "swiper/css";
import "swiper/css/navigation";

import { Home } from "@/components/Home/Home";
import { getBlogs, getStateCount } from "@/lib/api/apiService";

export default async function HomePage() {
  const blogs = await getBlogs();
  const stateCount = await getStateCount();
  return (
    <>
      <Home blogs={blogs} stateCount={stateCount} />
    </>
  );
}
