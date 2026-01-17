import { API_CONFIG } from "@/config";

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API_CONFIG.API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${API_CONFIG.API_TOKEN}`,
      ...(options.headers || {}),
    },
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error(`API Error ${res.status}`);
  }
  return res.json();
}
