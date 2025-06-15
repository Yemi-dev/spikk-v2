import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/constants/url";

interface CareerFormData {
  name: string;
  email: string;
  resume: string;
}

export function useGetAllJobs() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["careers"],
    queryFn: () => axiosInstance.get("career/all"),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["careers"],
      queryFn: () => axiosInstance.get("career/all"),
    });
  }, [queryClient]);

  return query;
}

export function useApplyJob(jobId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CareerFormData) => axiosInstance.post(`career/apply?jobId=${jobId}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    },
  });
}
