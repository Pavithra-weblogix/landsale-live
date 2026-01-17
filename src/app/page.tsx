import "swiper/css";
import "swiper/css/navigation";

import { Home } from "@/components/Home/Home";
import { getBlogs } from "@/lib/api/blogs";

export default async function HomePage() {
  const blogs = await getBlogs();
  return (
    <>
      <Home blogs={blogs} />
    </>
  );
}
