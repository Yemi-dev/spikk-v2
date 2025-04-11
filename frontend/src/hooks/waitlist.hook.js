import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/constants/url";

export function useGetWaitlist({ page }) {
  const queryClient = useQueryClient();

  const query = useQuery(
    ["dashboard", page],
    () =>
      axiosInstance.get(`/waitlist`, {
        params: {
          page,
        },
      }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 20,
    }
  );

  useEffect(() => {
    queryClient.prefetchQuery(["waitlist", page], () =>
      axiosInstance.get(`/waitlist`, {
        params: { page },
      })
    );
  }, [queryClient, page]);

  return query;
}

export function useCreateWaitlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => axiosInstance.post("waitlist", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["waitlist"] });
    },
  });
}
