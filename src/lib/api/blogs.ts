import { BlogListResponse } from "@/types/blog";
import { apiFetch } from "./fetcher";

export async function getBlogs() {
  return apiFetch<BlogListResponse>("/blog-list", {
    method: "GET",
  });
}
