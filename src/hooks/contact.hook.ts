import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/constants/url";

interface ContactFormData {
  email: string;
  name: string;
  message: string;
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
