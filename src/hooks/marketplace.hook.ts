import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/constants/url";
import { CartFormValues } from "@/ui/components/Cart/CartInfo";

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
  category = "",
}: {
  page: number;
  pageSize: number;
  search?: string;
  name?: string;
  category?: string;
}) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["marketplace-products", page, pageSize, search, name, category],
    queryFn: () => axiosInstance.get(`/marketplace/for-web?page=${page}&pageSize=${pageSize}&name=${search}&category=${category}`),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["marketplace-products", page, pageSize, search, name, category],
      queryFn: () => axiosInstance.get(`/marketplace/for-web?page=${page}&pageSize=${pageSize}&name=${search}&category=${category}`),
    });
  }, [queryClient, page, pageSize, search, name, category]);

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
  { page, pageSize, name = "", category = "" }: { page: number; pageSize: number; name?: string; category?: string },
  options?: { enabled?: boolean }
) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product-category", ref, page, pageSize, name, category],
    queryFn: () =>
      axiosInstance.get(
        `/marketplace/product-by-category-web/${ref}?page=${page}&pageSize=${pageSize}&name=${name}&category=${category}`
      ),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
    enabled: options?.enabled ?? true,
  });

  useEffect(() => {
    if (options?.enabled !== false) {
      queryClient.prefetchQuery({
        queryKey: ["product-category", ref, page, pageSize, name, category],
        queryFn: () =>
          axiosInstance.get(
            `/marketplace/product-by-category-web/${ref}?page=${page}&pageSize=${pageSize}&name=${name}&category=${category}`
          ),
      });
    }
  }, [queryClient, ref, page, pageSize, name, options?.enabled]);
  return query;
}

export function useGetCategoryByID(id: string, options?: { enabled?: boolean }) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product-category", id],
    queryFn: () => axiosInstance.get(`/product-category/${id}`),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 20,
    enabled: options?.enabled ?? true,
  });

  useEffect(() => {
    if (options?.enabled !== false) {
      queryClient.prefetchQuery({
        queryKey: ["product-category", id],
        queryFn: () => axiosInstance.get(`/product-category/${id}`),
      });
    }
  }, [queryClient, id, options?.enabled]);
  return query;
}



export function useSendOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CartFormValues) => axiosInstance.post("/order/web/shop", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order-products"] });
    },
  });
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
