import { MetadataRoute } from 'next/types';

import axios from 'axios';

export type IDResultParams = {
  beforeId?: string;
  limit?: number;
};

type Results<DataType> = {
  next: string;
  results: DataType[];
};

type GetAllPostIdParams = IDResultParams;

type GetAllPostIdResponse = Results<string>;

const BACKEND_URL = 'https://blue-staging-api.adler3d.com';

const getAllPostId = async ({ beforeId, limit }: GetAllPostIdParams) => {
  const response = await axios.get<GetAllPostIdResponse>(`${BACKEND_URL}/posts/id`, {
    params: { beforeId, limit },
  });

  return response.data;
};

const getTotalPostIds = async () => {
  const IS_LAST_POSTID_PAGES = '-1';
  const postIds = [];
  let next: string | undefined;

  const keepRunning = true;
  while (keepRunning) {
    const response = await getAllPostId({ limit: 9999, beforeId: next });

    next = response.next;
    postIds.push(...response.results);

    if (next === IS_LAST_POSTID_PAGES) return postIds;
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postIds = await getTotalPostIds();

  const dynamicRouteSitemaps: MetadataRoute.Sitemap =
    postIds?.map(postId => ({
      url: `/posts/${postId}`,
      lastModified: new Date().toISOString(),
    })) ?? [];

  return dynamicRouteSitemaps;
}
