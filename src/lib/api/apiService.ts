import { SITE_URL } from "@/config";

// Blog List
export async function getBlogs() {
  const res = await fetch(`${SITE_URL}/api/lfs/blog-list`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

// State Count
export async function getStateCount() {
  const res = await fetch(`${SITE_URL}/api/lfs/state-count`);
  if (!res.ok) throw new Error("Failed to fetch state count");
  return res.json();
}

// Exclusive Listing
export async function getExclusiveListing(
  params: Record<string, string | number>,
) {
  const query = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)]),
  ).toString();

  const res = await fetch(`${SITE_URL}/api/lfs/new-list?${query}`);
  if (!res.ok) throw new Error("Failed to fetch exclusive listings");
  return res.json();
}

// Featured Listing
export async function getFeaturedListing(params: Record<string, string>) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(`${SITE_URL}/api/lfs/new-list?${query}`);
  if (!res.ok) throw new Error("Failed to fetch featured listings");
  return res.json();
}
