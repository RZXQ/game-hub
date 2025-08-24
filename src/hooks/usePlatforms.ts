import platforms from '@/data/platforms';
import apiClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import type { FetchResponse } from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePlatforms;
