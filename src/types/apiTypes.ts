// BlogList
export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  permalink: string;
}

export interface BlogListResponse {
  success: boolean;
  limit: number;
  offset: number;
  total: number;
  count: number;
  data: Blog[];
  cached: boolean;
}

//StateCount
export interface StateCountItem {
  state: string;
  slug: string;
  count: number;
}

export interface StateCountResponse {
  success: boolean;
  data: StateCountItem[];
}
