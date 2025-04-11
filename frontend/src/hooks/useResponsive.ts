import device from "@/constants/breakpoints";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isMobile = useMediaQuery({ query: device.mobile });
  const isTablet = useMediaQuery({ query: device.desktop });
  const isLaptop = useMediaQuery({ query: device.laptop });
  const isDesktop = useMediaQuery({ query: device.desktop });

  return { isMobile, isTablet, isLaptop, isDesktop };
};

export default useResponsive;
