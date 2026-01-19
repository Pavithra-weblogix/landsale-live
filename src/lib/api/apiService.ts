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
export async function getExclusiveListing() {
  return apiFetch<LandListingResponse>(API_ENDPOINTS.ExclusiveListing, {
    method: "GET",
  });
}
