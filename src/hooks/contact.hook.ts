import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/constants/url";

interface ContactFormData {
  email: string;
  phone: string;
  message: string;
}

export function useGetWaitlist({ page = 1 }) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["dashboard", page],
    queryFn: () =>
      axiosInstance.get("/waitlist", {
        params: { page },
      }),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["waitlist", page],
      queryFn: () =>
        axiosInstance.get("/waitlist", {
          params: { page },
        }),
    });
  }, [queryClient, page]);

  return query;
}

export function useContactUs() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ContactFormData) => axiosInstance.post("contact-us", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact"] });
    },
  });
}
