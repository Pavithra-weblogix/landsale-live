import { BlogListResponse, StateCountResponse } from "@/types/apiTypes";
import { apiFetch } from "./fetcher";
import { API_ENDPOINTS } from "@/config";

// BlogList
export async function getBlogs() {
  return apiFetch<BlogListResponse>(API_ENDPOINTS.BlogList, {
    method: "GET",
  });
}

//StateCount
export async function getStateCount() {
  return apiFetch<StateCountResponse>(API_ENDPOINTS.StateCount, {
    method: "GET",
  });
}
