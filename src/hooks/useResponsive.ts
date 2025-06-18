
import { useMediaQuery } from "react-responsive";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
}

const useResponsive = (): ResponsiveState => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const isLaptop = useMediaQuery({ maxWidth: 992 });
  const isDesktop = useMediaQuery({ maxWidth: 1200 });

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  };
};

export default useResponsive;
