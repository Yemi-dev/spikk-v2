import localFont from "next/font/local";

export const Delight = localFont({
  src: [
    {
      path: "../../public/fonts/Delight-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Delight-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-delight",
  display: "swap",
});
