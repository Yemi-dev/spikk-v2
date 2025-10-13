import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface UsePageLoaderReturn {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (message: string) => void;
}

export const usePageLoader = (): UsePageLoaderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const router = useRouter();

  // Show loader on route changes
  useEffect(() => {
    const handleStart = (url: string) => {
      // Don't show loader for same page anchor links
      if (url.includes("#")) return;

      setIsLoading(true);
      setLoadingMessage("");
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return {
    isLoading,
    setLoading,
    loadingMessage,
    setLoadingMessage,
  };
};

export default usePageLoader;
