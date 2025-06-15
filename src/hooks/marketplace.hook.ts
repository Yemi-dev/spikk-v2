import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/constants/url";

export function useGetAllCategories() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product-category"],
    queryFn: () => axiosInstance.get("/product-category"),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["product-category"],
      queryFn: () => axiosInstance.get("/product-category"),
    });
  }, [queryClient]);

  return query;
}
export function useGetAllMarketplaceProducts({
  page,
  pageSize,
  search = "",
  name = "",
}: {
  page: number;
  pageSize: number;
  search?: string;
  name?: string;
}) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["marketplace-products", page, pageSize, search, name],
    queryFn: () => axiosInstance.get(`/marketplace?page=${page}&pageSize=${pageSize}&search=${search}&name=${name}`),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["marketplace-products", page, pageSize, search, name],
      queryFn: () => axiosInstance.get(`/marketplace?page=${page}&pageSize=${pageSize}&search=${search}&name=${name}`),
    });
  }, [queryClient, page, pageSize, search, name]);

  return query;
}

export function useGetAllSpecialProducts() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["special-products"],
    queryFn: () => axiosInstance.get("/marketplace/special-products"),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["special-products"],
      queryFn: () => axiosInstance.get("/marketplace/special-products"),
    });
  }, [queryClient]);

  return query;
}
export function useGetAllPopularProducts() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["popular-products"],
    queryFn: () => axiosInstance.get("/marketplace/popular"),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["popular-products"],
      queryFn: () => axiosInstance.get("/marketplace/popular"),
    });
  }, [queryClient]);

  return query;
}

export function useGetCategoryByRef(
  ref: string,
  { page, pageSize, search = "" }: { page: number; pageSize: number; search?: string }
) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product-category", ref, page, pageSize, search],
    queryFn: () =>
      axiosInstance.get(`/marketplace/product-by-category/${ref}?page=${page}&pageSize=${pageSize}&search=${search}`),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["product-category", ref, page, pageSize, search],
      queryFn: () =>
        axiosInstance.get(`/marketplace/product-by-category/${ref}?page=${page}&pageSize=${pageSize}&search=${search}`),
    });
  }, [queryClient, ref, page, pageSize, search]);
  return query;
}

export function useGetCategoryByID(id: string) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product-category", id],
    queryFn: () => axiosInstance.get(`/product-category/${id}`),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["product-category", id],
      queryFn: () => axiosInstance.get(`/product-category/${id}`),
    });
  }, [queryClient, id]);
  return query;
}

// export function useContactUs() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: ContactFormData) => axiosInstance.post("contact-us", data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["contact"] });
//     },
//   });
// }
