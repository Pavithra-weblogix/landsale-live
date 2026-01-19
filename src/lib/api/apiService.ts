import {
  BlogListResponse,
  LandListingResponse,
  StateCountResponse,
} from "@/types/apiTypes";
import { apiFetch } from "./fetcher";
import { API_ENDPOINTS } from "@/config";

// Blog List
export async function getBlogs() {
  return apiFetch<BlogListResponse>(API_ENDPOINTS.BlogList, {
    method: "GET",
  });
}

// State Count
export async function getStateCount() {
  return apiFetch<StateCountResponse>(API_ENDPOINTS.StateCount, {
    method: "GET",
  });
}

// Exclusive Listing
export async function getExclusiveListing(
  params: Record<string, string | number>,
) {
  const query = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  ).toString();
  return apiFetch<LandListingResponse>(`${API_ENDPOINTS.NewListing}?${query}`, {
    method: "GET",
  });
}

// Featured Listing
export async function getFeaturedListing(params: Record<string, string>) {
  const query = new URLSearchParams(params).toString();
  return apiFetch<LandListingResponse>(`${API_ENDPOINTS.NewListing}?${query}`, {
    method: "GET",
  });
}
